var TodosDeCracha = false

if (TodosDeCracha == true){
    console.log("Todos recebem nota 10 em JS")
}else{
    console.log("Todos recebem nova 0 em JS")
}                                                                                                                                                                                                                
console.clear()

var numero1 = 8
var numero2 = 4

if(numero1 > numero2){

    console.log("variavel numero1 é maior que a variavel numero2")
}else{
    console.log("variavel numero1 é menor que a variavel numero2")
}

console.clear()

var numero1 = 4
var numero2 = 15

numero1 > numero2 ? console.log("numero1 é maior") : console.log("numero 1 é menor")

console.clear()

let mes = "JANEIRO"

if (mes == "JANEIRO"){
    console.log("É verão")
}else if(mes == "JUNHO"){
console.log("É outono")
}else if(mes == "OUTONO"){
    console.log("É primavera")
}else{
    console.log("É inverno")
}

console.clear()

let mes = "JANEIRO"

switch(mes){
    
    case "JANEIRO" :

    console.log("É verão")
    break
    
    case "JUNHO" :

    console.log("É outono")
    break

    case "OUTUBRO" :
        console.log("É primavera")
        break

        default: //else

        console.log("É inverno")
        break

}
