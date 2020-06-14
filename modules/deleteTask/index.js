const fs = require('fs');


module.exports = idTaskToDelete => {
    let tasks = JSON.parse( fs.readFileSync( './assets/tareas.json', 'utf-8') );
    let response = '';
    let existe = false;
    
    tasks = tasks.filter( value => {
        if ( value.id === idTaskToDelete ) {
            existe = true;
        }
        return value.id !== idTaskToDelete 
    })

    if (existe) {
        tasks = JSON.stringify(tasks, null, ' ');
        fs.writeFileSync('./assets/tareas.json', tasks, 'utf-8')
        response = 'Se eliminó la tarea.';
    } else { 
        response = 'No se encontró la tarea indicada.';
    }
    
    return response
};