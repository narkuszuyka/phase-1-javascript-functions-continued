// code your solution here



 
  function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
  }
  
  function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
  }

let wrapAdjective = function(style="*"){
    return function(adjective="beautiful") {
        return `You are ${style}${adjective}${style}!`
    }
}
