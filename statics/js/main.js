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

    console.log(data);
        
    $.ajax({
                    url: '/predict',
                    type:'POST',
                    dataType: 'json',
                    // contentType: "application/json; charset=utf-8",
                    data: reqdata,
                    success: function(response) {
                        console.log(data)
						console.log("berhasil" + response)
                    },
                    error: function(response) {
                        console.log(response);
				    }    
    })
}
