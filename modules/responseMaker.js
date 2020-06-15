module.exports = (tasks, all=true ) => {
    
    let response = '\n';
    tasks.map( (value, i) => { 
        response += '* Tarea (' + (i+1) + '/' + tasks.length+ ')' 
            + ' - ID: ' + value.id 
            + ' (' + value.estado + ')'
            + ' - ' + value.titulo + '\n';
        response += all === true ? '   Descripción: ' + value.descripcion + '\n\n' : '';
        // response += all === true ? '\nEstado: ' + value.estado + '\n---\n' : '';
    });
    response += '\n --- Fin Listado ---\n'
    return response 
}