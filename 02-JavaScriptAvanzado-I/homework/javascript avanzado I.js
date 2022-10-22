// x = 1; //
// var a = 5;
// var b = 10;
// var c = function (a, b, c) {
//   // a = 8 - b = 9 - c = 10
//   var x = 10;
//   console.log(x); //10
//   console.log(a); //8
//   var f = function (a, b, c) {
//     b = a;
//     console.log(b); //8
//     b = c;
//     var x = 5;
//   };
//   f(a, b, c);
//   console.log(b); //9
// };
// c(8, 9, 10);
// console.log(b); //10
// console.log(x); //1

//--------------------------------------------------------------
// var bar;
// baz = 2;

// console.log(bar); //undefined
// console.log(baz); //error
// foo();
// function foo() {
//   console.log("Hola!");
// } //hola //no corre más
// var bar = 1;

//-----------------------------------------------------------------
// var instructor = "Tony";
// if (true) {
//   var instructor = "Franco";
// }
// console.log(instructor); //franco //tony

//-----------------------------------------------------------------
// var instructor = "Tony";
// console.log(instructor); //tony
// (function() {
//    if(true) {
//       var instructor = "Franco";
//       console.log(instructor);//franco
//    }
// })();

// console.log(instructor); //tony
//-----------------------------------------------------------------
// var instructor = "Tony";
// let pm = "Franco";
// if (true) {
//   var instructor = "The Flash";
//   let pm = "Reverse Flash";
//   console.log(instructor); //the flash
//   console.log(pm); //reverse flash
// }
// console.log(instructor); // the flash
// console.log(pm); //franco
//-----------------------------------------------------------------

// 6 / "3" //2 --> 6 / 3 --> 2
// "2" * "3" //6 --> 2 * 3 = 6
// 4 + 5 + "px" // 9px //45px
// "$" + 4 + 5 // $4 + 5 = $45
// "4" - 2 // 4 - 2 = 2
// "4px" - 2 // error //NaN -->Not a Number --> esto no es un numero, lo siento
// 7 / 0 // infinity --> 0.0000000000000000001
// {}[0] // [0] node --> undefined
// parseInt("09") //9
// Number('09') //09 //9
// Number('09abc')//explota NaN
// parseInt("09abc") //9
// parseInt("abc09") //NaN //9
// 5 && 2 //2
// 2 && 5 // 5
// 5 && 2 && 6 && 0 && 7
// 5 && 2 && 0 //

// 0 && 2 && 4
// '' && 5 //' ' --> falsys
// 5 || 0 //5
// 0 || 5 //0 //5
// [3]+[3]-[10] //23 --> [3] --> '3' + '3' - [10] --> '33' - '10' --> 23
// 3>2>1 // false --> 3 > 2 --> true > 1 --> 1 > 1 --> false
// [] == ![] //true
// [] == false
// [] == 0
// "" == 0
// 0  == 0
// true
//-----------------------------------------------------------------
// function test() {
//     console.log(a);//undefined
//     console.log(foo());//2

//     var a = 1;
//     function foo() {
//        return 2;
//     }
//  }

//  test();

//---------------------------------------------------------------
// var snack = 'Meow Mix';

// function getFood(food) {
//     var snack;
//     if (food) {
//         let snack = 'Friskies';
//         console.log(snack)
//         return snack;
//     }
//     return snack;
// }
// console.log(snack)
// getFood(false); //undefined no da nada!!

var fullname = "Juan Perez";
var obj = {
  fullname: "Natalia Nerea",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname;
    },
  },
};

console.log(obj.prop.getFullname()); //aurelio de rosa

// var test = obj.prop.getFullname;
var test = function () {
  return this.fullname;
};

console.log(test()); //Juan Perez //undefined

//-----------------------------------------------
function printing() {
  console.log(1); //1432
  setTimeout(function () {
    console.log(2);
  }, 3000); //
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4); //
}

printing();
