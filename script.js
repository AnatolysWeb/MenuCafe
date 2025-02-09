// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function () {

    // Función para agregar desplazamiento suave al hacer clic en los enlaces del menú
    const links = document.querySelectorAll('nav ul li a');
    
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Evita el comportamiento por defecto del enlace
            
            // Obtiene el destino de la sección
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            // Desplaza hacia la sección con un suave scroll
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Función para resaltar el enlace activo en la navegación
    window.addEventListener('scroll', function () {
        let currentSection = '';
        
        // Verifica cuál es la sección visible en la pantalla
        document.querySelectorAll('.menu-section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute('id');
            }
        });

        // Resalta el enlace correspondiente al desplazarse
        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    });

    // Añadir clase 'active' a los enlaces en el menú para destacar el seleccionado
    const style = document.createElement('style');
    style.innerHTML = `
        nav ul li a.active {
            font-weight: bold;
            color: #ff7043; /* Color distintivo para el enlace activo */
            text-decoration: underline;
        }
    `;
    document.head.appendChild(style);

});
