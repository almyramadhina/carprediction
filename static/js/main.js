function sendForm() {
    var year = parseInt(document.getElementById("year").value);
    var hp = parseInt(document.getElementById("hp").value);
    var cyl = parseInt(document.getElementById("cyl").value);

    var data = '';

    data = {
        "year": year,
        "enginehp": hp,
        "enginecylinder": cyl
    };

        
    $.ajax({
                    url: '/predict',
                    type:'POST',
                    dataType: 'json',
                    // contentType: "application/json; charset=utf-8",
                    data: data,
                    success: function(response) {
                        console.log(data)
						console.log(response)
                        hasil = '';
                        var result = document.getElementById('result')
                        hasil = '<p style="font-size:150%;"> Prediction cost of your car is $'+ response.result +'</p>';
                        result.innerHTML = hasil;
                    },
                    error: function(response) {
                        console.log(response);
				    }    
    })
}
