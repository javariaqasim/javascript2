
// USER INPUT & CONDITIONAL STATEMENT

// Answer no 1:

var city=prompt("Enter current city")

if(city=="Karachi"||"karachi"){

    alert("Welcome to the city of lights")
}

//  Answer no 2: 

var Gender=prompt("Enter Gender")

 if(Gender=="male"){

     alert("Good Morning Sir ")
 }
 else if(Gender=="female"){

     alert("Good Morning Ma'am ")
 }

// Answer no 3:

var Color=prompt("Enter Color")

if(Color=="red"){

    alert("Must Stop ")
}
else if(Color=="yellow"){

    alert("Ready to move")
}
else if(Color=="green"){

    alert(" move now")
}

// Answer no 4:

var fuel=prompt("Enter fuel in L")

if(fuel<0.25){

    alert("Please refill the fuel in your car")
}

// Answer no 5:

//a.
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

/// b.
  var b = 82;
 if (b++ === 83){
 alert("given condition for variable b is true");
}
// output false

 //c.
  var c = 12;
  if (c++ === 13){
  alert("condition 1 is true");
 } 
 if (c === 13){
 alert("condition 2 is true");
 }
 if (++c < 14){
 alert("condition 3 is true");
 }
 if(c === 14){
 alert("condition 4 is true");
 }


 //d.
  var materialCost = 20000;
 var laborCost = 2000;
var totalCost = materialCost + laborCost;
 if (totalCost === laborCost + materialCost){
 alert("The cost equals");
 } 


 //e.
  if (true){
 alert("True");
 }
if (false){
 alert("False");
}

// f.
  if("car" < "cat"){
 alert("car is smaller than cat");
}

// Answer no 6:

var totalmarks = prompt("Enter your total marks"); 
var obtained_marks = prompt("Enter your obtained marks");
var percentage = obtained_marks * 100 / 300;

document.write("Total Marks:" + totalmarks + "<br>"  + "obtained marks" +  obtained_marks + "<br>");
document.write("Percentage:" + percentage + "<br>");
if(percentage >=80)
{
    document.write("Grade: A")
}
 else if(percentage >=70)
{
    document.write("Grade: B")
}
else if(percentage >=60)
{
    document.write("Grade: C")

}

if(percentage >=80)
{
    document.write("<br>"+"Remarks: good")
}
 else if(percentage >=70)
{
    document.write("<br>"+"Remarks: You Need to improve")
}
else if(percentage >=60)
{
    document.write("<br>"+"Remarks: Hard working")

}


// Answer no 7:

var a =3

var guess=prompt("Enter number b/w 1-10")

if(a==guess){

    document.write("Bingo! Correct answer")
}
else if(a==(guess-1)||a==(guess+1)){

    document.write("Close enough to the correct answer")
}

// Answer no 8:

var num 

num = prompt('Enter the number')

if (num % 3 == 0)
	document.write('Multiple of 3')
else 
  document.write('Not a multiple of 3')


// Answer no 9:

var even_arr = new Array();
for (var i = 0; i  <= 20 ; i +=2){
    even_arr.push(i)
   }
   document.write("<h1>Even Number</h1>" + even_arr)

 var odd_arr = new Array();
for (var i = 1; i  <= 20 ; i +=2){
    odd_arr.push(i)
   }
   document.write("<h1>Odd Number</h1>" + odd_arr)

// Answer no 10:

 var temperature = prompt("Check the temperature")

 document.write( temperature)
if(temperature >=40)
{
    document.write("<br>"+"it is too hot outside")
}
 else if(temperature >=30)
{
    document.write("<br>"+"The Weather today is Normal.”")
}
else if(temperature >=20)
{
    document.write("<br>"+"Today's weather is cool")

}
else if(temperature >=10)
{
    document.write("<br>"+"OMG! Today’s weather is so Cool")

}

// Answer no 11:

