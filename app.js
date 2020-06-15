// --Modulos internos
const fs = require('fs'); // Necesario agregar acá este modulo? creo que no. probé un poco y anda sin él
const chalk = require('chalk');
// Pero lo dejo por las dudas para compartir y les funcione.

// --Modulos de tercero
const argv = require('yargs').argv;

// --Modulos Propios

// texto a imprimir.
const templates = require('./modules/templates');

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
        console.log(templates.ayuda);
        break;
    case "crear": 
        if ( !argv.titulo || argv.titulo === '' ) {
            console.log( templates.faltaTitulo + ' - ' + templates.consultarAyuda);
            break
        }
        let titulo = argv.titulo;
        let descripcion = argv.descripcion ? argv.descripcion.toString() : '';
        console.log( saveTask( titulo, descripcion ) );
        
        break;
    case "listar": 
        if ( isArgs2.toLowerCase() === 'all' || isArgs2.toLowerCase() === '' ) {
            console.log( listTasks(argv.estado, isArgs2) );
            break            
        }
        console.log( templates.idNumerico+ ' - ' + templates.consultarAyuda);
        
        break;
    case "detalle": 
        id = Number(isArgs2);
        
        if ( !id ) {
            console.log(templates.idNumerico + ' - ' + templates.consultarAyuda );
        } else {
            console.log( taskDetails(id) );
        }
        
        break;
    case "modificar":
        id = Number(isArgs2);
                        
        if ( !id ) {
            console.log(templates.idNumerico + ' - ' + templates.consultarAyuda );
            break
        }
        
        let taskToUpdate = {};
        taskToUpdate.id = id;

        if ( !argv.titulo && !argv.descripcion && !argv.estado) {
            console.log( templates.campoModificador + ' - ' + templates.consultarAyuda );
            break
        }

        if ( argv.estado ) { 
            let estado = Number(argv.estado);
            if ( !estado ) {
                console.log( templates.estadoNumerico + ' - ' + templates.consultarAyuda );
                break
            }
            if (estado < 1 || estado > 3) {
                console.log( templates.estadosPosibles + ' - ' + templates.consultarAyuda );
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
            console.log(templates.idNumerico + ' - ' + templates.consultarAyuda );
            break
        }

        console.log( deleteTask(id) );
        
        break;
    default:
        console.log( templates.comandoIncorrecto );
        break;
}