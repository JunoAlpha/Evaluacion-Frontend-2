const auto =  {
    marca: "Mazda",
    modelo: "MX-5",
    añosGarantia: "5 o primeros 100.000 km",
    nroPasajeros: 2,
    descripción: "Un auto biplaza listo para impresionarte y llevarte más lejos",
    motor: "2.0L Skyactiv-G de 181 HP y 205 Nm de torque",
    rendimiento: "Ciudad: 11,1 km/l - Carretera: 17,6 km/l - Mixto: 14,5 km/l",
    tracción: "Trasera (RWD)",
    transmisión: "Manual",
    procedencia: "Japón",
    precioBase: 5000000,
    colores: [
        {nombre: "rojo", codigo: "#CE313D", imagen: "Imagenes/getImage (2).webp", precio: 0},
        {nombre: "negro", codigo: "#100C08", imagen: "Imagenes/getImage (1).webp", precio: 800000},
        {nombre: "blanco", codigo: "#f5f5f5f6", imagen: "Imagenes/getImage.webp", precio: 400000}
    ], 
    adicionales: [
        {nombre: "Neblineros", precio: 80000},
        {nombre: "Protaequipaje", precio: 350000},
        {nombre: "Cinturones y arnés para mascotas", precio: 50000},
        {nombre: "Luces led", precio: 70000},
        {nombre: "Camara trasera", precio: 100000}
    ],
}


const imagenAuto = document.getElementById("imagen_vehiculo");
// Buscar el selector en catalogo.html o en compra.html
const selectorColores = document.getElementById("selector_colores")

// Si existe la imagen, la seteamos al primer color por defecto
if (imagenAuto && auto.colores.length > 0) {
    imagenAuto.src = auto.colores[0].imagen;
}

auto.colores.forEach((colores, index) => { //index es la posicion del elemento en el array
    const coloresDiv = document.createElement('div');
    coloresDiv.className = 'coloresDiv';
    coloresDiv.innerHTML = `<input type="radio" name="color-vehiculo" id="color-${index}" value="${colores.precio}" ${index === 0 ? 'checked' : ''}>
            <label for="color-${index}" class="color-circle" style="background-color: ${colores.codigo}" title="${colores.nombre}"></label>
        `;
    coloresDiv.querySelector("input").addEventListener("change", () =>{  
        if(imagenAuto) imagenAuto.src = colores.imagen;       
    });
    
    if(selectorColores) selectorColores.appendChild(coloresDiv); 
});

//query selector = toma un elemento y toma un evento seleccionado para realizar
//una accion, en este caso el evento es change es un evento que se ejecuta cuando el valor de un elemento cambia

function calculoPrecio(){
    const colorSeleccionado = document.querySelector('input[name="color-vehiculo"]:checked');
    const precioColor = parseInt(colorSeleccionado.value) || 0;
    const precioAdicional = parseInt(elSelectorAdicionales.value) || 0;
    const total = automovil.precioBase + precioColor + precioAdicional;
}

const detallesAuto = document.getElementById("detalles-auto");

if (detallesAuto) {
    // Extraemos un arreglo con formato [clave, valor] de las primeras 10 propiedades
    const propiedadesAuto = Object.entries(auto).slice(0,10).filter((_, index) => index !== 4);
    
    propiedadesAuto.forEach(([clave, valor]) => {
        // Le damos un mejor formato a la clave (Ej: "añosGarantia" -> "Años Garantia")
        let claveFormateada = clave.charAt(0).toUpperCase() + clave.slice(1).replace(/([A-Z])/g, ' $1');
        
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-start bg-transparent px-0 border-dark-subtle';
        li.innerHTML = `<span class="fw-bold text-uppercase" style="font-size: 0.85rem;">${claveFormateada}:</span> <span class="text-end text-muted w-50">${valor}</span>`;
        
        detallesAuto.appendChild(li);
    });
}



