const fs = require('fs');
const responserMaker = require('../responseMaker')

module.exports = id => {
    let response = '';
    let tasks = JSON.parse( fs.readFileSync('./assets/tareas.txt', 'utf-8') );
    
    let filteredTasks = tasks.filter( value => {
        return value.id === id
    });

    response = responserMaker(filteredTasks);

    return response 
}