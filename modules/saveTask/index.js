const fs = require('fs');

//const pathTasksFile = '../../assets/tareas.txt';
const pathTasksFile = './assets/tareas.txt';

let save = newTask => {
    let taskFile = fs.readFileSync(pathTasksFile,'utf-8');
    taskFile = JSON.parse(taskFile);
    
    let repetido = false;
    taskFile.map( value => {
        repetido = (value.titulo === newTask.titulo) || repetido ? true : false; 
    });
    
    if (repetido === true) {
        return '\nTarea no agregada, ya existe otra tarea con el mismo titulo.\n'
    }

    taskFile.push(newTask);
       
    fs.writeFileSync(pathTasksFile, JSON.stringify(taskFile),'utf-8'); 
    
    return 'La tarea "' + newTask.titulo + '" se agrego exitosamente.'
}


module.exports = save