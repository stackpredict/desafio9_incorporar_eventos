// Creo la clase Alumno
class Alumno {
    constructor(nombre, email, password) {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }
}
// Defino todas las vaaribles Globales  ue necesito para trabajar con el DOM

let arrayAlumnos = [];
let miFormulario = document.querySelector("#formulario");
let inputNombre = document.querySelector("#iNombre");

let nombreI = formulario.children[1].value;
let emailI = formulario.children[3].value;
let passwordI = formulario.children[5].value;

let contenedor = document.querySelector("#alumnoIngresado")
let displayTodos = document.querySelector("#displayTodos");
let parrafos = displayTodos.getElementsByTagName("p");
let bandera = false;

// Defino los Eventos de ambos Botones

miFormulario.addEventListener("submit", agregarAlumnos);
btnMostrar.addEventListener("click", MostrarTodosAlumnos);

// Pongo en Focus el primer input

inputNombre.focus();

// Funciones
// Funcion para comprobar el ingreso de datos en imputs

function validarForm() {
    nombreI = formulario.children[1].value;
    emailI = formulario.children[3].value;
    passwordI = formulario.children[5].value;
    console.log(nombreI);
    console.log(emailI);
    console.log(passwordI);

    if (nombreI == "" || emailI == "" || passwordI == "") {
        alert("ERROR - Debe completar todos los campos para continuar");
        inputNombre.focus();
        bandera = false;

    } else {
        bandera = true;
    }

}
// Funcion para agregar alumnos al Array de alumnos

function agregarAlumnos(e) {
    e.preventDefault();
    validarForm(); 
    // Valido que esten ok los datos del formulario
    if(bandera ==true) {
        let opcion = confirm("Esta seguro de agregar el alumno?");
        if (opcion == true) {
            let formulario = e.target
            arrayAlumnos.push(new Alumno(nombreI, emailI, passwordI));
        }else {     
            alert("No se agrego el usuario");
        }
        formulario.children[1].value = "";
        formulario.children[3].value = "";
        formulario.children[5].value = "";
        contenedor.innerHTML = "";
        AgregarAlDom();
        inputNombre.focus();

    }else {
        inputNombre.focus();
    }
}

// funcion para mostrar aen DOM el ultimo alumno ingresado

function AgregarAlDom() {
    contenedor.innerHTML = `<h3> Ultimo alumno ingresado:</h3> 
    <p><strong> Nombre: </strong> ${nombreI}</p> 
    <p><strong> Email: </strong> ${emailI}</p> 
    <p><strong> PassWord: </strong> ${passwordI}</p> 
    <hr>`;

    
}

// Funcion para mostrar proceduralmente todos los alumnos en un div en DOM


function MostrarTodosAlumnos(e) {
    e.preventDefault();
    let i = 0;
    displayTodos.innerHTML = `<h3> Listado de todos los Alumnos:</h3>`;
    for (const alumno of arrayAlumnos) {

        displayTodos.innerHTML +=`
        <p><strong> Nombre: </strong> ${alumno.nombre}</p>
        <p><strong> Email: </strong> ${alumno.email}</p>
        <p><strong> PassWord: </strong> ${alumno.password}</p>
        <hr>`;
 }
}
