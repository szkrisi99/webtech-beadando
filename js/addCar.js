function addCar(event) {
    event.preventDefault();
    alert("The form was submitted");
    let car = {
        name: document.getElementsByName("name")[0].value,
        consumption: document.getElementsByName("consumption")[0].value,
        color: document.getElementsByName("color")[0].value,
        manufacturer: document.getElementsByName("manufacturer")[0].value,
        avaiable: document.getElementsByName("avaiable")[0].value,
        year: document.getElementsByName("year")[0].value,
        horsepower: document.getElementsByName("horsepower")[0].value
    }

    var carJSON = JSON.stringify(car);
    console.log(carJSON);

    $.ajax({
        type: "POST",
        url: "https://webtechcars.herokuapp.com/api/cars",
        data: carJSON,
        error: function(e){
            console.log(e);
        },
        dataType: "json",
        contentType: "application/json"
    });
}

