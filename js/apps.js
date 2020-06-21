/*Chapter 21-25 start from here */
console.log("Chapter 21-25")
//task no 1
let firstName=prompt("Enter your first name")
let lastName=prompt("Enter your Last name")
let fullName=firstName+" "+lastName
document.write("Welcome "+fullName)
//task no 2
let mobileModel=prompt("Enter your Favorite Mobile Model")
let n=mobileModel.length
console.log(n)
document.write("My Favorite Phone is: ",mobileModel,"<br>")
document.write("Length of string: ",n,"<br>")
//task no 3
let pakistan="Pakistani"
document.write("String: ",pakistan,"<br>")
document.write("Index of 'n' :",pakistan.indexOf('n'))
//task no 4
let word="Hello World"
document.write("String: ",word,"<br>")
document.write("Last Index of 'l' :",word.lastIndexOf('l'))
//task no 5
let word="Pakistani"
document.write("String: ",word,"<br>")
document.write("Character at index 3 :",word.charAt(3))
//task no 6
let firstName=prompt("Enter your first name")
let lastName=prompt("Enter your Last name")
let fullName=firstName.concat(" ",lastName)
document.write("Welcome "+fullName)
//task no 7
let word="Hyderabad"
document.write("City: ",word,"<br>")
document.write("After replacement :",word.replace('Hydera','Islam'))
//task no 8
let message = "Ali and Sami are best friends. They play cricket and football together."
document.write("After replacement :",message.replace(/and/g,'&'),)
//task no 9
let value="472"
document.write("Value : ",value,"<br>")
document.write("Type : ",typeof(value),"<br>")
value=Number(value)
document.write("Value : ",value,"<br>")
document.write("Type : ",typeof(value),"<br>")
//task no 10
let userInput=prompt("Enter Something")
document.write("User input "+userInput,"<br>")
document.write("Upper case "+userInput.toUpperCase())
//task no 11
let userInput=prompt("Enter Something")
document.write("User input "+userInput,"<br>")
function jsUcfirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
document.write("Upper case "+jsUcfirst(userInput))
//task no 12
let num=35.36
document.write("Number:",num,"<br>")
document.write(parseInt(num))
//task no 14
function jsUcfirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
let A = ["cake", "apple pie", "cookie", "chips", "patties"]
let name=prompt("Welcome to ABC Bakery what you do want ")
let count=0
let title=jsUcfirst(name)
for (let index = 0; index < A.length; index++) {
   if(A[index]==name || A[index]==name.toLowerCase() || A[index]==name.toUpperCase() ){
        count++
        console.log("present")
        document.write(name," is avaible at index ", index," in our bakery")  
        break}
    }
if(count==0){
    console.log("Not present")
}
//task no 15
let password=document.getElementById("password")
let submit=document.getElementById("submit")
let result=document.getElementById("result")
let elm=document.createElement('p') 
elm.id="p"
submit.addEventListener('click',()=>{
    console.log(password.value)
    let regex=/[A-Za-z]([0-9a-zA-z]){2,10}/
    let str=password.value
   if(regex.test(str)){
    elm.innerHTML="Your password is Valid"
    result.appendChild(elm)}
    else{
        elm.innerHTML="Your password is Invalid"
        result.appendChild(elm)}
})
//task no 16
var university = "University of Karachi";
Array.from(university).forEach(element => {
let split=element.split("")
     document.write("<br>")
    document.write(split)
    
});

//task no 17
let input=prompt("Enter something")
document.write("Last Character of ",input," is ",input.slice(-1))
//task no 17
let input="The quick brown fox jumps over the lazy dog"
let count=0;
let regex=/the/g;
count=input.match(regex).length;
document.write("occurrences of word  and the count is ",count)
/*Chapter 21-25 End here */
//task no 1 and 2
let input=prompt("Enter a number")
document.write("Number:",input,"<br>")
document.write("Roundoff value:",Math.round(input),"<br>")
document.write("floor value :",Math.floor(input),"<br>")
document.write("ceil value:",Math.ceil(input),"<br>")
//task no 3
let input=prompt("Enter a number")
document.write("The absolute value of :",input," is ",Math.abs(input),"<br>")
//task no 4
let input=(Math.random(6)*10)
document.write("The Random Dice value of :",Math.ceil(input),"<br>")
//task no 5
let input=Math.ceil(0+(2-0)*Math.random(0,1))
let input1;
  if(input==2){
      input1="Head"
  }else{
      input1="Tail"
  }
