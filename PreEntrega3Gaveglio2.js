
let nuevoCliente = []

class Cliente {
    constructor (nombre, apellido, edad, salario, capital, cuotas, ){
        this.nombre=nombre;
        this.apellido= apellido;
        this.edad = edad;
        this.capital = capital;
        this.cuotas= cuotas;

    }
}

const button = document.getElementById("button") 

button.addEventListener("click",function(){
	this.value="Puedes comenzar";
});

const calcularPrestamoCliente = document.querySelector('.formulario-datos')
const inputNombre = document.querySelector('#input-nombre')
const inputApellido = document.querySelector("#input-apellido")
const inputEdad = document.querySelector("#input-edad")
const inputSalario = document.querySelector("#input-salario")
const inputCapitalPrestamo = document.querySelector("#input-capital")
const inputCuotasPrestamo = document.querySelector("#input-cuotas")

let div = document.createElement("div");
    div.innerHTML = `<h12>Somos tu Banco de confianza</h2>`;
    document.body.appendChild(div);


const btnNucleo = document.createElement("button");

btnNucleo.id = 'btnNucleo';

btnNucleo.innerHTML = 'Haz click para participar del sorteo';

btnNucleo.addEventListener('click', function () {
    const h3 = document.createElement('h3');
    h3.innerHTML = 'Tus datos fueron enviados para el proximo sorteo';
    document.body.appendChild(h3);
})

document.body.appendChild(btnNucleo);


let valorCuotasPrestamo = 0
let prestamoTotal = 0
let tasadeinteres=0.035


function calcularCuotas(capital, tasa, cuotas) {
    valorCuotasPrestamo = ((capital + (capital*tasadeinteres)) / cuotas);
}

function calcularPrestamo (cuotasPrestamo, cuotas) {
    prestamoTotal = cuotasPrestamo * cuotas
}

const prestamoDom = ( array ) => {
    const contenedor = document.querySelector(".informacion-prestamo")
    let simulacion = ""
    array.forEach((datoDelArray) => {
        calcularCuotas(datoDelArray.capital, tasadeinteres, datoDelArray.cuotas)
        calcularPrestamo(valorCuotasPrestamo, datoDelArray.cuotas)
        
        simulacion += `
            <div class= "informacion">
                <p> 
                 <br>
                    Usted solicito un prestamo de ${datoDelArray.capital} a abonar en ${datoDelArray.cuotas} mensuales. <br>
                    El valor de cada cuota es de: $${valorCuotasPrestamo} y el total a abonar por el mismo es de: $${prestamoTotal}.
                    
                    <br>
                    Gracias por su visita
                </p>
            </div>
        `
    })
    contenedor.innerHTML = simulacion
}


calcularPrestamoCliente.onsubmit = ( evento ) => {
    evento.preventDefault()
    if (inputNombre.value === '' || inputApellido.value === '' || inputEdad.value === '' || inputSalario.value === '' || inputCapitalPrestamo.value === '' || inputCuotasPrestamo.value === '' ) {
        alert('Debe llenar los campos de informacion para generar el prestamo')
    } else {
        nuevoCliente.push({
            nombre: inputNombre.value,
            apellido: inputApellido.value,
            edad: Number(inputEdad.value),
            salario: Number(inputSalario.value),
            capital: Number(inputCapitalPrestamo.value),
            cuotas: Number(inputCuotasPrestamo.value)
        })

        calcularPrestamoCliente.reset()

        datoDelArray = nuevoCliente[nuevoCliente.length - 1]


        prestamoDom(nuevoCliente)

        localStorage.clear
        localStorage.setItem("datosNuevoCliente", JSON.stringify(nuevoCliente))
        console.log(nuevoCliente)


        let datosAlmacenadosNuevoCliente = localStorage.getItem('datosNuevoCliente');

        if (datosAlmacenadosNuevoCliente != null) {
        let array = JSON.parse(datosAlmacenadosNuevoCliente);
        array.forEach(nuevoCliente => { nuevoCliente.capital += (+2000)});
        localStorage.setItem('datosNuevoCliente', JSON.stringify(array));
        console.log(array)
        }


    }

    // Trabajar datos del array ingresado
    
            const datosCliente = [
            {nombre: "lucia", apellido: "lopez", edad: 24, salario: 200000, capital: 32000, cuotas: 12},
            {nombre: "marcos", apellido: "gonzalez", edad: 35, salario: 400000, capital: 52000, cuotas: 24},
            {nombre: "felipe", apellido: "diaz", edad: 53, salario: 320000, capital: 42000, cuotas: 36},]

            const resultado1 = datosCliente.filter((el) => el.capital < 42000)
            
             console.log(resultado1)
        

            const datosClienteactualizado = datosCliente.map((el) => {
                return {
                    nombre: el.nombre,
                    apellido: el.apellido.toUpperCase(),
                    edad: el.edad,
                    salario: el.salario,
                    capital: el.capital,
                    cuotas: el.cuotas 
                }
            })
            console.log(datosClienteactualizado)

            const resultado2= datosCliente.find((el)=> el.salario >= 400000)
            console.log(resultado2)

            
           

            
    

            
            

        }