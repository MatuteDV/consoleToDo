const fs = require('fs');
const templates = require('../templates');


module.exports = taskToUpdate => {
    let tasks = JSON.parse( fs.readFileSync( './assets/tareas.json', 'utf-8') );
    let response = '';
    let existe = false;

    tasks.map( (value, i) => {
        if ( value.id === taskToUpdate.id ) { 
            existe = true;
            value.titulo = taskToUpdate.titulo !== null ? taskToUpdate.titulo : value.titulo;
            value.descripcion = taskToUpdate.descripcion !== null ? taskToUpdate.descripcion : value.descripcion;
            value.estado = taskToUpdate.estado !== null ? taskToUpdate.estado : value.estado;
        }
    });

    if (existe) {
        tasks = JSON.stringify(tasks, null, ' ');
        fs.writeFileSync('./assets/tareas.json', tasks, 'utf-8')
        response = templates.tareaActualizada;
    } else { 
        response = templates.idNoExiste;
    }

    return response 
};