document.write(input,"<br>")
document.write("The Random coin value of :",input1,"<br>")
//task no 6
let input=Math.ceil(1+(100-1)*Math.random(0,1))
document.write(input,"<br>")
document.write("The Random  value of :",input,"<br>")
//task no 7
let input=prompt("Enter your weight in Kilogram")
document.write("The Weight of user is  :",input,"<br>")
//task no 8
let random =Math.ceil(1+(10-1)*Math.random(0,1))
let input=prompt("Enter a number")
if(input==random){
document.write("Congratulatons  number is :",input,"<br>")
}
else{
    document.write("Try again")
}

/*Chapter 26-30 end here */

/*Chater31-34 start from here */
//task no 1
let date=new Date()
console.log(date)
//task no2
let months
switch(date.getMonth()){
    case 0:months="January, 1=February "
            break;
    case 1:months="February "
            break;
    case 2:months="March "
            break;
    case 3:months="April"
            break;    
    case  4:months="May "
            break;
    case 5:months="June "
            break;
    case 6:months="July "
            break;
    case 7:months="August "
            break; 
    case 8:months="September "
            break;    
    case 9:months="October"
            break;
    case 10:months="November "
            break;
    case 11:months="December"
            break;
         
}
console.log(months)
//task no3
let date=new Date()
let days=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday','Sunday'] 
let day_index=date.getDay()
let presentDay
days.forEach((element ,index)=> {
    if(day_index==index){
    console.log(element)
    presentDay=element
          }});
console.log(presentDay)
//task no4
let date=new Date()
let days=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday','Sunday'] 
let day_index=date.getDay()
let count=0
days.forEach((element ,index)=> {
    if(element=="Sunday" || element=="Saturday"){
     count++;
          }});
if(count!=0){
    document.write("It's Fun Day");
}
//task no5
let date=new Date()
if(date.getDay() <=15 ){
  document.write("First fifteen days of the month")
}
else{
    document.write("Last days of the month")
}
//task no6
let date=new Date()
let c=date.getDate()
let d=date.setFullYear(1970)
d=date.setMonth(0)
d=date.setDate(1)
document.write("Current Date is ",c)
//task no7
let date=new Date()
function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    var strTime =  ampm;
    return strTime;
  }
  console.log("Its ",formatAMPM(date))

//task no8
let date=new Date()
let days=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday','Sunday'] 
let months=['Jan','Feb','March','April','May','June','July','August','Sep','Oct','Nov','Dec']
let m=date.getMonth()-1
let d=date.getDay()-1
let da=date.getDate()-1
let presentDay,previousMonth,previousDay
days.forEach((element ,index)=> {
    if(d==index){
    
    previousDay=element
          }});
months.forEach((element ,index)=> {
    if(m==index){
  
    presentMonths=element
          }});
console.log(previousDay)
console.log( presentMonths)
let previousDate=new Date()
previousDate.setDate(da)
previousDate.setMonth(m)
document.write(previousDate)
//task no9
let date=new Date()
let days=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday','Sunday'] 
let months=['Jan','Feb','March','April','May','June','July','August','Sep','Oct','Nov','Dec']
let m=date.getMonth()
let d=date.getDay()
let da=date.getDate()
let ramadan=new Date()
ramadan.setMonth(5)
ramadan.setFullYear(2015)
ramadan.setDate(1)
document.write(ramadan)
let diff=date.getTime()-ramadan.getTime();
let final=diff/(1000 * 3600 * 24); 
document.write("<br> ",final," days have passed since 1st Ramandan 2015")
//task no10
let date=new Date()
let days=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday','Sunday'] 
let months=['Jan','Feb','March','April','May','June','July','August','Sep','Oct','Nov','Dec']
let m=date.getMonth()
let d=date.getDay()
let da=date.getDate()
let ramadan=new Date()
ramadan.setMonth(12)
ramadan.setFullYear(2015)
ramadan.setDate(5)
document.write(ramadan)
let diff=date.getTime()-ramadan.getTime();
let final=diff
document.write("<br> ",final," seconds begining of  2015")
//task no11
let date=new Date()
let m=date.getMonth()
let d=date.getDay()
let da=date.getDate()
let h=date.getHours()
let hourAgo=new Date()
hourAgo.setHours(h+1)
document.write("<br> Current date :",date)
document.write("<br> 1hour ago it was :",hourAgo)
//task no12
let date=new Date()
let y=date.getFullYear()
let yearBack=new Date()
yearBack.setFullYear(y-100)
document.write("<br> Current date :",date)
document.write("<br> 100 years back it was :",yearBack)
//task no13
let currentAge=prompt("Enter Your Age");
let date=new Date()
let y=date.getFullYear()
let age=y-currentAge
document.write("<br> Current date :",date)
document.write("<br> Yor Birth year isn :",age)
//task no14
let date=new Date()
let months
switch(date.getMonth()){
    case 0:months="January "
            break;
    case 1:months="February "
            break;
    case 2:months="March "
            break;
    case 3:months="April"
            break;    
    case  4:months="May "
            break;
    case 5:months="June "
            break;
    case 6:months="July "
            break;
    case 7:months="August "
            break; 
    case 8:months="September "
            break;    
    case 9:months="October"
            break;
    case 10:months="November "
            break;
    case 11:months="December"
            break;
         
}
let customerName="ABC Customer"
let noOfUnit=410;
let noOfCharges=16
let latePayment=350
let netAmount=noOfUnit*noOfCharges
let groosAmount=netAmount+latePayment
let kelectric ={
    "customerName":customerName,
    "month":months,
    "noOfUnit":noOfUnit,
    "noOfCharges":noOfCharges,
    "netAmount":netAmount,
    "latePayment":latePayment,
    "groosAmount":groosAmount

}
document.write("<br>Customer Name :",kelectric["customerName"])
document.write("<br>Month :",kelectric["month"])
document.write("<br>Number of Units :",kelectric["noOfUnit"])
document.write("<br>Numbe rof charges :",kelectric["noOfCharges"])
document.write("<br>NnetAmount :",kelectric["netAmount"])
document.write("<br>LatePayments :",kelectric["LatePayment"])
document.write("<br>groosAmount :",kelectric["groosAmount"])
/*Chater31-34 end here */



