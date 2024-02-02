var arrayCarrito = []

function getNotification(id,id_name, id_precio){
    // obtener las propiedades de las clases necesarias
    const notification = document.querySelector('.notification')
    const button_display = document.getElementById(id);

    const name_product = document.getElementById(id_name);
    const precio_product = document.getElementById(id_precio);

    // modificar los estilos y contenido de la clase
    
    notification.textContent++
    notification.style.cssText = 'display: block';

    button_display.style.cssText = 'background-color: #afafaf';
    button_display.disabled = true;

    const ObjProduct = {
        'titulo': name_product.textContent,
        'precio': precio_product.textContent
    }

    arrayCarrito.push(ObjProduct);
    console.log(arrayCarrito);
    
}




