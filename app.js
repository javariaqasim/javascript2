// ARRAYS AND LOOP

// Answer no 1:

// var array = [[],[]];

// Answer no 2:

// var a = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
// let text = "";
// for (let i = 0; i < a.length; i++) {
//   text += a[i] + "<br>";
// }
// document.getElementById("a").innerHTML = text;

// Answer no 3:

// for (var input = 1; input <= 10; input++) {
//     document.write(input + "<br>");
//    }

// Answer no 4:

// var table = +prompt("enter a number to show its multipication tabel")
// var multipication = prompt("write how many multipication tabel")
// for (var i = 1; i <= multipication ; i++){
//     document.write(table + "x" + i + "=" + table*i + "<br>")
// }

// Answer no 5: 

// var fruits = ["apple","banana","mango","orange","stawberry"];

// let text = "";
// for (let i = 0; i < fruits.length; i++) {
//   text += fruits[i] + "<br>";
// }
// var a = ("Element at index 0 is apple")
// var b = ("Element at index 1 is banana")
// var c = ("Element at index 2 is mango")
// var d = ("Element at index 3 is orange")
// var e = ("Element at index 4 is stawberry")

// document.write(a + "<br>" + b + "<br>" + c + "<br>" + d + "<br>" + e + "<br>")

// document.getElementById("fruits").innerHTML = text;


// Answer no 6:

// var counting_arr = new Array();
// for (var i = 1; i  <= 15 ; i ++){
//     counting_arr.push(i)
//    }
//    document.write("<h1>Counting</h1>" + counting_arr)

// var reverse_arr = new Array();
// for (var i = 10; i  >=0 ; i-- ){
//     reverse_arr.push(i)
//    }
//    document.write("<h1>Reverse Counting</h1>" + reverse_arr)

//  var odd_arr = new Array();
// for (var i = 1; i  <= 20 ; i +=2){
//     odd_arr.push(i)
//    }
//    document.write("<h1>Odd Counting</h1>" + odd_arr)

//    var even_arr = new Array();
// for (var i = 0; i  <= 20 ; i +=2){
//     even_arr.push(i)
//    }
//    document.write("<h1>Even Counting</h1>" + even_arr)

//    var series_arr = new Array();
//    for (var i = 2; i  <= 20 ; i +=2){
//        series_arr.push(i)
//       }
//       document.write("<h1>Series Counting</h1>" + series_arr)

// Answer no 7:

// var A = ["cake","apple pie","cookie" , "chips" , "patties"]
// var B = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am")
// for (var i = 0 ; i < A.length ; i++){
//     if (A[i] === B){
//         document.write(A [i] + "is available at index" + i + "in our Bakery")
//     }
//     if (A[i] != B){
//         document.write("We are sorry. pastery is not available in our bakery")
//     }
// }

// Answer no 8:

// var a = [24, 53, 78, 91, 12]
// document.write("Arrayitems:" + "" + a + "<br>" + "The smallest number is 12 " + "<br>")

// Answer no 9:

// var a = [24, 53, 78, 91, 12]
// document.write("Arrayitems:" + "" + a + "<br>" + "The largest number is 91" + "<br>")

// Answer no 10:

// var multiple_arr = new Array();
// for (var i = 5; i  <= 100 ; i +=5){
//     multiple_arr.push(i)
//    }
//    document.write(multiple_arr)

                 // END

// ARRAYS

// Answer no 3:

// var cars = ["Volvo","BMW","civic","Mazda"];
// document.write(cars)

// Answer no 4:

// let x = 3.14;
// let y = 3;
// document.write(x + y)

// Answer no 5:

// var x = 10;
// var y = 9;
// document.write(x > y);


// Answer no 7:
// var a = ("SSC")
// var b = ("HSC")
// var c = ("BCS")
// var d = ("BS")
// var e = ("BCOM")
// var f = ("MS")
// var g = ("M.phil.")
// var h = ("PHD")

// document.write("<h1>" + "Qualifications:" + "</h1>" + "<ol>" + "1)" + a + "<br>" + "2)" + b + "<br>"+ "3)" + c  + "<br>"  + "4)" + d + "<br>" + "5)" + e + "<br>" + "6)" + f + "<br>" + "7)" + g + "<br>" +  "8)" + h   + "<br>" +  "<ol>")

// Answer no 8:

// var michael = prompt("Enter your total marks");
// var john = prompt("Enter your total marks");
// var tony = prompt("Enter your total marks");
// var percentage = michael+john+tony * 100 / 500;

// document.write("Score of Michael is" + michael + "." + "Percentage:" + percentage + "<br>" + "Score of John is" +  john + "." + "Percentage:" + percentage +  "<br>" + "Score of Tony is" + tony + "." + "Percentage:" + percentage +  "<br>");

// Answer no 9:

// var color = ["red","yellow"]
// for (i=0; i<color.length; i++){
//     document.write(color[i]+"")
// }
// var user_color = prompt("Enter color to add in front")
// color.unshift(user_color)
// document.write ("<br>" + color)

// var temp=0
// temp =prompt("Enter index to add color")
// del=0
// del=prompt("how many color to delete")
// color.splice(temp,del)
// document.write("<br>",color)

