const fs = require('fs');


module.exports = taskToUpdate => {
    let tasks = JSON.parse( fs.readFileSync( './assets/tareas.txt', 'utf-8') );
    let response = '';
    let existe = false;

    tasks.map( (value, i) => {
        if ( value.id === taskToUpdate.id ) { 
            existe = true;
            value.titulo = taskToUpdate.titulo !== null ? taskToUpdate.titulo : value.titulo;
            value.descripcion = taskToUpdate.descripcion !== null ? taskToUpdate.descripcion : value.descripcion;
            value.estado = taskToUpdate.estado !== null ? taskToUpdate.estado : value.descripcion;
        }
    });

    if (existe) {
        tasks = JSON.stringify(tasks, null, ' ');
        fs.writeFileSync('./assets/tareas.txt', tasks, 'utf-8')
        response = 'Se actualizó la tarea.';
    } else { 
        response = 'No se encontró la tarea indicada.';
    }

    return response 
};