var studentsNames=[];

var studentsNames={
    names:[]
};

var months=["January" , "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(months);

var evenNumbers=[2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
console.log(evenNumbers);

var boolean=[true, false];
console.log(boolean);

var mixedArray=["March", 10, 14, false, "September", 6, true, "June"];
console.log(mixedArray);

var  eduqQualificationsPak= ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"]
document.write("<h1>Qualifications</h1>")
 for(var i=0; i<eduqQualificationsPak.length; i++){
    document.write(eduqQualificationsPak[i] + "<br>"+ "<br>" )
 }

 var students=["Hashir", "Abdullah", "Yasir"];
 var score=[89, 74, 65];
 var totalmarks= 500;
for(var i=0; i<students.length; i++){
   document.write("Score of " + students[i] + " is " + score[i] + ". Percentage: " + (score[i]/totalmarks) *100 + "%"  +  "<br>" + "<br>")
}


var ColorsNames=["Red", "Blue","Yellow","Orange", "Purple", "Brown", "Pink", "Blue", "Green"];
for(i=0; i<ColorsNames.length; i++){
   document.write(ColorsNames[i] + "<br>" + "<br>");
}

var colorAdd1= prompt("Enter color name you want to add in the beginning of array");
ColorsNames.unshift(colorAdd1);
document.write("Updated Color is: " + ColorsNames  + "<br>" );

var colorAdd2= prompt("Enter color name you want to add in the end of array");
ColorsNames.push(colorAdd2);
document.write("Updated Color is: " + ColorsNames + "<br>" );

ColorsNames.unshift("Gray", "Light Green");
document.write("Updated Color is: " + ColorsNames  + "<br>"  );

ColorsNames.shift();
document.write("Updated Color is: " + ColorsNames + "<br>" );

ColorsNames.pop();
document.write("Updated Color is: " + ColorsNames + "<br>"  );

var indexColorAdd = +prompt("Enter index number where you want to Add color");
var colorAdd3= prompt("Enter color name you want to Add");
ColorsNames.splice(indexColorAdd, 0, colorAdd3);
document.write("Updated Color is: " + ColorsNames + "<br>" );

var indexColorDel= +prompt("Enter index number where you want to Delete color");
var colorDelNum= +prompt("Enter number of colors you want to delete");
ColorsNames.splice(indexColorDel, colorDelNum);
document.write("Updated Color is: " + ColorsNames + "<br>" + "<br>" );

var studentsScore= [450, 380, 330, 500, 215, 160];
document.write("Scores of Students: " + studentsScore + "<br>"  );

studentsScore.sort();
document.write("Odered Scores of Students: " + studentsScore + "<br>" + "<br>" );

 var cities= ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar", "Multan"];
 document.write("Cities List: ");
 document.write(cities+ "<br>")  ;

 var selectedCities= cities.slice(1, 5);
 document.write("Selected Cities List: ");
 document.write(selectedCities+ "<br>"+ "<br>" );

 var arr1= ["This " , "is ", "my ", "cat."];
 document.write(arr1+ "<br>");

 var arr2= arr1.join("");
 document.write(arr2+ "<br>"+ "<br>");

var devicesFifo=[];
devicesFifo.push("Keyboard");
devicesFifo.push("Mouse");
devicesFifo.push("Printer");
devicesFifo.push("Monitor");
devicesFifo.push("C.P.U");
document.write(" <b>Devices:</b>"+ "<br>")
document.write(devicesFifo + "<br>");

document.write("<b>Out:</b>"+ "<br>");
document.write(devicesFifo.shift()+ "<br>");
document.write("<b>Out:</b>"+ "<br>");
document.write(devicesFifo.shift()+ "<br>");
document.write("<b>Out:</b>"+ "<br>");
document.write(devicesFifo.shift()+ "<br>");
document.write("<b>Out:</b>"+ "<br>");
document.write(devicesFifo.shift()+ "<br>");
document.write("<b>Out:</b>"+ "<br>");
document.write(devicesFifo.shift()+ "<br>"+ "<br>");

var devicesLifo=[];
devicesLifo.unshift("Keyboard");
devicesLifo.unshift("Mouse");
devicesLifo.unshift("Printer");
devicesLifo.unshift("Monitor");
devicesLifo.unshift("C.P.U");
document.write(" <b>Devices:</b>"+ "<br>")
 

devicesLifo.reverse();
document.write(devicesLifo+ "<br>");
 
document.write("<b>Out:</b>"+ "<br>");
document.write(devicesLifo.pop()+ "<br>");
document.write("<b>Out:</b>"+ "<br>");
document.write(devicesLifo.pop()+ "<br>");
document.write("<b>Out:</b>"+ "<br>");
document.write(devicesLifo.pop()+ "<br>");
document.write("<b>Out:</b>"+ "<br>");
document.write(devicesLifo.pop()+ "<br>");
document.write("<b>Out:</b>"+ "<br>");
document.write(devicesLifo.pop()+ "<br>"+ "<br>");

 var phoneManufactures=["Apple", "Oppo", "Samsung", "Vivo", "Motorola", "Nokia", "Sony", "Haier"];
 document.write("<b> Phone Manufacturers </b>"+" <br>");
document.write("<select>"+ " <option>" + phoneManufactures[0]   +    " </option>)" + " <option>" + phoneManufactures[1]   +    " </option>)" +" <option>" + phoneManufactures[2]   +    " </option>)" +" <option>" + phoneManufactures[3]   +    " </option>)" +" <option>" + phoneManufactures[4]   +    " </option>)" +" <option>" + phoneManufactures[5]   +    " </option>)" +" <option>" + phoneManufactures[6]   +    " </option>)" +" <option>" + phoneManufactures[7]   +    " </option>)" +"</select>");
 