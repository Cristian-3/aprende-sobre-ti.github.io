var nombre;
var nombreUsuario;
var fecha = new Date()
var fechaAño = fecha.getTime()
var saludo = document.getElementById("textoNombre")
var saludoUsuario = document.getElementById("nombreDelUsuario")
var seccion1 = document.getElementById("seccion1")
var seccion2 = document.getElementById("seccion2")
var seccion3 = document.getElementById("seccion3")
var seccion4 = document.getElementById("seccion4")
var seccion5 = document.getElementById("seccion5")
var nombreUsuario = document.getElementById("nombre").value;
var seccionElegir = document.getElementById("seccionElegir")
var boton1 = document.getElementById("edadAñoXXXX")
boton1.addEventListener("click", guardarFecha)
var botonFecha = document.getElementById("botonFecha")
botonFecha.addEventListener("click", enviarFecha)
var botonAñoQ = document.getElementById("botonAñoQ")
botonAñoQ.addEventListener("click", queEdadTendrias)
var botonSigno = document.getElementById("saberTuSigno")
botonSigno.addEventListener("click", signoZodiacal)

saludoUsuario.style.display = 'none'
seccionElegir.style.display = 'none'
seccion1.style.display = 'none'
seccion2.style.display = 'none'
seccion3.style.display = 'none'
seccion4.style.display = 'none'
seccion5.style.display = 'none'



function guardarNombre(event) {
  event.preventDefault();
  var nombreUsuario = document.getElementById("nombre").value;
  var nombre =
  document.getElementById("nombre").value;
  saludo.style.display = 'none'
  document.getElementById("nombreDelUsuario").innerHTML = "Bienvenido " + nombre;
  seccionElegir.style.display = ''
  saludoUsuario.style.display = ''
} 


function guardarFecha(event) {
  seccion2.style.display = 'none'
  event.preventDefault();
  var añoNacimiento = document.getElementById("añoNacimiento").value;
  
  seccion1.style.display = ''
  
}

function enviarFecha(event) {
  event.preventDefault();
  var añoNacimiento = document.getElementById("añoNacimiento").value;
  document.getElementById("añoNacimiento").value;
  document.getElementById("tuAñoDeNacimiento").innerHTML = "Tu año de nacimiento es <br>" + añoNacimiento
  var inputFecha = document.getElementById("añoNacimiento").value;
  var fechaAñoNacimiento = new Date(inputFecha);
  var año = fechaAñoNacimiento.getFullYear()
  var fechaAñoNacimiento = new Date(inputFecha);
  var añoFull = fechaAñoNacimiento.getTime()
  var edad = parseInt((fechaAño - añoFull) / (1000 * 60 * 60 *24 * 365));
  document.getElementById("edad").innerHTML = "Tu edad es <strong>" + edad + "</strong> años"
  seccion2.style.display = ''
  seccion3.style.display = ''
  seccion1.style.display = 'none'
}

function queEdadTendrias(event) {
  event.preventDefault();
  var nombreUsuario = document.getElementById("nombre").value;
  var inputFecha = document.getElementById("añoNacimiento").value;
  var fechaAñoNacimiento = new Date(inputFecha);
  var año = fechaAñoNacimiento.getFullYear()
  var fechaAñoQ = document.getElementById("edadQ")
  var botonAñoQ = document.getElementById("nombre").value;
  seccion1.style.display = ''
  seccion2.style.display = ''
  var edadQQ =
  document.getElementById("edadQ").value;
  var laEdadR = edadQQ - año
  document.getElementById("edadQueTendriasRespuesta").innerHTML = nombreUsuario + " en <br>" + edadQQ + "<br> tu edad seria de <br>" + laEdadR + " años";
  seccion1.style.display = 'none'
  seccion2.style.display = 'none'
  seccion4.style.display = ""
  seccion3.style.display = 'none'
}

const signosZodiaco = [
  {nombre: "Aries",  inicio: "21-03", fin: "19-04", image: "Aries.jpg"},
  {nombre: "Tauro",  inicio: "20-04", fin: "20-05", image: "Tauro.jpg"},
  {nombre: "Geminis",  inicio: "21-05", fin: "20-06", image: "Geminis.jpg"},
  {nombre: "Cáncer",  inicio: "21-06", fin: "20-07", image: "Cancer.jpg"},
  {nombre: "Leo",  inicio: "21-07", fin: "22-08", image: "Leo.jpg"},
  {nombre: "Virgo",  inicio: "23-08", fin: "23-09", image: "Virgo.jpg"},
  {nombre: "Libra",  inicio: "24-09", fin: "23-10", image: "Libra.jpg"},
  {nombre: "Escorpio",  inicio: "24-10", fin: "22-11", image: "Escorpio.jpg"},
  {nombre: "Sagitario",  inicio: "23-11", fin: "22-12", image: "Sagitario.jpg"},
  {nombre: "Capricornio",  inicio: "23-12", fin: "22-01", image: "Capricornio.jpg"},
  {nombre: "Acuario",  inicio: "23-01", fin: "20-02", image: "Acuario.jpg"},
  {nombre: "Piscis",  inicio: "21-02", fin: "20-03", image: "Piscis.jpg"},
];

function signoZodiacal() {
  var nombreUsuario = document.getElementById("nombre").value;
  var fechaNacimiento = document.getElementById("añoNacimiento").value;
  var fechaAñoNacimiento = new Date(fechaNacimiento);
  var dia = fechaAñoNacimiento.getDate() + 1;
  var mes = fechaAñoNacimiento.getMonth() + 1;
  var fechaDM = dia + "-" + mes;
  console.log(fechaDM);
  

  for (var i = 0; i < signosZodiaco.length; i++) {
    var signoActual = signosZodiaco[i];
    var inicio = signoActual.inicio.split("-");
    var fin = signoActual.fin.split("-");
    if (mes == inicio[1] && dia >= inicio[0] || mes == fin[1] && dia <= fin[0]) {
      document.getElementById("signoZ").innerHTML = nombreUsuario + "<br> tu signo zodiacal es <br>";
      document.getElementById("signo").innerHTML = signoActual.nombre
      var rutaImagen = "./" + signoActual.nombre + ".jpg";
      var img = document.createElement("img");
      img.src = rutaImagen;
      document.getElementById("imgSigno").src = rutaImagen;
      //document.getElementById("imgSigno").appendChild(img);
      console.log(signoActual.nombre.img)
      break;
    }
  }
  seccion4.style.display = 'none'
  seccion5.style.display = ''
}
