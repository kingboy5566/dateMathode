document.write("<h5>Q:-1</h5>")

var now = new Date();
document.write("current date :"+ now +'<br>')
document.write('<br>');

document.write("<h5>Q:-2</h5>")

var month =['Jan','Feb','March','April','may','jun','jul','Aug','Sep',"oct",'Nov','dec'];
var now = new Date();
var crtMonth = month[now.getMonth()];
crtMonth = crtMonth.toUpperCase()
document.write('current Month :'+ crtMonth + '<br> <br>');


document.write("<h5>Q:-3</h5>")


var day = [ 'sun','mon', 'tue', 'wed', 'thu','fri', 'sat' ]; 
 var newday = day[now.getDay()];
document.write('Today is :'+newday + '<br>');

document.write('<br> <br>' );

document.write("<h5>Q:-4</h5>")
 var newday = day[6]
 if ( newday === 'sun' || 'sat'){
   document.write(  'It,s fun day')
 };
 
document.write("<h5>Q:-5</h5>")

 document.write('<br> <br>' );
 var date  = now.getDate();
  //document.write(date);
  //var date = 12
  if ( date <= 15){
    document.write( 'frist fifteen day of month')
  }else{
    document.write('last day of the month')
  }
  document.write('<br> <br>' );




document.write("<h5>Q:-6</h5>")

var nowDate = new Date();
var second = nowDate.getTime()
document.write("Current Date : " + nowDate +"<br>");

var today = new Date("january 1 1970");
var mints = Math.floor(second/(1000*60))

document.write("Elapsed millisecond since january 1,1970 :" + second+"<br>")
document.write("Elapsed minutes since january 1,1970 :"+mints )  
   




document.write("<h5>Q:-7</h5>")
var now = new Date();
var hur = now.getHours();
 var hur1 = hur.toString();
var mnt = now.getMinutes()
var result = hur + ":"+ mnt
 document.write(result+"<br> <br>" )
if(hur >= 13 || hur ==23 || hur == 0 ){
 document.write("PM");
}else if (hur >=1 || hur <=12) {
  

  document.write("AM")
};


document.write("<h5>Q:-8</h5>")

var now = new Date("Dec 31 2020");

document.write("Latter date : " + " " + now);

// task 9
document.write("<h5>Q:-9</h5>")
var today = new Date();
var todaymls = today.getTime();
var oldRmd = new Date("june 18 2015");
var milisnd = oldRmd.getTime();


var rslt = todaymls-milisnd;
document.write (  Math.floor( rslt/(1000 *60*60*24)) +" "+ " Days have Passed since 1st Ramdan, 2015 ");

// task 10
document.write("<h5>Q:-10</h5>")

var  now = new Date();
var now1 = now.getTime();

var olddate = new Date ("Dec 05 2015");
var olddate1 = olddate.getTime();

var rust1 = now1 - olddate1;


document.write( Math.floor(rust1/(1000*60))+" "+ " Second had Passed since beginning of 2015 ")

// task 11
document.write("<h5>Q:-11</h5>")

var now = new Date();
document.write(now)

document.write("<br>")
var now3 = new Date();
var str = now3.toString()
var day = str.slice(0,3);
var month = str.slice(4,8)
var gmt = str.slice(24,58) 
var hur2 = now3.getHours();
var hur3 = hur2-1

document.write("1 hours ago : "+" " + day +" "+month+now3.getDate()+" "+now3.getFullYear()+" "+ hur3 +":"+ now3.getMinutes()+":"+ now3.getSeconds()+gmt                        )


// task 12
document.write("<h5>Q:-12</h5>")
var now = new Date();
document.write("<br>")
document.writeln("current Date :"+ now);


document.write("<br>")
var old = new Date("Dec 05 1915");

document.write("100 year back, it was " + old)

// task 13
document.write("<h5>Q:-13</h5>")

 var dob = new Date(prompt("Enter your date of brith", "sep 10 1991"));

var now = new Date();
var year = now.getFullYear()
var agemili = now - dob
document.write(" Age " +Math.floor(agemili/(1000*60*60*24)/365.25)+"<br>"+" Days"+ Math.floor(agemili/(1000*60*60*24))+"<br>");
var dob = dob.toString()
var doby = dob.slice(11,16)
document.write("Your birth year is "+ doby)


// task 14
document.write("<h5>Q:-14</h5>")
document.write("<h2>K-Electric Bill </h2>");


 var cusName = prompt("Enter your Name");
 var monthName = prompt("Enter month"); 
var numunt = prompt("Enter your Units ");


var chrge = "Charges per unit : 16"
 document.write(" customer Name : " + cusName +"<br>"+ "Month :"+ monthName +"<br>"+ "Number of units :"+ numunt+ chrge +"<br> <br> <br>")

var now = new Date("Dec 15 2023");
var str = now.toString()
var str1 = str.slice(3,16);
// var month = now.getMonth();
// var date = now.getDate()
// var year = now.getFullYear()



 var unitAmount = numunt * 16
 var leatChr = 350;
 var chrUnit = leatChr+unitAmount
document.write("Net Amount Payable" +"("+ str1 +"):" +" "+ unitAmount)
document.write("<br>"+"Late payment Charger :" + leatChr);
document.write("<br>"+"Gross Amount Payable"+"("+str1+")"+":" +chrUnit);










