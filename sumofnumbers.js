function sumFor(list){
  let total = 0;
  for(let i =0; i<list.length; i++){
    total += list[i];
  }
  return total;
}

function sumWhile(list){
  let total=0;
  let i =0;
  while(i<list.length){
    total += list[i];
    i++;
  }
  return total;
}

function sumRecursion(list){
  let i = list.length;
  let sum;
  if(i < 0){
    return sum;
  }
  i--;
  return sum + sumRecursion(list[i]);
}

function sumTheSimpleWay(list){
  return _.reduce(list, function(num, memo){return num+memo;});
}

let list = [1, 2, 3];
console.log(sumFor(list));
console.log(sumWhile(list));
console.log(sumRecursion(list));
console.log(sumTheSimpleWay(list));