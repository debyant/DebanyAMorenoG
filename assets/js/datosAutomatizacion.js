////  Footer: fecha de creación         ////
let date = new Date(); //creando objeto Date
    let year = date.getFullYear(); //metodo de date para obtener el año
    let fechaCreacion = document.getElementById('fechaCreacion');
    fechaCreacion.innerHTML = "Hecho en " + year + " ♥‿♥"; //mandamos el año con el mensaje


