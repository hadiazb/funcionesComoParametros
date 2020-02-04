class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre     = nombre
    this.apellido = apellido
    this.altura  = altura
  }

  saludar(fn){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
    if (fn) {
      fn(this.nombre, this.apellido)
    }
  }
  soyAlto(){
    return this.tollest > 1.8
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura)
  }

  saludar(fn){
    console.log(`Hola, mi nombre es: ${this.nombre} ${this.apellido} y soy desarrollador/a `);
    if (fn) {
      fn(this.nombre, this.apellido, true)
    }
  }
}

function responderSaludo(nombre, apellido, esDev){
  console.log(`Buen día ${nombre} ${apellido}`);
  if (esDev) {
    console.log(`Ah mira, no sabia que eras desarrollador/a`);
  }
}
var hugo = new Persona('Hugo', 'Diaz', 1.72)
var andres = new Desarrollador('Andres', 'Diaz', 1.78)
var mauricio = new Persona('Mauricio', 'Diaz', 1.82)


hugo.saludar()
andres.saludar(responderSaludo)
mauricio.saludar(responderSaludo)
