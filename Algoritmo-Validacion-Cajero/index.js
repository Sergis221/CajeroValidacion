'use strict'

let usuariopin
let pincpasword = 9140
let changes = 0

do{
    usuariopin=prompt("Ingrese el pin")
    changes++
    if(usuariopin==pincpasword){
        break
    }
}while (changes!=3)
alert(usuariopin==pincpasword ? "Ingreso Exitoso" : "Tarjeta Rechazada")
