let side1 = 4
let side2 = 3
let side3 = 2

if (side1 == side2 && side2 == side3){
    console.log ("Equilateral Triangle")
}
else if (side1 == side2 ||  side1 == side3 || side2 == side3){
    console.log ("Isosceles Triangle")
}
else console.log ("Scalene Triangle")
