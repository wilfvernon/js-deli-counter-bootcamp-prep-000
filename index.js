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
<<<<<<< HEAD
  var clone = line.slice(0)
  var current = [];
  var n = 0
=======
  var current = [];
>>>>>>> b5570121716acdfeea73f1920dec1ab89218c9ce
  if (i === 0){
    console.log("The line is currently empty.")
    return "The line is currently empty."
  } else {
<<<<<<< HEAD
    for (n = 0; n <= i; n++){
      if (i === n){
        console.log("The line is currently:" + current)
        return "The line is currently:" + current
      } else {
        current.push(` ` + (n+1) + '. ' + clone[0])
        clone.shift()
        console.log(current)
=======
    console.log(current)
    for (var n = 0; n > i; n++){
      if (n === line.length){
        console.log(current)
        return current
      } else {
        current.push(n + '. ' + line[0])
        console.log(current)
        line.shift()
>>>>>>> b5570121716acdfeea73f1920dec1ab89218c9ce
      }
    }
  }
}
var katzDeliLine = ["Will", "Grace", "Johnny", "Mark"]
=======
var katzDeliLine = ["Will", "Grace", "Johnny"]

currentLine(katzDeliLine)

takeANumber(katzDeliLine, Chris)
