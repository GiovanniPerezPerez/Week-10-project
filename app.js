function askName() {
    var name = promt("enter your name")
    return name
}

function temp() {
    var question = prompt("what is the tempurature")
    return question
}


function ctof(x) {
    var cf = ((x * 9) / 5) +32
    return cf
}

function ftoc() {
    var fc = ((x - 32) * 5) - 9
    return cf
}

function greeting(a) {
    alert(`welcome back, ${a}.`)
}


greeting(askname())


