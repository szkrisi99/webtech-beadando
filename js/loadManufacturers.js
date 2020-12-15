$(document).ready(function(){
    $.getJSON("https://webtechcars.herokuapp.com/api/manufacturers", function(data) {
        var table =$("#manufacturersTable");
        $.each(data, function(key, value) {
            var row = $('<tr></tr>');
            var idCell = $('<td>' + value._id +'</td>');
            var nameCell = $('<td>' + value.name +'</td>');
            var countryCell = $('<td>' + value.country +'</td>');
            var foundedCell = $('<td>' + value.founded +'</td>');
            var updateCell = $('<td>'+"<button type='button' onclick='updateManufacturer(this);' class='btn btn-default'><img src='images/update.png'  width='25px'></button>"+'</td>');
            $(row).append(idCell);
            $(row).append(nameCell);
            $(row).append(countryCell);
            $(row).append(foundedCell);
            $(row).append(updateCell);
            $(table).append(row);
        })
    })
})