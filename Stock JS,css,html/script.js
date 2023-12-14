function mostrarTabla(tablaId, color) {
    var tablas = document.querySelectorAll('.tabla');
    tablas.forEach(function(tabla) {
        tabla.style.display = 'none';
    });

    var tablaMostrar = document.getElementById(tablaId);
    tablaMostrar.style.display = 'table';
    tablaMostrar.innerHTML = ''; 

    // Añadir color al 'thead'
    tablaMostrar.classList.add('striped');
    var thead = tablaMostrar.createTHead();
    thead.style.backgroundColor = color;

    // Insertar datos en la tabla según la tabla seleccionada
    switch (tablaId) {
        case 'tabla1':
            thead.style.backgroundColor = '#3498db';
            generarTabla(tablaMostrar, [
                { visitas:'200', Fecha:'20/03/23' },
                { visitas:'100', Fecha:'16/03/23' },
                { visitas:'200', Fecha:'13/03/23' },
            ]);
            break;
        case 'tabla2':
            thead.style.backgroundColor = '#2ecc71';
            generarTabla(tablaMostrar, [
                { ventas:'20', Fecha:'20/03/23' },
                { visitas:'100', Fecha:'16/03/23' },
                { visitas:'52', Fecha:'13/03/23' },
            ]);
            break;
        case 'tabla3':
            thead.style.backgroundColor = '#f1c40f';
            generarTabla(tablaMostrar, [
                { Producto: '02931', Nombre: 'Afeitadora Electrica ', Cantidad: '2' , Fecha:'20/03/23' },
                { Producto: '01234', Nombre: 'Placa de video Nvidia RTX3090 ', Cantidad: '1', Fecha:'16/03/23'  },
                { Producto: '14392', Nombre: 'Memoria DDR4 6gb HP', Cantidad: '4' , Fecha:'13/03/23' },
                
            ]);
            break;
        case 'tabla4':
            thead.style.backgroundColor = '#e74c3c';
            generarTabla(tablaMostrar, [
                { picture: 'img/perfil.png', name: ' Emilia Mernes', email: 'emi_mer12@gmail.com', phone: '321-654-987' },
                { picture: 'img/perfil.png', name: 'Lionel Messi', email: 'lio10mess@gmail.com', phone: '123-456-789' },
                { picture: 'img/perfil.png', name: 'Enzo Fernandez', email: 'ez_man124@hotmail.com', phone: '123-586-973' },
                
            ]);
            break;
        default:
            break;
    }
}

function generarTabla(tabla, datos) {
    var thead = tabla.createTHead();
    var tbody = document.createElement('tbody');

    var header = thead.insertRow();
    for (var key in datos[0]) {
        var th = document.createElement('th');
        th.appendChild(document.createTextNode(key.charAt(0).toUpperCase() + key.slice(1)));
        header.appendChild(th);
    }

    datos.forEach(function (dato) {
        var row = tbody.insertRow();
        for (var key in dato) {
            var cell = row.insertCell();

            if (key === 'picture') {
                var img = document.createElement('img');
                img.src = dato[key] === 'picture' ? 'img/perfil.png' : dato[key];
                img.style.maxWidth = '50px'; 
                cell.appendChild(img);
            } else {
                cell.appendChild(document.createTextNode(dato[key]));
            }
        }
    });

    tabla.appendChild(tbody);
}



