function fibbonaci (n) { 
if (n <= 1) {
return n
}
return fibbonaci (n - 1) + fibbonaci (n - 2)
}
console.log (fibbonaci (7))
