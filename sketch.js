var weight = [35,38,42,45,43,34,36,41,48,32];


function  average_weight(){
  sum = 0;
  for (var w=0; w<weight.length; w++) {
  
    sum = sum+weight[w];

  }

  var avg = sum/weight.length;
    console.log(avg);
}
function setup() {
  createCanvas(400,400);
average_weight()
}

function draw() 
{
  background(30);
}

 

