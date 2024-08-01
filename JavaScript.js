// 1. Write a program to accept 2 numbers from the user and console it
// let a = Number(prompt("Enter the value of a:"));
// let b = +prompt("Enter the value of b : ");


// console.log(a,b);

//2. Write a program to accept username, age from and console it as

// const a = prompt("Enter the name : ");
// const b = prompt("Enter the age : ");
// console.log(`The ${a} is ${b}`);

//3. Write a program to take three integer inputs from user an  d check whether they all are equal any two of them are equal or none of them are equal

// const a = +prompt("Enter the value of a: ");
// const b = +prompt("Enter the value of  b:");
// const  c= +prompt("Enter the value of c :");

   
// if(a==b && b==c){
//     cout<<"All three values are same"<<endl;
// }
// else if(b==c || a==c){
//     cout<<"Two values are same"<<endl;
// }
// else{
//     cout<<"None of them are equal"<<endl;
// }

// 4. Write a program to take two inputs from user and check which is greater

// const a = Number(prompt("Value of A: "));
// const b = Number(prompt("Value of B: "));

// if(a>b){
//   console.log("A is greater than B");
// }
// else
//   console.log("B is greater than A");

//5. Write a program to take three inputs from user and check which is greater

// const a= +prompt("Enter the value of A : ");
// const b= +prompt("Enter the value of B : ");
// const c= +prompt("Enter the value of C : ");


// if(a>b && a>c){
    //     cout<<"A is greator"<<endl;
    // }
// else if(b>=c && b>=a){
//     cout<<"B is greator"<<endl;
// }
// else 
// cout<<"C is greator"<<endl;

//6. Write a program to print n natural number with for and while loop

// for(int i =0;i<=15;i++){
//     console.log(i);
// }


// let i =0;
// while(i<=15){
//     console.log(i);
//     i++;
// }

// 7. Write a program table of given table

// const i =1;

// while(i<=10){
//     console.log(2*i);
//     i++;
// }


//8. Write  a program to print the sum of natural number

// let sum =0;

// for(let i =1;i<=5;i++){
//     sum+=i;
// }

// console.log(sum);

//9. Write a program factorial

// const a = +prompt("A")
// let sum=1;
// for(int i=1;i<=a;i++){
//     sum = sum*i;
// }
// console.log(sum);



// 10. write a program the sum of digits

// const num = +prompt("");
// const sum =0;
// while(!num){
//     const rem = num % 10;
//     sum+=rem;
//     num = parseInt(num /10);
// }
// console.log(sum);




// 11. write a program the reverse of digits

// const num = +prompt("");
// const sum =0;
// while(!num){
//     const rem = num % 10;
//     sum = sum * 10 + rem;
//     num = parseInt(num /10);
// }
// console.log(sum);



// 12. Check a no. is palindrome or not
// const num = +prompt("");
// const sum =0;
// while(!num){
//     const rem = num % 10;
//     sum = sum * 10 + rem;
//     num = parseInt(num /10);
// // }
// if(sum==num){
//     console.log("Number is palindrome");
// }
// else{
//     console.log("Number is not palindrome");
// }
// console.log(sum);


// 13. Check a number is prime or note

// const num = "";
// const ans = false;
// for(let i =2;i<Math.sqrt(num);++i){
//     if(num%i!=0){
//         ans = true;
//         break;
//     }
// }   
// ans = true;

// const num = Number(prompt("Enter the number : "));

// for(let i = 0;i<=num;i++){
//     if(i%3==0){
//         console.log('Shery',i);
//     }
//     if(i%5==0){
//         console.log('Coding',i);
//     }
//     if(i%5==0 && i%3==0){
//         console.log('School',i);
//     }
   
// }


// ------------------------------- Variables -------------------------------------

// let - local scope - we can reinitialize it
// const - local scope - we cannot reinitialize it 
// var - global scope - we can reinitialize it any time.

// {
// 	let a = 23;
// 	console.log(a);
// }

// --------------------------------- Data Types --------------------------------------

// 1. Primitive - number ,  String - ' '/" " , Boolean - true/false, null, undefined -  it is being assigned by compiler meanwhile compile time -  compiler always initialize the value by undefined, symbol
// 2. Reference/Non-primitive - {},[]

// ------------------------------- Truthy / Falsy Value -------------------------------

// Falsy Value  - 0, "", null, undefined, NaN , False

// ------------------------------- ES6 / ES5 Feature --------------------------------------------

// Es5 Feature - var 
//Es6 Feature - const, let, === , fat arrow function
//Ecma Script is the preivous name of Es6 but later its name converted into javascript


