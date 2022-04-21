function scrollNavegation (){
    const enlaces = document.querySelectorAll(".header-menu a");
    enlaces.forEach(enlace => {
        enlace.addEventListener('click',e => {
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView({ behavior: "smooth" });
        });
        
    });
}
scrollNavegation();