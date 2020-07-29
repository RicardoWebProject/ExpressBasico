$(document).ready(function Iniciar() {
    $('#Formulario').hide();
    /*Los ID se pueden almacenar en variables y usar esas variables.
    Si no se quiere usar variables y utilizar directamente el ID, entonces
    hay que usar '#ID' para hacer referencia al ID a usar, y 
    manejarlo dentro de alguna función. */
    $('#Titulo2').hide();
    //Por ejemplo aquí, uso directamente 'Titulo2' (que es un ID) para manejarlo
    //Sin necesidad de meterla en una variable.
    $('#botonSesion').click(function() {  
        Presionar();
        });

    $('#Enviar').click(function() {
        Ingresar();
    });
    /*Hasta aquí es que llega el código para poder usar Index */

    $('#Subir').click(function (e) { 
        Agregar();
    });

});

function Presionar()
{
    alert("Ahora se le mostrará el formulario");
    $('#Formulario').show();
    $('#botonSesion').hide();
    $('#Titulo1').hide();
    $('#Titulo2').show();
    console.log('Como que sí funciona...');
}

function Ingresar()
{
    console.log("Usuario Activado");
    alert("Sesión Iniciada. Ahora, se recargará la página.");
}

function Agregar()
{
    var contenedor = $('#CuerpoTabla').html();
    var nuevaFila = '<tr>';
    nuevaFila = '<td>"El contenido de la celda"</td>';
    nuevaFila += '<td>"El contenido de la celda"</td>';
    nuevaFila += '<td>"El contenido de la celda"</td>';
    nuevaFila += '<td>"El contenido de la celda"</td>';
    nuevaFila += '<td>"El contenido de la celda"</td>';
    nuevaFila = '</tr>';

    $('#CuerpoTabla').html(contenedor+nuevaFila);
}