//------------------------------- Difference b/w == && === ---------------------------

// == -> It checks only value
// === -> It checks value and data type either




// -----------------------------Types of functions: -------------------------------

// 1. Pure function - Jo apne hi function scope ke resources ko use kr rhe h 
// 2. Impure function - Ese function jo function ke scope main use nhi krte h 

// Creating an array

// let arr = [12,33,23,1,2,21,2];

//Reading an element from array
// let arr = [12,33,23,1,2,21,2];

// console.log(arr[4]);


// Deleting an elment from array
// let arr = [12, 34, 22, 1, 1, 1];
// delete arr[4];

//Updating an element in arrat
// let arr = [ 12, 2, 1, 1, 2, 2, 2 ];
// arr[3] = 19;
// console.log(arr);

//Array Methods and properties
// Push - add elemtn at the end of the end of the array and return the length of the array 
// let arr = [12,2,1,1];
// let ax = arr.push(20,200);
// console.log(x);

// unshift- add elemnt at the start the of array and return the length of the array as same 
// arr.unshift(13);
// console.log(arr);

//Pop- remove lement from the end of the array and return  the removed elemnt

// let x  = arr.pop();
// console.log(x);

// Shift -remove the elemtn fro the statrt of the arrya and retyrn the removed element

// arr.shift();
// console.log(arr);

//Splice - add/remove/replace element from the array
// splice(index which we have to delete, how many elements will have to return)
// let x = arr.splice(4,1);
// console.log(x);

//------------------------------------------Mutable and immutable-------------------------
//Immutable
// let a = 19;
// let b = a;
// console.log(a);
// console.log(b);

//Mutable
// let arr = [1,2,2,3,4,5];
// let br  = [...arr];//Spread operator

// br[4]= 44;
// console.log(arr)
// console.log(br);




//Traversing Using for loop

// let arr = [12,11,2,1,2,34,5];
// for(let i = 0;i<arr.length;i++){
//     console.log(arr[i]);
// }

//with forof

// let arr = [12,11,2,1,2,34,5];

// for(let i of arr){
//     console.log(i);
// }

//Callback functino is a function which is passed as an argument to another function


//Forin loop

// let arr = [12,11,2,1,2,34,5];

// for(let i in arr){
//     console.log(arr[i]);
// }

//Foreach function 

// let arr = [12,11,2,1,2,34,5];
// arr.forEach((element,index)=>{
//     console.log(`${index} -> ${element}`)
// })


//Mapping and filtering with forEach 

// let arr = [12,11,2,1,2,34,5];
// let copyarr = [];
// arr.forEach((element,index)=>{
//     if(element%2!=0){
//         copyarr.push(element);
//     }
// })

// console.log(copyarr);
// console.log(arr);

// Map 
// let x = arr.map((element,index)=>{
//     return element*2;
// })
// console.log(x);


// Filter
// let x = arr.filter((element, index)=>{
//     return element!==12;
// })
// console.log(x);



//Enter the value from the user

// let arr =[]
// let n = +prompt("Enter the length of an array : ");
// for(let i = 0;i<n;i++){
//     arr[i] = +prompt("Enter the number "+i+" : ");
// }
// console.log(arr);


// -----------------------------------OBJECT-------------------------------------------------

// Object : Stores data in key value format

// let x = {
//     key : value//key value pair is called property
// }

// JSON : JavaScript object Notataion

// array of object called JSON
//  [
//     {
//     }
//  ]

// let x = {
//     "name" : "Piyush",
//     "age" : 56,
//     "city" :"Bhopal"
// }

// Read 
// console.log(x);
// console.log(x.name);

// Update
// console.log(x);
// x.city = "Hyderabad";
// console.log(x);

// Delete
// delete x.city;
// console.log(x);

//Find value in object
// console.log("age" in x)
//console.log(!("age" in x))

//Traversing on Object 
// for(const key in x){
//     console.log(key, x[key])
// }


//Object are pass by reference so we have to use spread operator

// let x = {
//     "name" : "Piyush",
//     "age" : 56,
//     "city" :"Bhopal"
// }

// let y = {...x}
// console.log(y)

//------------------------------------- Destructuring --------------------------
// let x = {
//     "name" : "Piyush",
//     "age" : 56,
//     "city" :"Bhopal"
// }

// const {age,city} =x;
// console.log(age,city)


// ---------------------Asynchronous JavaScript----------------------


//-----Settimeout----------
// console.log(1);
// setTimeout(()=>{
//     console.log(2);
// },2000)
// console.log(3)


//------SetInterval---------
// let count=1;

