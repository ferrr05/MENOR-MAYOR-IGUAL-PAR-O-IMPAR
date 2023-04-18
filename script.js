let num1 = parseFloat(prompt("Primer Número:"))
let num2 = parseFloat(prompt("Segundo Número"))
if (num1 > num2) { 
    alert("El número" + num1 + "es mayor que el número" + num2) 
}
else if (num1<num2){
    alert("El número " + num2 + "es mayor que el número " + num1)
}
else if(num1==num2){
    alert("El número "+ num1 + "y el número " + num2 + "son iguales ")
}
if (num2 % 2 == 0){
    alert("El número " + num2 + "es par")
}
else{
    alert("El número " + num2 + "es impar")
}