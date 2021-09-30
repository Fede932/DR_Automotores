$.ajax({
    url: 'https://drautomotores.herokuapp.com/api/v1/car',
    type: 'GET',
    dataType: 'json',
    success: function(data){
        if(data.ok) {
            console.log(data.data)
        }
    }
}); 