// let x = setInterval(()=>{
//     if(count===5){
//         clearInterval(x);//It is used to clear the interval 
//     }
//     console.log(count);
//     count++;
// },1000)



// ------------------------- AJAX-------------------------
//Asynchronous JavaScript and XML.
//AJAX is the method to connect backend and frontend and transmission of data from one to another end.
//AJAX is a theoratical concept it is implemented by Fetch API or axios.

//Synchronous code ki error ko handle krne ke liye hm try catch use krte h
//Async code ki error ko handle krne ke liye hm Promises ka use krte h 

// promises-
// .then
// .catch

// console.log("object");

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res)=>res.json())
// .then((res)=>console.log(res))
// .catch((err)=> console.log(err))

// console.log("hello")


// -----------------------Promise-----------------------------

// function evenchecker(n){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//         if(n%2==0){
//             res("no. is even")
//         }
//         else{
//             rej("no. is odd");
//         }
            
//         },5000)
//     });
// }

// // console.log(evenchecker(5));

// evenchecker(5).then((res)=>console.log("Number is even")).catch((rej)=>console.log("Number is odd"))


//--------------------- A code to convert async code to sync code along with error handling ----------------------

// async function piyush(){
//     try {
//         const img = await fetch("https://picsum.photos/v2/list?page=2&limit=100");
//         const jsonformat = await img.json();
        
//         console.log(jsonformat);
//         console.log("Images Loaded");
//     } catch(error) {
//         console.log(error);
//     }
// }

// piyush();



// Example 2 

// function piyush(a,b){
//     return new Promise((res,rej)=>{
//             setTimeout(()=>{
//                 if((a+b)%2==0){
//                     res("It's an even number")
//                 }
//                 else{
//                     rej("It's an odd number");
//                 }

//             },2000)
//         });
    
// }

// async function answer(){
//    try{
//         const ans = await piyush(1,2);
//         console.log(ans);
//    }
//    catch(error){
//     console.log(error)
//    }
// }

// answer()





// console.log("Hey hiii")



// ----------------------- Rest Operator ---------------------------

// Rest -> Rest Operator result in array 

// function hobbies(name,...hobby){
//     console.log(name)
//     console.log(hobby)
// }

// hobbies("piyush","panchabhai", "Shrey");
// console.log("------------------------------")
// hobbies("piyush");


// ------------------------------- Fat Arrow Function --------------------------- 

// const sum = (a,b)=>{
//     return a + b;
// }

// console.log(sum(1,2));


// ------------------------------------ Hoisting ----------------------------------

// compiler first checks and store the declaration in the Memory.

// i. Variable 
// ii. Function -> Function are fully hoisted


// @variable : 
// var is a global variable so compiler can initialize it by undefined
// But let and const will give an error like we cannot access by intialization tha tis called temporal dead zone.


// --------------------------------------- Destructuring --------------------------------




//------------------------------------------Foreach Function ----------------------------




//------------------------------------------DOM -----------------------------------------------

//Index.html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="./style.css">
// </head>
// <body>
//    <div id="container">
//     <button>
//         Change Color
//     </button>
//    </div>
//    <script src="./javacs.js"></script>
// </body>
// </html>


//Javacjs
// // const head = document.getElementsByTagName("h1");
// // const subHead = document.getElementsByClassName("subhead");
// // const para = document.getElementById("para");
// // console.log(head);
// // console.log(subHead);
// // console.log(para)



// const para = document.querySelector("#para")
// document.querySelectorAll();//It will select the all element and put it into nodeList
// console.log(para.textContent)
// console.log(para.innerText)
// console.log(para.innerHTML)
// para.innerText ="tomotao"
// console.log(para.innerText)

//This code is used to change the color Code on each button click respectiely 

// const element  = document.querySelector("#container")
// const btn = document.querySelector("button")
// function getRandom(){
//     return Math.floor(Math.random()*255+1);
// }

// btn.addEventListener("click",function(event){
//    const getColor = `rgb(${getRandom()},${getRandom()},${getRandom()})`
//    element.style.backgroundColor= getColor;
//    btn.innerHTML = getColor
// })


//---------------------------------------------- Task-2 - Make Follow and Unfollow Functionality---------------------

// javac.js
// const btn = document.querySelector("button");
// console.log(btn)
// btn.addEventListener("click", function(event) {
//     if (btn.innerHTML === "Follow") {
//         btn.innerHTML = "UnFollow";
//         btn.style.backgroundColor = "green";
//     } 
//     else{
//         btn.innerHTML = "Follow";
//         btn.style.backgroundColor = "royalblue";
//     }
// });


// To make a instagram functionality of story

