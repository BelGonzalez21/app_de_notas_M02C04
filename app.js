const process = require('process')
const { listarTareas, agregarTarea, haciendoTarea, terminarTarea, eliminarTarea, filtrarTarea, buscarTarea } = require('./funcionesDeTareas')

const accion = process.argv[2];


switch (accion) {
    case 'listar':
        listarTareas();
        break;
    case 'agregar':
        let titulo = process.argv[3];
        let nuevaTarea = {
            id: new Date().getTime(),
            titulo,
            estado: 'Tarea pendiente'
        }
        agregarTarea(nuevaTarea)
        break;
    case 'hacer':
        haciendoTarea(+process.argv[3])
        break;
    case 'terminar':
        terminarTarea(+process.argv[3])
        break;
    case 'eliminar':
        eliminarTarea(+process.argv[3])
        break;
    case 'filtrar':
        filtrarTarea(process.argv[3])
        break;
    case 'buscar':
        buscarTarea(process.argv[3])
        break
    case undefined:
        console.log(`Atencion - Tienes que pasar una acción. Ingresa algunas de las siguientes palabras:\n\n-listar: para ver tus tareas\n-agregar: para crear una nueva tarea\n-hacer + id: para cambiar estado de pendiente a en proceso\n-terminar + id: para cambiar estado de pendiente a finalizada\n-eliminar + id: para eliminar tarea según su id\n-filtrar + estado ("Tarea completada", "Tarea en proceso", "Tarea pendiente")\nbuscar + 'texto', ej: buscar 'comprar'.\nATENCIÓN: En las opciones que requieren número de id o texto, debes dejar un espacio entre la acción y el número y las texto van con comillas.`)
        break;
    default:
        console.log(`Opción no válida. Por favor ingresa algunas de las siguiente opciones:\n-listar: para ver tus tareas\n-agregar: para crear una nueva tarea\n-hacer + id: para cambiar estado de pendiente a en proceso\n-terminar + id: para cambiar estado de pendiente a finalizada\n-eliminar + id: para eliminar tarea según su id por favor.\n-filtrar + estado ("Tarea completada", "Tarea en proceso", "Tarea pendiente")\n-buscar + texto, ej: buscar 'comprar' \n\nATENCIÓN: En las opciones que requieren número de id o 'texto', debes dejar un espacio entre la acción y el número y las texto van con comillas.`)
        break;
}