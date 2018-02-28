var button = document.getElementById('button');
button.addEventListener('click', () => {
    document.getElementById('output').textContent = age()
});

function getage() {
    var present = new Date(),
        inputdate = document.getElementById('textbox').value,
        birthdate = new Date(inputdate),
        age = Math.floor((present - birthdate) / (365 * 24 * 60 * 60 * 1000));
    return "Your age is " + getage
}

function getDayUntilBirthday() {
    var today = new Date(),
        nextyear = today.getYear + 1,
        birthdate = new Date(birthday),
        birthday = document.getElementById(textbox).value,
        nextbirthday = new Date(birthdate.setFullyYear(today.getFullYear()))
     return "There are" + getDayUntilBirthday
}
function checkFormat(){

}
