function breakOut(array,changeValue,stopValue){
  array.forEach((e)=>{e==stopValue?break:changeValue})
  return array
}
function keepGoing(array,changeValue,skipValue){
  array.forEach((e)=>{e==skipValue?continue:changeValue})
  return array
}
function findBy(array,findFn){

}
