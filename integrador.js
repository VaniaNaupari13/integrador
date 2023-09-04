alert("Bienvedio al restaurante central")
entrada=parseInt(prompt("Ingrese el precio de la entrada"))
segundo=parseInt(prompt("Ingrese el precio del segundo"))
postre=parseInt(prompt("Ingrese el precio del postre"))

total=entrada+segundo+postre
igv=(total*0.18)+total

console.log("El precio de la entrada es:",entrada)
console.log("El precio del segundo es:",segundo)
console.log("El precio del postre es:",postre)
console.log("El precio del costo es:",total)
console.log("El precio del costo con igv es:",igv)