var num1 =  prompt("Enter Num1")
num1++
num1--
var num2 = prompt("Enter Num2")
num2++
num2--
var opp = prompt("Enter Operator")
if(opp=="+"){

    document.write(num1+num2)
}
else if(opp=="-"){
    document.write(num1-num2)
}
else if(opp=="*"){
    document.write(num1*num2)
}
else if(opp=="/"){
    document.write(num1/num2)
}
else if(opp=="%"){
    document.write(num1%num2)
}

                        //  END


// IF...ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITION

// Answer no 1:

var a =prompt("Enter char")

if(a<="Z" && a>="A"){

    document.write("it is upper case")
}
else if(a>="a" && a<="z"){

    document.write("it is Lower case")
}

// Answer no 2:

var a =prompt("Enter Number")
var b =prompt("Enter Number")

if(a>b){
    document.write(a)
}
else if(a<b){
    document.write(b)
}else{
    document.write("Both are equal")
}


// Answer no 3:

var a =prompt("Enter Number")

if(a>0){
   document.write("Number is positive ")
}
else if(a<0){
    document.write("Number is Negative")
  
}else{
   document.write("Number is 0")
}

// Answer no 4:

var a =prompt("Enter Number")
if(a=="a"||a=="e"||a=="i"||a=="o"||a=="u"){
    document.write("True")
}
else{
    document.write("False")
}


// Answer no 5:

var passward = "123456"
var pass = prompt("enter a valid passward")
if (pass = ""){
alert("please enter your passward")
}
else if (passward == pass) {
    document.write("correct! The Passward")
}
else{
    document.write("Incorrect Passward")
}

// Answer no 6:

var hour = 13;
if (hour < 18) {
greeting = "Good day"
}
else{
greeting = "Good evening"
}

                  // END


// ARRAYS

// Answer no 1:

studentName = new Array();

// Answer no 2:

studentname=[]

// Answer no 3:

Name=["Table","Books"]

// Answer no 4:

Numbers=[1,2,3]

// Answer no 5:

bol=[true,false]

// Answer no 6:

mixarry=["Cars",1,true]


// Answer no 7:

eduQual=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"]
document.write("Qualifications<br>")
for(i=0;i<8;i++){

    t=i+1
    document.write(t +")"+eduQual[i]+"<br>")
}

// Answer no 8:

var michael = prompt("Enter your total marks");
var john = prompt("Enter your total marks");
var tony = prompt("Enter your total marks");
var percentage = michael+john+tony * 100 / 500;

document.write("Score of Michael is" + michael + "." + "Percentage:" + percentage + "<br>" + "Score of John is" +  john + "." + "Percentage:" + percentage +  "<br>" + "Score of Tony is" + tony + "." + "Percentage:" + percentage +  "<br>");

// Answer no 9:

color=["red","blue"]

alert(color)
var temp =prompt("Enter color to add in front")
color.unshift(temp)
alert(color)
var temp =prompt("Enter color to add in back")
color.push(temp)
alert(color)
var temp =prompt("Enter color to add in front")
color.unshift(temp)
var temp =prompt("Enter color to add in front")
color.unshift(temp)
alert(color)
color.shift()
alert(color)
color.pop()
alert(color)
var pos=0
pos=prompt("Enter index to add")
temp=prompt("enter color")
color.splice(pos,0,temp)
alert(color)

pos=prompt("Enter index to delete")
var del=0
del=prompt("how many to delete?")
color.splice(pos,del)
alert(color)

// Answer no 10:

var score=[320,230,480,120]
document.write(score+"<br>")
for(i=0;i<5;i++)
{
    for(j=i+1;j<5;j++){
        if(score[i]>score[j]){
            temp=score[j]
            score[j]=score[i]
            score[i]=temp

        }
    }
}
document.write(score+"<br>")


// Answer no 11:

var citiesList=["karachi","Lahore","Islamabad","Quetta","Peshawar"]
var cities =[]
alert(citiesList)
pos=prompt("Enter index to extract to cities")
cities=citiesList.splice(pos,3)
alert(cities)

document.write("Cities List :<br> "+citiesList+"<br><br>Selected Cities List : <br> "+cities)

