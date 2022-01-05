//기본 파라미터, rest 파라미터
function myFunc1(name, weather = "raining", ...extraArgs) {
  console.log("Hello " + name + ".");
  console.log("It is " + weather + " today.");
  for (let i = 0; i < extraArgs.length; i++) {
    console.log("Extra Args: " + extraArgs[i]);
  }
}

myFunc1("Adam", "sunny", "one", "two", "three");

// 함수 파라미터 전달
function myFunc2(nameFunction) {
  return "Hello " + nameFunction() + ".";
}

function printName(nameFunction, printFunction) {
  printFunction(myFunc2(nameFunction));
}

printName(function () {
  return "Adam";
}, console.log);

//화살표 문법(람다식) 함수 파라미터 전달
const myFunc3 = (nameFunction) => "Hello " + nameFunction() + ".";
const printName2 = (nameFunction, printFunction) =>
  printFunction(myFunc3(nameFunction));

printName2(function () {
  return "Adam";
}, console.log);

//let, const
function messageFunction(name, weather) {
  let message = "Hello, Adam";
  if (weather === "sunny") {
    let message = "It is a nice day";
    console.log(message);
  } else {
    let message = "It is " + weather + " today";
    console.log(message);
  }
  console.log(message);
}

messageFunction("Adam", "raining");
