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
    var reqdata = JSON.stringify(data);
    
  }
