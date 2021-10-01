$.ajax({
    url: 'https://drautomotores.herokuapp.com/api/v1/car',
    type: 'GET',
    dataType: 'json',
    success: function(data){
        if(data.ok) {
            console.log(data.data)
            document.getElementById("respuesta").innerHTML = data.data;
            document.getElementById("respuesta").innerHTML = url;
        }
    }

});


const boton = document.getElementById("btnSearch").addEventListener("click", () =>{ ajax()});

    