$(document).ready(function(){
    $.getJSON("https://webtechcars.herokuapp.com/api/cars", function(data) {
        var table =$("#carsTable");
        $.each(data, function(key, value) {
            var row = $('<tr></tr>');
            var idCell = $('<td>' + value._id +'</td>');
            var nameCell = $('<td>' + value.name +'</td>');
            var consumptionCell = $('<td>' + value.consumption +'</td>');
            var colorCell = $('<td>' + value.color +'</td>');
            var manufacturerCell = $('<td>' + value.manufacturer +'</td>');
            var availableCell = $('<td>' + value.avaiable + '</td>');
            var yearCell = $('<td>' + value.year +'</td>');
            var horsepowerCell = $('<td>' + value.horsepower +'</td>');
            var updateCell = $('<td>'+"<button type='button' onclick='updateCar(this);' class='btn btn-default'><img src='images/update.png'  width='25px'></button>"+'</td>');
            $(row).append(idCell);
            $(row).append(nameCell);
            $(row).append(consumptionCell);
            $(row).append(colorCell);
            $(row).append(manufacturerCell);
            $(row).append(availableCell);
            $(row).append(yearCell);
            $(row).append(horsepowerCell);
            $(row).append(updateCell);
            $(table).append(row);
        })
    })
})