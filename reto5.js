//Reto: Arreglos
//1. Declara un array que vamos a llamar “estudiantes” con los siguientes valores: Ana, Manuela, Raúl, Carolina, María, Antonio, Cristina

let estudiantes = [ 'Ana' , 'Manuela' , 'Raúl' , 'Carolina' , 'María' , 'Antonio' , 'Cristina' ]

//2. Con un ciclo recorre el array e imprime en consola los estudiantes cuyo nombre empiece por ‘A’

for(let i=0;i<estudiantes.length;i++){
    if(estudiantes[i][0]==='A'){
        console.log(estudiantes[i])
    }º1 
}

//3. Con otro ciclo recorre el array e imprime en consola los estudiantes cuyo nombre tenga más de 6 letras.

for (let i=6;i<estudiantes.length;i++){
    if(estudiantes[i].length>6){
        console.log(estudiantes[i])
    }
}

//Reto Objetos


//1. Declara un objeto que represente una mascota que tenga los siguientes atributos: nombre, tipo de animal, edad, nombre del dueño y juguetes.*/

const mascotaFavorita = {
    nombre: 'Sindy',
    animal: 'Gato',
    edad: '1 año',
    dueño: 'Camila',

/*2. El atributo juguetes debe contener un arreglo de valores que hagan
referencia a todos los juguetes de la mascota.*/

    juguetes: ['Pluma','Pez','Gimnasio']
}

/*3. Crea 2 mascotas más.*/

const mascotaNueva = {
    nombre: 'Chesa',
    animal: 'Perro',
    edad: '12 años',
    dueño: 'Sara',
    juguetes: ['Pelota','Media','Hueso','Fuente']
}
const mascotaGrande = {
    nombre: 'Cameron',
    animal: 'Erizo',
    edad: '4 años',
    dueño: 'Valentina',
    juguetes: ['Flotador','Cepillo','Rueda']
}

//4. Imprime en consola los nombres de las 3 mascotas con el nombre de su dueño.
//Ej: Ayudante de Santa es la mascota de Homero Simpson. 

let  mascotas = [mascotaFavorita,mascotaNueva,mascotaGrande]

for( let i = 0 ;i<mascotas.length;i++) {
    console.log(mascotas[i].nombre + ' es la mascota de ' +  mascotas[i].dueño)

}
//Métodos del Array
// Declara un array que tenga los números del 1 al 30, utilizando un método del array.

let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

//console.log(numeros)

//Debes aplicar un método del array para filtrar todos los números que sean múltiplos de 3.

//const numeroResultado= numeros.filter(number => number % 3 === 0)
//console.log(numeroResultado)

// Debes aplicar un método del array para filtrar todos los números que sean múltiplos de 5.

// const numeroResult= numeros.filter(number => number % 5 === 0)
// console.log(numeroResult)

//Debes aplicar un método para crear un nuevo arreglo que contenga el valor de cada número multiplicado por 2

const multiplicacion = numeros.map (number => number * 2) 

console.log(multiplicacion);

// Declara un array que tenga valores de diferentes tipos de datos, y utiliza
// un método que nos diga si todos los tipos de datos son iguales o no.

const array = [ 1,2,3,'Perro','Gato',true]

const datosRandom = array.some( array => array === 0)

console.log( 'los datos no son iguales asi que esto es ' + datosRandom)