// Answer no 12:

var arr = ["This" , "is" ,  "my" ,  "cat"];
document.write(arr+"<br>")
var st=""
for(i=0;i<arr.length;i++){

    st=st+" "+arr[i]

}
document.write(st)


// Answer no 13:

var arr = ["Keyboard" , "mouse" ,  "printer" ,  "moniter"];
document.write("Devices <br>"+arr+"<br>")
for(i=0;i<arr.length;i++){
    document.write("Out:<br>"+arr[i]+"<br>")
}

// Answer no 14:

var arr = ["keyboard","mouse","printer","monitor"]
var reverse_arr = arr.reverse()
document.write (reverse_arr)
for (i=arr.length-1; i>=0;i--){
    document.write("<br>" + "out:" + "<br>"  + arr[i] + "<br>" )
}

// Answer no 15:

var arr = ["Apple" , "Samsung" ,  "Motorola" ,  "Nokia","Sony","Haier"];
for(i=0;i<arr.length;i++){
    document.write("<br>"+arr[i]+"<br>")
}
                      // END



// ARRAYS AND LOOP

// Answer no 1:

var array = [[],[]];

// Answer no 2:

var a = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
let text = "";
for (let i = 0; i < a.length; i++) {
  text += a[i] + "<br>";
}
// document.getElementById("a").innerHTML = text;

// Answer no 3:

for (var input = 1; input <= 10; input++) {
    document.write(input + "<br>");
   }

// Answer no 4:

var table = +prompt("enter a number to show its multipication tabel")
var multipication = prompt("write how many multipication tabel")
for (var i = 1; i <= multipication ; i++){
    document.write(table + "x" + i + "=" + table*i + "<br>")
}

// Answer no 5: 

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
var len = fruits.length;
for (var i = 0; i < len; i++){
    document.write(fruits[i], "<br>");
}

for (var i = 0; i < len; i++){
    document.write("Element at ", i, "is ", fruits[i], "<br>");
}


// Answer no 6:

var counting_arr = new Array();
for (var i = 1; i  <= 15 ; i ++){
    counting_arr.push(i)
   }
   document.write("<h1>Counting</h1>" + counting_arr)

var reverse_arr = new Array();
for (var i = 10; i  >=0 ; i-- ){
    reverse_arr.push(i)
   }
   document.write("<h1>Reverse Counting</h1>" + reverse_arr)

 var odd_arr = new Array();
for (var i = 1; i  <= 20 ; i +=2){
    odd_arr.push(i)
   }
   document.write("<h1>Odd Counting</h1>" + odd_arr)

   var even_arr = new Array();
for (var i = 0; i  <= 20 ; i +=2){
    even_arr.push(i)
   }
   document.write("<h1>Even Counting</h1>" + even_arr)

   var series_arr = new Array();
   for (var i = 2; i  <= 20 ; i +=2){
       series_arr.push(i)
      }
      document.write("<h1>Series Counting</h1>" + series_arr)

// Answer no 7:

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
for (var i = 0; i < A.length; i++){
    if (A[i] === search){
        available = true;
        break;
    }
    else{
        available = false;
    }       
}

if (available === true){
    document.write(search, " is available at index ", i, " in our bakery");
}
if (available === false){
    document.write("We are Sorry. ", search, " is not available in our bakery");
}

// Answer no 8:

A = [24, 53, 78, 91, 12];
document.write("Array items: ", A);
SmallerNumber = Math.min(24, 53, 78, 91, 12);
document.write("<br> The Smaller Number is ", SmallerNumber);

// Answer no 9:

A = [24, 53, 78, 91, 12];
document.write("Array items: ", A);
largerNumber = Math.max(24, 53, 78, 91, 12);
document.write("<br> The larger Number is ", largerNumber);

// Answer no 10:

var multiple_arr = new Array();
for (var i = 5; i  <= 100 ; i +=5){
    multiple_arr.push(i)
   }
   document.write(multiple_arr)

                 // END




                  