/*Chapter 35-38 start from here */
//task no1
let div=document.getElementById("result")
let elm=document.createElement("h5")
let CurrentDate=()=>{
    let date=new Date()
    elm.innerHTML=date
    div.appendChild(elm)
}
CurrentDate()
//task no2
let div=document.getElementById("result")
let elm=document.createElement("h5")
let firstName=prompt("enter first name <br>")
let lastName=prompt("Enter last name <br>")
let name=(firstName,lastName)=>{
    let fullName;
    fullName=firstName+" "+lastName
    elm.innerHTML=fullName
    div.appendChild(elm)
}
name(firstName,lastName)
//task no3
let div=document.getElementById("result")
let elm=document.createElement("h5")
let num1=parseInt(prompt("Enter 1st num"))
let num2=parseInt(prompt("Enter 2nd num"))
let sum=(num1,num2)=>{
    let result
  result=num1+num2
    elm.innerHTML=result
    div.appendChild(elm)
}
sum(num1,num2)
//task no4 5 6 7 
let num1 = parseInt(prompt("Enter 1st num"))
let num2 = parseInt(prompt("Enter 2nd num"))
let op = prompt("Enter Operator")
let sum = (num1, num2) => { return num1 + num2 }
let diff = (num1, num2) => { return num1 - num2 }
let div = (num1, num2) => { return num1 / num2 }
let mul = (num1, num2) => { return num1 * num2 }
let result;
switch (op) {
    case '+': result = sum(num1, num2)
        break;
    case '+': result = diff(num1, num2)
        break;
    case '+': result = div(num1, num2)
        break;
    case '+': result = mul(num1, num2)
        break;

}
document.write(`<br> num1 is ${num1} and num2 is ${num2} op is ${op} where result is  ${sum(num1, num2)}`)
let sqaure = (num1, num2) => { return num1 ** num2 }
var f = []
function factorial(n) {
    if (n == 0 || n == 1)
        return 1;
    if (f[n] > 0)
        return f[n];
    return f[n] = factorial(n - 1) * n;
}
let counting = (num1, num2) => {
    for (let index = num1; index < num2; index++) {
        let element =index;
        console.log(element)

    }}
document.write("<br>sqaure function ", sqaure(num1, num2))
document.write("<br>sum function ", factorial(num1))
counting(0,10)
//task no 8
b=prompt("Enter Base")
p=prompt("Enter Perpendicular")
let calculateHypotenuse=(b,p)=>{
    let base=calculateSquare(b)
    let per=calculateSquare(p)
     hypo=base+per
     return (Math.sqrt(hypo))
}
calculateSquare=(num1)=>{
    return num1*num1

}
document.write(" Result is ",calculateHypotenuse(b,p))
//task no 9
h=prompt("Enter height")
let  areaOfRectangle=(width,height)=> width * height
let A=areaOfRectangle(22,h)
document.write(" Result is ",A)
//task no 10
function isPalindrome (s) {
    var sRev = '';
    for (let i=s.length; i>0; i--) {
        sRev += s[i-1] ;
    }
    return s==sRev;
}
document.write(isPalindrome("madam"))


/*Chapter 35-38 End here */