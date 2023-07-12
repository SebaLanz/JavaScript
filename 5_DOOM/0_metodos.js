//Buscar Elementos por diferentes formas, ID - CLASS - TAG

document.getElementById("id");
document.getElementsByTagName("tag");
document.getElementsByClassName("clase");

// Modifico - Agrego Texto mediante un ID y el método innerHTML.

<h1 id="demo"></h1>
document.getElementById("demo").innerHTML = "Hello World!";

// Creo una variable y le paso el valor -->

const elementID = document.getElementById("intro");
const elementTAG = document.getElementsByTagName("p"); 

//Creo una variable que contiene todo lo que está dentro de "main"
//Después creo otra variable y le asigno el valor de los parrafos dentro de la variable anterior.

const variableID = document.getElementById("main");
const variableParrafodentroDeID = variableID.getElementsByTagName("p");

//Creo la variable X y llamo a todos los p(parrafos) que están dentro de intro(puedee ser ID,CLASS,TAG)

const x = document.querySelectorAll("p.intro"); 

//

