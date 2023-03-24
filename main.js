let carrito = []

class Ropa {
    constructor (tipo, talle, precio) {
        this.tipo = tipo
        this.talle = talle
        this.precio = precio
    } 
    Carrito () {
        carrito.push(this)
    }
}

const remera = new Ropa ("remera", "M", 6500 )

 let subtotal = 6500;

let elegir = prompt("Bienvenido 👽 ¿Queres comprar algo? SI o NO");

while (elegir != "SI" && elegir != "NO") {
    alert("Ingresar Si o No")
    elegir = prompt("Bienvenido 👽 ¿Queres comprar algo? Si o No");
}

if (elegir == "SI"){
    alert("Compramos una remera! En consola esta la cantidad comprada" );
    alert("Gracias por comprar la remera 💖. El precio es de $6500")

    let respuesta = prompt(
        'Queres pagar en Cuotas?',
        'Ingresa "SI" o "NO"'
    ).toLowerCase();
    
    
    while (respuesta != "si" && respuesta != "no") {
            respuesta = prompt('Invalido. Ingrese una respuesta correctamente: "SI" o "NO"');
    }
    
    if ( respuesta === 'si') {
        let cantCuotas = prompt('Ingrese Cantidad de cuotas: ', '3, 6 o 12');
    
        while (
            isNaN(cantCuotas) ||
            cantCuotas % 3 != 0 ||
            cantCuotas > 12 ||
            cantCuotas < 3
        ) {
            cantCuotas = prompt('Intente nuevamente: ', '3, 6 o 12');
        }
        let preciototal =
            Math.trunc (calcularCuotas(subtotal,cantCuotas) ) ;  
        alert(
            'Usted eligio ' +
                cantCuotas +
                ' cuotas.' +
                ' Su Precio por Cuota sera de: ' + '$' +
                preciototal
        );
    } else {
        alert('listo, paga en efectivo!');
    }
} else if ( elegir == "NO"){
    alert("GRACIAS POR VISITAR NUESTRA TIENDA 🤠")
}
  

function calcularCuotas(precio, cantidad) {
	let precioCuota = precio / cantidad;
	return precioCuota;
}

function Comprar() {
	remera.Carrito()
	   console.log (carrito)
}
