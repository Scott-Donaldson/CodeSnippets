const states = require("./states.json")
strip = ["-",0,0,0,0,0,0,0,0,0,0,"-"]
let head = 1
let cycles = 100
let state = "A"
function printTape(tape,headPosition,cycle,action){
    let tapeOutput = ""
    for(let i = 0; i < tape.length; i++){
        if(headPosition == i) tapeOutput += `|<${tape[headPosition]}>`
        else tapeOutput += `| ${tape[i]} `
    }
    tapeOutput += `|     Cycle ${cycle}, State: ${state} | Actions: ${action}`
    console.log(tapeOutput)
}
function headAction(tape,headPosition,cycle){
    let currentValue = tape[headPosition]
    let stateInstructions = states[state]
    let instructions = stateInstructions[currentValue]
    tape[headPosition] = instructions.write
    if(instructions.move == "right") head++
    else head--
    state = instructions.state
    let action = `Write: ${instructions.write} | move${instructions.move}`
    printTape(tape,headPosition,cycle,action)
}
function turing(cycles){
    for(let i = 0; i < cycles; i++){
        headAction(strip,head,i)
    }
}
turing(cycles)
