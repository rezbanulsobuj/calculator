function getinput() {
    const firstinput = document.getElementById('firstinput')
    const firstuser = firstinput.value;
    const firstfield = parseFloat(firstuser);
    return firstfield;
}
function getsecond() {
    const secondinput = document.getElementById('secondinput')
    const seconduser = secondinput.value;
    const secondfield = parseFloat(seconduser)
    return secondfield;
}
function totalresult(input, isadd, firstfield, secondfield) {
    const resultinput = document.getElementById(input)
    if (isadd == 'sumation') {
        resultinput.value = firstfield + secondfield;
    }
    else if (isadd == 'substraction') {
        resultinput.value = firstfield - secondfield;
    }
    else if (isadd == 'divition') {
        resultinput.value = firstfield / secondfield;
    }
    else if (isadd == 'multi') {
        resultinput.value = firstfield * secondfield;
    }
    else if (isadd == 'modulas') {
        resultinput.value = firstfield % secondfield;
    }

}

document.getElementById('sumbtn').addEventListener('click', function () {
    const finput = getinput()
    const sinput = getsecond();
    totalresult('result', 'sumation', finput, sinput)

})
document.getElementById('subbtn').addEventListener('click', function () {
    const finput = getinput()
    const sinput = getsecond();
    totalresult('result', 'substraction', finput, sinput)

})
document.getElementById('divbtn').addEventListener('click', function () {
    const finput = getinput()
    const sinput = getsecond();
    totalresult('result', 'divition', finput, sinput)

})
document.getElementById('mulbtn').addEventListener('click', function () {
    const finput = getinput()
    const sinput = getsecond();
    totalresult('result', 'multi', finput, sinput)

})
document.getElementById('modbtn').addEventListener('click', function () {
    const finput = getinput()
    const sinput = getsecond();
    totalresult('result', 'modulas', finput, sinput)

})
document.getElementById('delbtn').addEventListener('click', function () {
    firstinput.value = '';
    secondinput.value = '';
    const resultinput = document.getElementById('result')
    resultinput.value = '';

})