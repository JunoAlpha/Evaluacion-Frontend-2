/* --------------------------------------------------- */
/* LÓGICA PARA LA PÁGINA DE COMPRA (solo se ejecuta si el DOM contiene los elementos de compra) */
const pantallaCompra = document.getElementById("valor_base");
if (pantallaCompra) {
    // 1. Precio Base
    pantallaCompra.textContent = `Precio Base: $${auto.precioBase.toLocaleString("es-CL")}`;

    // 2. Color seleccionado
    const valorColorEl = document.getElementById("valor_color");
    if (valorColorEl) {
        const nombreColor = localStorage.getItem("nombreColor") || "";
        const precioColor = parseInt(localStorage.getItem("valor_color")) || 0;
        if (nombreColor) {
            valorColorEl.textContent = `Color ${nombreColor}: $${precioColor.toLocaleString("es-CL")}`;
        }
    }

    // 3. Lista de adicionales
    const listaExtrasEl = document.getElementById("valor_extras");
    if (listaExtrasEl) {
        const extrasJSON = localStorage.getItem("adicionalSeleccionados");
        if (extrasJSON) {
            const extrasArray = JSON.parse(extrasJSON);
            extrasArray.forEach(extra => {
                const li = document.createElement("li");
                li.textContent = `${extra.nombre} + $${extra.valor.toLocaleString("es-CL")}`;
                listaExtrasEl.appendChild(li);
            });
        }
    }

    // 4. Precio total
    const totalEl = document.getElementById("precio_total_display");
    if (totalEl) {
        const total = parseInt(localStorage.getItem("precioTotal")) || auto.precioBase;
        totalEl.textContent = total.toLocaleString("es-CL");
    }
}
/* ----------