// Answer no 11:

// var cities = [] 
// cities[0]= "karachi";
// cities[1]= "lahore";
// cities[2]= "islamabad";
// cities[3]= "Quetta";
// cities[4]= "peshawar";

// var cities1 =[]
// cities1[0]= "islamabad,Quetta";

// document.write("<h1>" + "Cities list:" + "</h1>" + "<br>" + cities + "<br>" + "<h1>" + "Selected cities list:" + "</h1>" + "<br>" + cities1)

// Answer no 12:

// var a = ["This","is","my","cat"];
// var b = "This is my cat" 

// document.write("<h1>" + "Array" + "<br>" + "</h1>" + a +"<br>" + "<h1>" + "String" + "<br>" + "</h1>" + b + "<br>")



// Answer no 13:

// var arr = ["keyboard","mouse","printer","monitor"]
// document.write("<h1>" + "Devices" + "</h1>" + "<br>" + arr + "<br>")


// Answer no 14:

// var arr = ["keyboard","mouse","printer","monitor"]
// var reverse_arr = arr.reverse()
// document.write (reverse_arr)
// for (i=arr.length-1; i>=0;i--){
//     document.write("<br>" + "out:" + "<br>"  + arr[i] + "<br>" )
// }


                      // END



// IF...ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS


// Answer no 3:

// if(num > 0)
// {
//     printf("Number is POSITIVE");
// }
// if(num < 0)
// {
//     printf("Number is NEGATIVE");
// }
// if(num == 0)
// {
//     printf("Number is ZERO");
// }



// Answer no 5:

// var passward = "123456"
// var pass = prompt("enter a valid passward")
// if (pass = ''){
// document.write("please enter your passward")
// }
// else if (passward == pass) {
//     document.write("correct! The Passward")
// }
// else{
//     document.write("Incorrect Passward")
// }

// Answer no 6:

// var greeting;
// var hour = new Date().getHours();

// if (hour < 13) {
//     greeting = "Good day";
// } else if (hour <18) {
//     greeting = "Good evening";
// }
// document.write(greeting)



                  // END

                  

// USER INPUT & CONDITIONAL STATEMENT

// Answer no 1:

// var table = +prompt("city name","Karachi")
// alert("“Welcome to city of lights”")

//  Answer no 2: 

//  var gender =prompt("Enter your gender")
//  gender = ("male","female")
//  if ( gender =="female"){
//      alert("Good morning mam")
// }
//   else if (gender =="male")  {
//      alert("Good morning sir")
//  }

// Answer no 3:

// var color = ["red","yellow","green"]
// for (i=0; i<color.length; i++){
//     document.write(color[i]+"")
// }
// var user_color = prompt("Enter color to add in front")
// color.unshift(user_color)
// document.write ("<br>" + color)

// var temp=0
// temp =prompt("Enter index to add color")
// var colorname=prompt("Enter color name")
// color.splice(temp,0,colorname)
// document.write("<br>",color)





// Answer no 5:

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }


// if (true){
// 	alert("True");
// 	}
// 	if (false){
// 	alert("False");
// 	}


// if("car" < "cat"){
// alert("car is smaller than cat");
// }

// Answer no 6:

// var totalmarks = prompt("Enter your total marks"); 
// var obtained_marks = prompt("Enter your obtained marks");
// var percentage = obtained_marks * 100 / 300;

// document.write("Total Marks:" + totalmarks + "<br>"  + "obtained marks" +  obtained_marks + "<br>");
// document.write("Percentage:" + percentage + "<br>");
// if(percentage >=80)
// {
//     document.write("Grade: A")
// }
//  else if(percentage >=70)
// {
//     document.write("Grade: B")
// }
// else if(percentage >=60)
// {
//     document.write("Grade: C")

// }

// if(percentage >=80)
// {
//     document.write("<br>"+"Remarks: good")
// }
//  else if(percentage >=70)
// {
//     document.write("<br>"+"Remarks: You Need to improve")
// }
// else if(percentage >=60)
// {
//     document.write("<br>"+"Remarks: Hard working")

// }


// Answer no 8:

// var num 

// num = prompt('Enter the number')

// if (num % 3 == 0)
// 	document.write('Multiple of 3')
// else 
//   document.write('Not a multiple of 3')

// Answer no 9:
// var even_arr = new Array();
// for (var i = 0; i  <= 20 ; i +=2){
//     even_arr.push(i)
//    }
//    document.write("<h1>Even Number</h1>" + even_arr)

//  var odd_arr = new Array();
// for (var i = 1; i  <= 20 ; i +=2){
//     odd_arr.push(i)
//    }
//    document.write("<h1>Odd Number</h1>" + odd_arr)

// Answer no 10:

//  var temperature = prompt("Check the temperature")

//  document.write( temperature)
// if(temperature >=40)
// {
//     document.write("<br>"+"it is too hot outside")
// }
//  else if(temperature >=30)
// {
//     document.write("<br>"+"The Weather today is Normal.”")
// }
// else if(temperature >=20)
// {
//     document.write("<br>"+"Today's weather is cool")

// }
// else if(temperature >=10)
// {
//     document.write("<br>"+"OMG! Today’s weather is so Cool")

// }



                        //  END











