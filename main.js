function validateForm(){

    let name = document.getElementById('inputName').value;
    let date = document.getElementById('inputDate').value;

    if (name == "") {
        alert('El Producto es requerido');
        return false;
    }

    if (date == "") {
        alert('La fecha es requerida');
        return false;
    }

    return true;
}

//read
function showData(){

    let listPeople;

    if (localStorage.getItem('listPeople') == null) {
        listPeople = [];
    }else{
        listPeople = JSON.parse(localStorage.getItem("listPeople"));
    }

    var html = "";

    listPeople.forEach(function(element, index){
        html += "<tr>";
        html += '<td class="col-md-1"; style="text-align: center"><button onclick="updateData('+ index +')" class="btn btn-outline-dark"><i class="bi bi-pencil-square"></i></i></button></td>';
        html += '<td class="col-md-5">' + element.name + '</td>';
        html += '<td class="col-md-3">' + element.date + '</td>';
        html += '<td class="col-md-1"; style="text-align: center"><button onclick="deleteData('+ index +')" class="btn btn-outline-dark"><i class="bi bi-x-lg"></i></button></td>';
        html += "</tr>";
    });

    document.querySelector('#tableData tbody').innerHTML = html;
}

//create
document.onload = showData();

function AddData(){
    if (validateForm() == true) {
        
        let name = document.getElementById('inputName').value;
        let date = document.getElementById('inputDate').value;

        var listPeople;
        if (localStorage.getItem('listPeople') == null) {
            listPeople = [];
        }else{
            listPeople = JSON.parse(localStorage.getItem("listPeople"));
        }

        listPeople.push({
           
            name: name,
            date: date,
        });

        localStorage.setItem('listPeople', JSON.stringify(listPeople));

        showData();

       
        document.getElementById('inputName').value = "";
        document.getElementById('inputDate').value = "";
    }
}
