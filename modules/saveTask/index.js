const fs = require('fs');
const chalk = require('chalk');
const templates = require('../templates');

//const pathTasksFile = '../../assets/tareas.json';
const pathTasksFile = './assets/tareas.json';
const pathIdMaximoFile = './assets/idMaximo.json';

let save = ( titulo, descripcion = '') => {
    let newTask = {};
    
    newTask.titulo = titulo;
    newTask.descripcion = descripcion;
    newTask.estado = 'Pendiente';

    let taskFile = fs.readFileSync(pathTasksFile,'utf-8');
    let idMaximo = fs.readFileSync(pathIdMaximoFile, 'utf-8');
    taskFile = JSON.parse(taskFile);
    idMaximo = JSON.parse(idMaximo);
    
    let repetido = false;
    taskFile.map( value => {
        repetido = (value.titulo === newTask.titulo) || repetido ? true : false;
    });
    
    if (repetido === true) {
        return templates.tituloRepetido
    }
    newTask.id = ++idMaximo.idMaximo;
    taskFile.push(newTask);
       
    fs.writeFileSync(pathTasksFile, JSON.stringify(taskFile, null, ' '),'utf-8'); 
    fs.writeFileSync(pathIdMaximoFile, JSON.stringify(idMaximo, null, ' '), 'utf-8')
    
    return '\nLa tarea ' 
        + chalk.bold('"' 
        + newTask.titulo 
        + '"') 
        + ' se agregó ' 
        + chalk.greenBright('exitosamente.')
        + '\n'
}


module.exports = save