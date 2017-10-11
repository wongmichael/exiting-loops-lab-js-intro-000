function breakOut(array,changeValue,stopValue){
  array.forEach((e)=>{
    if(e==stopValue){
      break
    }
    else{
      e=changeValue
    }
  });
  return array
}
function keepGoing(array,changeValue,skipValue){
  array.forEach((e)=>{e==skipValue?continue:changeValue})
  return array
}
function findBy(array,findFn){

}
