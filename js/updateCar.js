function updateCar(that){

    var popup = document.getElementById("modify");
    var span = document.getElementsByClassName("close")[0];    
    popup.style.display = "block";
    span.onclick = function() {
        popup.style.display = "none";
    }

    var id = $(that).parents("tr").children()[0].innerHTML;
    var name = $(that).parents("tr").children()[1].innerHTML;    
    document.getElementById('modifyId').innerHTML=id;

        var consumption = $(that).parents("tr").children()[2].innerHTML;
        var color = $(that).parents("tr").children()[3].innerHTML;
        var manufacturer = $(that).parents("tr").children()[4].innerHTML;
        var avaiable = $(that).parents("tr").children()[5].innerHTML;
        var year = $(that).parents("tr").children()[6].innerHTML;
        var horsepower = $(that).parents("tr").children()[7].innerHTML;

        document.getElementsByName('name')[0].value=name;
        document.getElementsByName('consumption')[0].value=consumption;
        document.getElementsByName('color')[0].value=color;
        document.getElementsByName('manufacturer')[0].value=manufacturer;
        document.getElementsByName('avaiable')[0].value=avaiable;
        document.getElementsByName('year')[0].value=year;
        document.getElementsByName('horsepower')[0].value=horsepower;      
}

function modifyRecord(){
    var id = document.getElementById('modifyId').innerHTML;
    var name = document.getElementsByName('name')[0].value;
        let record = {
            name: name,
            consumption: document.getElementsByName("consumption")[0].value,
            color: document.getElementsByName("color")[0].value,
            manufacturer: document.getElementsByName("manufacturer")[0].value,
            avaiable: document.getElementsByName("avaiable")[0].value,
            year: document.getElementsByName("year")[0].value,
            horsepower: document.getElementsByName("horsepower")[0].value
        }
        updateRequest(JSON.stringify(record),name,id);
}

function updateRequest(dataJson,name,id){
    var confirmation = confirm("Are you sure you want to update: "+name+"?");    

    if(confirmation){       
        $.ajax({
            type: 'POST',
            url: "https://webtechcars.herokuapp.com/api/cars/",
            data: dataJson,
            dataType: "json",
            contentType: "application/json",
        }); 

        $.ajax({
            url: 'https://webtechcars.herokuapp.com/api/cars/' + id,
            type: 'DELETE',
            success: function (data) {
                console.log(data);
                alert(name + " updated.");
                location.reload();
            }
        });      
    }
}