// const jsonimg = [
//     {
//         dp : 'https://images.unsplash.com/photo-1682695795931-a546abdb6733?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8',
//         profile : 'https://images.unsplash.com/photo-1708649290066-5f617003b93f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8'
//     },
//     {
//         dp : 'https://plus.unsplash.com/premium_photo-1705091981530-364352828985?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D',
//         profile : 'https://images.unsplash.com/photo-1710485886130-84811421b0dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D'
//     },
//     {
//         dp :'https://images.unsplash.com/photo-1710268503377-7fe212765db8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D',
//         profile : 'https://images.unsplash.com/photo-1710097092298-75d5c777a9bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D'
//     }
// ]

// let stories = document.querySelector('.stories');
// let story = document.querySelector('.story');

// // console.log(story)
// // console.log(stories)

// jsonimg.forEach((elem,index) => {
//     // console.log(elem)
//     stories.innerHTML +=  `<img src="${elem.dp}" alt="${index}"/>`;
// });

// stories.addEventListener("click",function(e){
//     // console.log(jsonimg[e.target.alt].profile)
//     story.style.backgroundImage = `url(${jsonimg[e.target.alt].profile})`
//     story.style.display = "initial"
//     // storie
//     setTimeout(() => {
//     story.style.display = "none"

//     }, 3000);
// })

// javascript.js
// const jsonimg = [
//     {
//         dp : 'https://images.unsplash.com/photo-1682695795931-a546abdb6733?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8',
//         profile : 'https://images.unsplash.com/photo-1708649290066-5f617003b93f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8'
//     },
//     {
//         dp : 'https://plus.unsplash.com/premium_photo-1705091981530-364352828985?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D',
//         profile : 'https://images.unsplash.com/photo-1710485886130-84811421b0dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D'
//     },
//     {
//         dp :'https://images.unsplash.com/photo-1710268503377-7fe212765db8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D',
//         profile : 'https://images.unsplash.com/photo-1710097092298-75d5c777a9bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D'
//     }
// ]

// let stories = document.querySelector('.stories');
// let story = document.querySelector('.story');

// // console.log(story)
// // console.log(stories)

// jsonimg.forEach((elem,index) => {
//     // console.log(elem)
//     stories.innerHTML +=  `<img src="${elem.dp}" alt="${index}"/>`;
// });

// stories.addEventListener("click",function(e){
//     // console.log(jsonimg[e.target.alt].profile)
//     story.style.backgroundImage = `url(${jsonimg[e.target.alt].profile})`
//     story.style.display = "initial"
//     // storie
//     setTimeout(() => {
//     story.style.display = "none"

//     }, 3000);
// })



// ---------------------------------- GSAP--------------------------------------------

// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="./style.css">
// </head>

// <body>
//     <div id="box">

//     </div>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
//         integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg=="
//         crossorigin="anonymous" referrerpolicy="no-referrer"></script>
//     <script src="./javacs.js"></script>
// </body>

// </html>


// js code 
// gsap.from("#box",{
//     x:500,
//     delay : 1,
//     duration : 2,
//     rotate:360
// })


// Code 2 
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="./style.css">
// </head>

// <body>
//    <h1>My name is Piyush</h1>
//    <h1>Oriental College of Technology</h1>
//    <h1>Raisen Road, Bhopal</h1>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
//         integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg=="
//         crossorigin="anonymous" referrerpolicy="no-referrer"></script>
//     <script src="./javacs.js"></script>
// </body>

// </html>

// JS code 

// gsap.from("h1",{
//     y:100,
//     delay : 1,
//     duration : 2,
//     opacity :0,
//     stagger :1 -> Staggar ek ke bd ek element ko show krne ke liye use hota h 
// })




//-------------------------------- Scroll Trigger -------------------------

// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="./style.css">
// </head>

// <body>
//     <div id="page1">
//         <div id="box"></div>
//     </div>
//     <div id="page2">
//         <div id="box"></div>
//     </div>
//     <div id="page3">
//         <div id="box"></div>
//     </div>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
//         integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg=="
//         crossorigin="anonymous" referrerpolicy="no-referrer"></script>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
//         integrity="sha512-onMTRKJBKz8M1TnqqDuGBlowlH0ohFzMXYRNebz+yOcc5TQr/zAKsthzhuv0hiyUKEiQEQXEynnXCvNTOk50dg=="
//         crossorigin="anonymous" referrerpolicy="no-referrer"></script>
//     <script src="./javacs.js"></script>
// </body>

// </html>


// * {
//     padding: 0;
//     margin: 0;
//     box-sizing: border-box;
// }


