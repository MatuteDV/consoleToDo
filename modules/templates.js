const chalk = require('chalk');

//  Variables para textos para template AYUDA
let cabecera = chalk.yellow.bold(
'----------------------------------     AYUDA    ----------------------------------');
let pie = chalk.yellowBright.bold(
'-----------------------------------     FIN     -----------------------------------');
let crear = chalk.yellowBright.bold('"crear"');
let listar = chalk.yellowBright.bold('"listar"');
let detalle = chalk.yellowBright.bold('"detalle"');
let modificar = chalk.yellowBright.bold('"modificar"');
let eliminar = chalk.yellowBright.bold('"eliminar"');

let templates = {};

templates.tareaEliminada = 'Se ' 
    + chalk.redBright('eliminó') 
    + ' la tarea ' 
    + chalk.bold.yellowBright('Exitosamente');

templates.idNoExiste = 'No se encontró la tarea indicada.';

templates.tareaActualizada = 'Se actualizó la tarea.';

templates.estadoNoValido = 'Estado a listar no valido  - Verifique en'+ chalk.yellow('"ayuda"') + ' las opciones.';

templates.listaVacia = 'No hay ninguna tarea que listar';

templates.tituloRepetido = chalk.redBright.bold('Tarea no agregada') 
    + ', ya existe otra tarea con el mismo titulo.';

templates.faltaTitulo = 'No se indicó el titulo';

templates.estadosPosibles = chalk.redBright.bold('Estado no actualizado') 
+ ' - Indicó un estado no válido, los estados posibles son '
+ chalk.redBright('1') + ', '
+ chalk.yellowBright('2')+ ' y '
+ chalk.greenBright('3');

templates.estadoNumerico = 'El estado debe ser un número';

templates.campoModificador = 'No indicó ningun campo a modificar';

templates.comandoIncorrecto = 'No se reconoce el comando. Puede usar' + chalk.yellow('"ayuda"') + ' para obtener más información.';

templates.consultarAyuda = chalk.bold('puede consultar "ayuda"');

templates.idNumerico = 
chalk.bold.magentaBright('El segundo parametro junto a "listar" no se reconoce');

templates.ayuda = 
`\n
${cabecera}
* Usar ${crear} para agregar una nueva tarea, acompañado de --modificadores y "sus valores" (entre comillas).
Ejemplo: crear --titulo "El titulo de la tarea" --descripcion "La descripcion"
(El estado por defecto se carga con estado "Pendiente", vease debajo como modificar a "Iniciada" o "Terminada")

* Usar ${listar} para listar los titulos de todas las tareas[, --modificador valor].
Ejemplo: listar --estado 1 | --estado 2 | --estado 3 | --estado 12
(Donde: Pendiente = 1, Iniciada = 2, Terminada = 3 y Pendientes+Iniciadas = 12)
Puede indicar listar con detalles indicando: listar all

* Usar ${detalle} + [Nº de tarea] para ver una sola tarea completa.

* Usar ${modificar} + [Nº de tarea] para cambiar un titulo, una descripcion o un estado, 
acompañado de --modificador con su valor valor correspondiente.
Ejemplo:    modificar 3 --estado 2                      (Se modifica el estado de la tarea Nº 3 a Iniciada)
            modificar 5 --descripcion "Refactorizar"    (Se modifica la descripcion de la tarea Nº 5 a "Refactorizar")

* Usar ${eliminar} + [Nº de tarea] para eliminar la tarea indicada. [ --- Importante: No pide confirmación ---]

${pie}
\n`;


module.exports = templates;