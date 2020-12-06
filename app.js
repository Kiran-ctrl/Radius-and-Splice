// question
// Create a function called calcCircumfrence:
//  Pass the radius to the function.
//  Calculate the circumference based on the radius, and output &quot;The circumference is NN&quot;

function  calcCircumfrence(radius){
    (radius) => input("Enter the radius");
    let pi = 3.14;
    calculate = 2 * pi * radius;
    console.log("The circumference is " + calculate);
}
calcCircumfrence(12);



// question 2
// 3. Following is an Array of my favorite places and some two favorite place and remove Kathmandu from the list and also print the array with its length.
// ["Biratnagar", "Lalitpur", "Patan", "Kathmandu","Pokhara","Palpa"]

let differentPlaces= ["Biratnagar", "Lalitpur", "Patan", "Kathmandu","Pokhara","Palpa"]
console.log(differentPlaces)
differentPlaces.splice(3,1);
console.log(differentPlaces)

differentPlaces.forEach(a=>{
    if (a != 'kathmandu'){
 //       newPlaces.push(a);
    }
})
// console.log(NewPlaces)