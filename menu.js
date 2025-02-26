document.addEventListener("DOMContentLoaded", function() {
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu-container').innerHTML = data;
            
            // Reactivar eventos de Bootstrap después de insertar el menú
            let scripts = document.createElement('script');
            scripts.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";
            document.body.appendChild(scripts);
        })
        .catch(error => console.error('Error al cargar el menú:', error));
});
