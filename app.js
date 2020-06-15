// --Modulos internos
const fs = require('fs'); // Necesario agregar acá este modulo? creo que no. probé un poco y anda sin él
// Pero lo dejo por las dudas para compartir y les funcione.

// --Modulos de tercero
const argv = require('yargs').argv;

// --Modulos Propios

// texto de ayuda a imprimir (Si, era singular. capaz hacía un objeto de textos por cada propiedad.)
const help = require('./modules/templates');

// Modulos de lógica para cada switch - Todos retornar un texto a mostrar
const listTasks = require('./modules/listTasks/index');
const saveTask = require('./modules/saveTask/index');
const taskDetails = require('./modules/taskDetails/index');
const updateTask = require('./modules/updateTask/index');
const deleteTask = require('./modules/deleteTask/index');
// ----------- Falta comentar los módulos -------------------

// Se verifica que existan argumentos y se inicializan variables.
let isArgs1 = argv._[0] ? argv._[0].toString().toLowerCase() : ''; //Argumento 1: determina la acción - Switch
let isArgs2 = argv._[1] ? argv._[1] : '';   //argumento 2: Se usa para recibir ID p/ Detalle, Modificar y Eliminar
let id = null;
    //Array para conversion de estados (numericos) a lo que se va a guardar (strings).
const estados = ['Pendiente', 'Iniciada', 'Terminada']; 

switch (isArgs1) {
    case "ayuda":
        console.log(help);
        break;
    case "crear": 
        let newTask = {};
        newTask.titulo = argv.titulo;    
        newTask.descripcion = argv.descripcion;
        newTask.estado = "Pendiente";
    
        console.log(saveTask(newTask));
        
        break;
    case "listar":  //Agregar parametro opcional para determinar si se quiere listar solo titulos o completos
        if ( !isArgs2.toLowerCase() === 'all' ) {
            console.log('El segundo parametro junto a listar no se reconoce - puede consultar "ayuda"');
            break            
        }
       
        console.log( listTasks(argv.estado, isArgs2) );
        
        break;
    case "detalle": 
        id = Number(isArgs2);
        
        if ( !id ) {
            console.log('Debe indicar ID numerico - puede consultar "ayuda". ');
        } else {
            console.log( taskDetails(id) );
        }
        
        break;
    case "modificar":
        id = Number(isArgs2);
                        
        if ( !id ) {
            console.log('Debe indicar un ID numerico - puede consultar "ayuda". ');
            break
        }
        
        let taskToUpdate = {};
        taskToUpdate.id = id;

        if ( !argv.titulo && !argv.descripcion && !argv.estado) {
            console.log('No indicó ningun campo a modificar - puede consultar "ayuda"');
            break
        }

        if ( argv.estado ) { //  <--------- Evaluación redundante, ni ganas de sacarlo.
            let estado = Number(argv.estado);
            if ( !estado ) {
                console.log('El estado debe ser un número - puede consultar "ayuda"');
                break
            }
            if (estado < 1 || estado > 3) {
                console.log('Los estados posibles son 1, 2 y 3 - puede consultar "ayuda"');
                break
            } 
            taskToUpdate.estado = estados[estado-1];
        } else {
            taskToUpdate.estado = null;
        }

        taskToUpdate.titulo = argv.titulo ? argv.titulo : null;
        taskToUpdate.descripcion = argv.descripcion ? argv.descripcion : null

        console.log( updateTask( taskToUpdate ) );
        
        break;
    case "eliminar":
        id = Number(isArgs2);
                        
        if ( !id ) {
            console.log('Debe indicar un ID numerico - puede consultar "ayuda". ');
            break
        }

        console.log( deleteTask(id) );
        
        break;
    default:
        console.log("\nNo se reconoce el comando. Puede usar 'ayuda' para obtener más información.\n")
        break;
}