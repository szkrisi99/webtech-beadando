function addManufacturer(event) {
    event.preventDefault();
    alert("The form was submitted");
    let manufacturer = {
        name: document.getElementsByName("name")[0].value,
        country: document.getElementsByName("country")[0].value,
        founded: document.getElementsByName("founded")[0].value,
    }

    var manufacturerJSON = JSON.stringify(manufacturer);
    console.log(manufacturerJSON);

    $.ajax({
        type: "POST",
        url: "https://webtechcars.herokuapp.com/api/manufacturers",
        data: manufacturerJSON,
        error: function(e){
            console.log(e);
        },
        dataType: "json",
        contentType: "application/json"
    });
}

