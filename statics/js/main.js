function sendForm() {
    var year = parseInt(document.getElementById("year").value);
    var hp = parseFloat(document.getElementById("hp").value);
    var cyl = parseFloat(document.getElementById("cyl").value);

    var data = '';

    data = {
        "tahun": year,
        "engine hp": hp,
        "engine cylinder": cyl
    };

    console.log(data);
    var reqdata = JSON.stringify(data);
    window.localStorage.setItem('data', reqdata);
  }