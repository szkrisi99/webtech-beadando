function updateManufacturer(that){

    var popup = document.getElementById("modify");
    var span = document.getElementsByClassName("close")[0];    
    popup.style.display = "block";
    span.onclick = function() {
        popup.style.display = "none";
    }

    var id = $(that).parents("tr").children()[0].innerHTML;
    var name = $(that).parents("tr").children()[1].innerHTML;    
    document.getElementById('modifyId').innerHTML=id;

    var country = $(that).parents("tr").children()[2].innerHTML;
    var founded = $(that).parents("tr").children()[3].innerHTML;

    document.getElementsByName('name')[0].value=name;
    document.getElementsByName('country')[0].value=country;
    document.getElementsByName('founded')[0].value=founded;  
}

function modifyRecord(){
    var id = document.getElementById('modifyId').innerHTML;
    var name = document.getElementsByName('name')[0].value;
    let record = {
        name: name,
        country: document.getElementsByName('country')[0].value,
        founded: document.getElementsByName('founded')[0].value,
    } 
    updateRequest(JSON.stringify(record),name,id);
}

function updateRequest(dataJson,name,id){
    var confirmation = confirm("Are you sure you want to update: "+name+"?");    

    if(confirmation){       
        $.ajax({
            type: 'POST',
            url: "https://webtechcars.herokuapp.com/api/manufacturers/",
            data: dataJson,
            dataType: "json",
            contentType: "application/json",
        }); 

        $.ajax({
            url: 'https://webtechcars.herokuapp.com/api/manufacturers/' + id,
            type: 'DELETE',
            success: function (data) {
                console.log(data);
                alert(name + " updated.");
                location.reload();
            }
        });      
    }
}