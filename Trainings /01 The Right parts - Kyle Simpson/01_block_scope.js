function foo(x,y) {
  //. we use var temp inside if because we want to keep the scope of temp only inside IF block
  if(x > y) {
    var temp = x;
    x = y;
    y = temp;
  }


 //. we use var i inside for loop because we want to keep the scope of 'i' only inside for block
  for ( var i=0; i < 10; i++ ){
    // 
  }
}

// Exercise 1

function foo(x,y) {
  for(var i = 0; i < 10; i++) {
    $("#btn"+i).click(function() {
      console.log("button "+ i + " clicked!");
    });
  }
}
// output -  10 time 10 


function foo(x,y) {
  for(let i = 0; i < 10; i++) {
    $("#btn"+i).click(function() {
      console.log("button "+ i + " clicked!");
    });
  }
}
// output - 0,1,2,3,4,5,6,7,8,,9 
