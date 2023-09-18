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