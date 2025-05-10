function fibbonaci (n) { 
if (n < 3) {
return 1
}
return fibbonaci (n - 1) + fibbonaci (n - 2)
}
console.log (fibbonaci (7))
