function validarCorreo(correo){
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido= expReg.test(correo);
    console.log(correo);

    if(esValido){
        alert('El correo electrónico es válido');
    } else{
        alert('El correo electrónico No es válido');
    } 
    
};
const APIURL = 'https://jsonplaceholder.typicode.com' ; 
    //Declaramos la información a enviar
    
    $('form').on('submit', (e)=> {  
        e.preventDefault()
       
        console.log(e.target[0].value)
        console.log(e.target[2].value)
        const infoPost =  { mail: e.target[0].value, mensaje: e.target[2].value }
    $.ajax({
        method: "POST",
        url:  APIURL+"/posts",
        data: infoPost,
        error: (e) => {
            console.log(e)
            $("#res").prepend(`<div class='respuesta'><h3>No se pudo enviar mensaje</h3>
            </div>
            `);
        },
        success: function(respuesta){
            $("#res").prepend(`<div class='respuesta'><h3>Mensaje enviado correctamente</h3>
            <div>${respuesta.mail}</div>
            </div>
            `);
        }
    });

});

