const fs = require('fs');

//const pathTasksFile = '../../assets/tareas.json';
const pathTasksFile = './assets/tareas.json';
const pathIdMaximoFile = './assets/idMaximo.json';

let save = newTask => {
    let taskFile = fs.readFileSync(pathTasksFile,'utf-8');
    let idMaximo = fs.readFileSync(pathIdMaximoFile, 'utf-8');
    taskFile = JSON.parse(taskFile);
    idMaximo = JSON.parse(idMaximo);
    
    let repetido = false;
    taskFile.map( value => {
        repetido = (value.titulo === newTask.titulo) || repetido ? true : false;
    });
    
    if (repetido === true) {
        return '\nTarea no agregada, ya existe otra tarea con el mismo titulo.\n'
    }
    newTask.id = ++idMaximo.idMaximo;
    taskFile.push(newTask);
       
    fs.writeFileSync(pathTasksFile, JSON.stringify(taskFile, null, ' '),'utf-8'); 
    fs.writeFileSync(pathIdMaximoFile, JSON.stringify(idMaximo, null, ' '), 'utf-8')
    
    return 'La tarea "' + newTask.titulo + '" se agrego exitosamente.'
}


module.exports = save