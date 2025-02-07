// function  greet(name){
//     return  `hello,${name}`;
// }
// console.log(greet("nandini"));

// const greet=function(name){
//     return `hello, ${name}`;
// };
// console.log(greet("mrs nanduuuu"));
//    const greet= (name)=>`hello,${name}`;
//    console.log(greet("mrs nanduuuu"));
    // (function(){
    //     console.log("this runs righ away!")
    // })();
    // const greetFn=(name)=>{
    //     console.log(`hello,${name}!`);
    // }
    // function processName (callback){
    //     const name="mrs nandu";
    //     callback(name);
    // }
    // processName(greetFn);
    // let fruits=["apple","banana","mango"];
    // fruits.push("grapes");
    // fruits.forEach(fruit=>console.log(fruit));
    // fruits.pop();
    // fruits.shift("cherry");
    // let numbers=[1,2,3,4,5];
    // let squared=numbers.map(num=>num*num)
    //    let person={
    //     name:"nandini",
    //     age:20,
    //     greet:function(){
    //         return `hello,my name is nandini ${this.name}`;
    //     },
    //   };
    //   console.log(person.name);
    //   console.log(person.greet());
         const heading = document.getElementById("heading");
         const button = document.getElementById("button")
          button.addEventListener("click ",()=>{
           heading.textContent="Button Clicked!";
          heading.style.color="red";
         });
        