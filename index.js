function takeANumber(line, name){
  line.push(name)
  console.log(`Welcome, ${name}. You are number ` + line.length + ` in line.`)
 return `Welcome, ${name}. You are number ` + line.length + ` in line.`
}

function nowServing(line){
  if (line.length === 0) {
    console.log("There is nobody waiting to be served!")
    return "There is nobody waiting to be served!"
  } else {
    var now = line[0]
    line.shift()
    console.log("Currently serving " + now + ".")
    return "Currently serving " + now + "."
  }
}

function currentLine(line){
  var i = line.length;
  var clone = line.slice(0)
  var current = [];
  var n = 0

  if (i === 0){
    console.log("The line is currently empty.")
    return "The line is currently empty."
  } else {
    for (n = 0; n <= i; n++){
      if (i === n){
        console.log("The line is currently:" + current)
        return "The line is currently:" + current
      } else {
        current.push(` ` + (n+1) + '. ' + clone[0])
        clone.shift()
        console.log(current)}
    }

console.log(current)
    for (var n = 0; n > i; n++){
      if (n === line.length){
        console.log(current)
        return current
      } else {
        current.push(n + '. ' + line[0])
        console.log(current)
        line.shift()
      }
    }
  }
}
var katzDeliLine = []

currentLine(katzDeliLine)

takeANumber(katzDeliLine, "Chris")

currentLine(katzDeliLine)

takeANumber(katzDeliLine, "Wilf")

nowServing(katzDeliLine)
