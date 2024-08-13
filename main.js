// llamado a un node del dom 
let root = document.querySelector("#root");

// Elemento de tipo div 
let div_formulario  = document.createElement("div");
div_formulario.className = "div-formulario";

// lista de datos 
let formulario =[
    {nombre: "Login",     link: "login/Login.html"},
    {nombre: "formulario de Contacto ",link: "componentes/fomularioDeContacto/formulario%20contacto.html"},
    {nombre: "formulario de Busqueda",link: "componentes/formularioDeBusqueda/formulario%20busquedad.html"},
    {nombre: "formulario de registro ",link: "formulario2/formulario2/formulario2.html"},
    {nombre: "formulario de compras",link: "formulario3/formulario3/formulario3.html"},
    {nombre: "formulario de reseñas",link: "formulario3/formulario3/formulario3.html"},

    ] ;


formulario.forEach(itemLista => {

    let div_item = document.createElement("a");
  div_item.className = "item"; 
  div_item.href = itemLista.link;
  div_item.innerText = itemLista.nombre;

  div_formulario.appendChild(div_item);
  
});


// agrego al nodo root el elemento div_formulario  
root.appendChild(div_formulario) ; 