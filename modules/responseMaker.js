module.exports = (tasks, all=true ) => {
    
    let response = '\n --- Listado ---';
    let tasksLength = tasks.length;
    tasks.map( (value, i) => { 
        response += '\n---';
        response += '\nTarea Nº ' + (i+1) + ' de ' + tasksLength+ ' por mostrar';
        response += '\nID: ' + value.id;
        response += '\nTitulo: ' + value.titulo;
        response += all === true ? '\nDescripción: ' + value.descripcion : '';
        response += all === true ? '\nEstado: ' + value.estado + '\n---\n' : '';
    });
    response += '\n --- Fin Listado ---\n'
    return response 
}