// html,
// body {
//     height: 100%;
//     width: 100%;
//     font-family: gilroy;
// }

// #page1{
//     height: 100%;
//     width: 100%;
//     background-color: blue;
//     display: flex;
//     align-items: center;
//     justify-content:center;
// }

// #page2{
//     height: 100%;
//     width: 100%;
//     background-color: antiquewhite;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// }

// #page3{
//     height: 100%;
//     width: 100%;
//     background-color: chartreuse;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// }

// #box{
//     height: 400px;
//     width: 400px;
//     background-color: red;
// }


// // JavaScript 
// gsap.from("#page1 #box", {
//     scale: 0,
//     delay: 1,
//     duration: 2,
//     rotate: 360
// })

// gsap.from("#page2 #box", {
//     scale: 0,
//     duration: 2,
//     rotate: 360,
//     scrollTrigger: {
//         trigger: "#page2 #box",
//         scroller: "body",
//         markers: true,
//         start: "top 70%",
//         scrub: 2//We can give it the number ranging between 1 to 5 or true , the number represents the smooths of an animation

//     }
// })




// ---------------------------Another Task ----------------------------
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="./style.css">
// </head>
// <body>
//     <div id="page1"></div>
//     <div id="page2">
//         <h1>Piyush&nbsp;Panchabhai</h1>
//     </div>
//     <div id="page3"></div>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" integrity="sha512-onMTRKJBKz8M1TnqqDuGBlowlH0ohFzMXYRNebz+yOcc5TQr/zAKsthzhuv0hiyUKEiQEQXEynnXCvNTOk50dg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
//     <script src="./javacs.js"></script>
// </body>
// </html>



// * {
//     padding: 0;
//     margin: 0;
//     box-sizing: border-box;

// }

// html,
// body {
//     overflow-x: hidden;
//     height: 100%;
//     width: 100%;
//     font-family: gilroy;
//     background-color: black;
// }

// #page1 {
//     height: 100vh;
//     width: 100vw;
// }

// #page2 {
//     height: 100vh;
//     width: 100vw;
//     background-color: skyblue;
// }

// #page3 {
//     height: 100vh;
//     width: 100vw;
// }

// #page2>h1 {
//     font-size: 42vw;
//     font-weight: 900;
//     text-transform: uppercase;
//     /* transform: translateX(-405%); */
// }

// ----------------------- JavaScript ------------------------------------


// gsap.to("#page2 >h1",{
//     transform: "translateX(-405%)",
//     scrollTrigger:{
//         trigger : "#page2",
//         scroller : "body",
//         // markers : true,
//         // start : "top 0%",
//         // end: "top -80%",
//         scrub:2,
//         pin:true
//     }
// })



// ----------------------------------Locomotive JS ----------------------------------------
// @ A note that we cannot give height and width to the main container 
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.css">
//     <link rel="stylesheet" href="./style.css">
// </head>

// <body>
//     <div id="main">
//         <div id="page1"></div>
//         <div id="page2" data-scroll-container>
//             <div class="box" data-scroll data-scroll-speed="-1"></div>
//             <div class="box"></div>
//         </div>
//         <div id="page3"></div>
//     </div>
//     <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js"></script>
//     <script src="./javacs.js"></script>
// </body>

// </html>



// * {
//     padding: 0;
//     margin: 0;
//     box-sizing: border-box;
// }

// html,
// body {
//     height: 100%;
//     width: 100%;
// }

// #page1 {
//     height: 100vh;
//     width: 100vw;
//     background-color: red;
// }


// #page2 {
//     height: 100vh;
//     width: 100vw;
//     background-color: rgb(192, 201, 192);
//     display: flex;
//     align-items: center;
//     justify-content: space-evenly;
// }

// #page3 {
//     height: 100vh;
//     width: 100vw;
//     background-color: aqua;
// }

// .box{
//     height: 400px;
//     width: 400px;
//     background-color: royalblue;
// }

//JavaScript Code

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });



//call apply and bind

// const userdetails = {
//     name: "Piyush Panchabhai",
//     age : "21",
//     personaldetails : function(){
//         console.log(this.name);
//     }
// }

// const userdetails2 = { 

//      name: "Manish Shrivastava",
//     age : "21",
// }


// userdetails.personaldetails.call(userdetails2);
// console.log(userdetails);
// userdetails.personaldetails();


// Another method 
// const userdetails = {
//     name: "Piyush Panchabhai",
//     age : "21",
   
// }

//   function personaldetails(){
//         console.log(this.name);
//     }

// const userdetails2 = { 

//      name: "Manish Shrivastava",
//     age : "21",
// }


// personaldetails.call(userdetails);
