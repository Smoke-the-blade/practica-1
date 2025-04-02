/*document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
  
    toggleButtons.forEach(button => {
      button.addEventListener('click', () => {
        const nextElement = button.nextElementSibling;
        if (nextElement && nextElement.tagName === 'UL' || nextElement.classList.contains('image-container')) {
          nextElement.style.display = nextElement.style.display === 'none' ? 'block' : 'none';
        }
    });
  }); */


  document.addEventListener("DOMContentLoaded", () => {
    console.log("¡JS cargado correctamente!");
    
    const imagen = document.getElementById("imagen-principal");
    const boton = document.getElementById("boton-cambiar-imagen");
  
    if (!imagen || !boton) {
      console.error("No se encontró el elemento de imagen o el botón.");
      return;
    }
  
    const carpetas = ["Aurelius Shadowcaster/aurelius.JPEG","Aurelius Shadowcaster/Dorian.JPEG" "Darión", "Grimnar Khyber", "LuminusPiesligeros", "Morthos Tormento", "Mr. Maldito Cuervo", "Nus", "Sam el Lobo Malone", "Shokan Lograrn"];
    const imagenesPorCarpeta = ["Aurelius.JPEG", "Dorian.JPEG", "gran-biblioteca-2.JPEG", "gran-biblioteca.JPEG", "Liondria", "Darion Riverblood", "Amuleto del Rayo vivo 1", "Armadura de Guardia Electrica", "Armadura de Infiltracion Electrica", "Grimm"];
  
    const obtenerImagenAleatoria = () => {
      const carpetaAleatoria = carpetas[Math.floor(Math.random() * carpetas.length)];
      const imagenAleatoria = imagenesPorCarpeta[Math.floor(Math.random() * imagenesPorCarpeta.length)];
      return `images/${encodeURIComponent(carpetaAleatoria)}/${encodeURIComponent(imagenAleatoria)}`;
    };
  
    boton.addEventListener("click", () => {
      const nuevaImagen = obtenerImagenAleatoria();
      imagen.src = nuevaImagen;
      console.log("Imagen cambiada a: " + nuevaImagen);
    });
  });
