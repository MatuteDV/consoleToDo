module.exports = tasks => {
    let response = '\n --- Listado ---';
    tasks.map( (value, i) => { 
        response += '\n---';
        response += '\nTarea Nº ' + (i+1) + ' de ' + tasks.length+ ' por mostrar';
        response += '\nID: ' + value.id;
        response += '\nTitulo: ' + value.titulo;
        response += '\nDescripción: ' + value.descripcion;
        response += '\nEstado: ' + value.estado + '\n---\n';
    });
    response += ' --- Fin Listado ---\n'
    return response 
}