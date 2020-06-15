let h = 
`----------------------------------------------------------------------------------
----------------------------------     AYUDA    ----------------------------------
* Usar "crear" para agregar una nueva tarea, acompañado de --modificadores y "sus valores" (entre comillas).
Ejemplo: crear --titulo "El titulo de la tarea" --descripcion "La descripcion"
(El estado por defecto se carga con estado "Pendiente", vease debajo como modificar a "Iniciada" o "Terminada")

* Usar "listar" para listar los titulos de todas las tareas[, --modificador valor].
Ejemplo: listar --estado 1 | --estado 2 | --estado 3 | --estado 12
(Donde: Pendiente = 1, Iniciada = 2, Terminada = 3 y Pendientes+Iniciadas = 12)
Puede indicar listar con detalles indicando: listar all

* Usar "detalle" + [Nº de tarea] para ver una sola tarea completa.

* Usar "modificar" + [Nº de tarea] para cambiar un titulo, una descripcion o un estado, 
acompañado de --modificador con su valor valor correspondiente.
Ejemplo:    modificar 3 --estado 2                      (Se modifica el estado de la tarea Nº 3 a Iniciada)
            modificar 5 --descripcion "Refactorizar"    (Se modifica la descripcion de la tarea Nº 5 a "Refactorizar")

* Usar "eliminar" + [Nº de tarea] para eliminar la tarea indicada. [ --- Importante: No pide confirmación ---]

-----------------------------------     FIN     -----------------------------------
-----------------------------------------------------------------------------------`;

module.exports = h;