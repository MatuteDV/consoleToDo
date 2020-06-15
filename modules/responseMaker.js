const chalk = require('chalk');

module.exports = (tasks, all=true ) => {
    
    let response = '\n';
    tasks.map( (value, i) => { 
        response += chalk.magentaBright.bold('* ') + chalk.gray( 'Tarea (' + (i+1) + '/' + tasks.length+ ')' ) 
            + ' - ' + chalk.gray('ID: ') + value.id ;
        response += value.estado === 'Pendiente' ? chalk.red(' (' + value.estado + ')') :
                    value.estado === 'Iniciada' ? 
                        chalk.yellow(' (' + value.estado + ' )') : 
                        chalk.green(' (' + value.estado + ')');
        response += ' - ' + chalk.bold(value.titulo) + '\n';
        response += all === true ? 
                chalk.grey( '   Descripción: ' ) + chalk.cyan(value.descripcion) + '\n\n' : '';
    });
    return response 
}