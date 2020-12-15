function deleteManufacturer(event){
    event.preventDefault();
    var deleteID = document.getElementsByName("_manid")[0].value
    //console.log(deleteID);
    var confirmation = confirm("Are you sure you want to delete: "+deleteID+"?");

    if(confirmation){
        $.ajax({
            url: 'https://webtechcars.herokuapp.com/api/manufacturers/' + deleteID,
            type: 'DELETE',
            error: function (data) {
                alert("Something went wrong...");
                console.log('Error:', data);
            },
            success: function (data) {
                console.log(data);
                alert(deleteID + " deleted.");
                location.reload();
            }
        })
    }
}