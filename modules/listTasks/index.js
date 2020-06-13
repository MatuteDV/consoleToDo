const fs = require('fs');
const responseMaker = require('../responseMaker.js') 

module.exports = ( option = 0 ) => {
    let tasks = fs.readFileSync('./assets/tareas.txt', 'utf-8');
    tasks = JSON.parse(tasks);
    
    let filtredTasks = [];
    let response = ''; 
        
    switch (option) {
        case 0: 
            filtredTasks = tasks;
            if (filtredTasks.length === 0) { return 'No hay ninguna tarea que listar'}
            response = responseMaker(filtredTasks);
            break;
        case 1: 
            filtredTasks = tasks.filter( value => value.estado === 'Pendiente' ? true : false);
            if (filtredTasks.length === 0) { return '\nNo hay ninguna tarea que listar\n'}
            response = responseMaker(filtredTasks);
            break
        case 2: 
            filtredTasks = tasks.filter( value => value.estado === 'Iniciada' ? true : false);
            if (filtredTasks.length === 0) { return '\nNo hay ninguna tarea que listar\n'}
            response = responseMaker(filtredTasks);
            break
        case 3: 
            filtredTasks = tasks.filter( value => value.estado === 'Terminada' ? true : false);
            if (filtredTasks.length === 0) { return '\nNo hay ninguna tarea que listar\n'}
            response = responseMaker(filtredTasks);
            break
        case 12: 
            filtredTasks = tasks.filter( value => value.estado !== 'Terminada' ? true : false);
            if (filtredTasks.length === 0) { return '\nNo hay ninguna tarea que listar\n'}
            response = responseMaker(filtredTasks);
            break
        default: response = '\nOpcioón no valida - Verifique en "ayuda" las opciones.\n';
            break;
    }
    
    return response
}