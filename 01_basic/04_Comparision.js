console.log("2">1) // true
console.log("02">1) // true 

/*
we need same datatype to compare the variable 
sometime it give unexpected error i.e we want something and we get other
*/
console.log(null>0)
console.log(null==0)
console.log(null >= 0)
console.log("2" === 2)
console.log("2" == 2)
/*
the reason is that an equality check == and comparison < <>= <= work differntly
Comparison convert null to a number treating it as 0
that's why null>=0 is true and null>0 is false
*/