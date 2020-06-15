const fs = require('fs');
const responseMaker = require('../responseMaker.js') 
const templates = require('../templates.js')

module.exports = ( option = 0, all='all' ) => {
    let tasks = fs.readFileSync('./assets/tareas.json', 'utf-8');
    tasks = JSON.parse(tasks);
    
    let filtredTasks = [];
    let response = ''; 
        
    switch (option) {
        case 0: 
            filtredTasks = tasks;
            if (filtredTasks.length === 0) { return templates.listaVacia }
            response = responseMaker(filtredTasks, all === 'all' ? true : false);
            break;
        case 1: 
            filtredTasks = tasks.filter( value => value.estado === 'Pendiente' ? true : false);
            if (filtredTasks.length === 0) { return templates.listaVacia }
            response = responseMaker(filtredTasks, all === 'all' ? true : false);
            break
        case 2: 
            filtredTasks = tasks.filter( value => value.estado === 'Iniciada' ? true : false);
            if (filtredTasks.length === 0) { return templates.listaVacia }
            response = responseMaker(filtredTasks, all === 'all' ? true : false);
            break
        case 3: 
            filtredTasks = tasks.filter( value => value.estado === 'Terminada' ? true : false);
            if (filtredTasks.length === 0) { return templates.listaVacia }
            response = responseMaker(filtredTasks, all === 'all' ? true : false);
            break
        case 12: 
            filtredTasks = tasks.filter( value => value.estado !== 'Terminada' ? true : false);
            if (filtredTasks.length === 0) { return templates.listaVacia }
            response = responseMaker(filtredTasks, all === 'all' ? true : false);
            break
        default: response = templates.estadoNoValido;
            break;
    }
    
    return response
}