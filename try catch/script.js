// try {
//     adlert("Welcome guest!");
//   }
//   catch(err) {
//     console.log(err.message)
//   }



function myFunction() {
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    try {
      if(x == "") throw "empty";
      if(isNaN(x)) throw "not a number";
      x = Number(x);
      if(x < 5) throw "too low";
      if(x > 10) throw "too high";
      if(x>5 && x<10) throw "ok"
    }
    catch(err) {
      message.innerHTML = "Input is " + err;
    }
  }