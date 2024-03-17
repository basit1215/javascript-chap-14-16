// var studentsNames=[];

// var studentsNames={
//     names:[]
// };

// var months=["January" , "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// console.log(months);

// var evenNumbers=[2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// console.log(evenNumbers);

// var boolean=[true, false];
// console.log(boolean);

// var mixedArray=["March", 10, 14, false, "September", 6, true, "June"];
// console.log(mixedArray);

// var  eduqQualificationsPak= ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"]
// document.write("<h1>Qualifications</h1>")
//  for(var i=0; i<eduqQualificationsPak.length; i++){
//     document.write(eduqQualificationsPak[i] + "<br>" )
//  }

//  var students=["Hashir", "Abdullah", "Yasir"];
//  var score=[89, 74, 65];
//  var totalmarks= 500;
// for(var i=0; i<students.length; i++){
//    document.write("Score of " + students[i] + " is " + score[i] + ". Percentage: " + (score[i]/totalmarks) *100 + "%"  +  "<br>" )
// }


var ColorsNames=["Red", "Blue","Yellow","Orange", "Purple", "Brown", "Pink", "Blue", "Green"];
for(i=0; i<ColorsNames.length; i++){
   document.write(ColorsNames[i] + "<br>" );
}
var colorAdd= prompt("Enter color name you want to add in the beginning of array");
ColorsNames.unshift(colorAdd);
document.write("Updated Color is: " + ColorsNames  + "<br>" );
