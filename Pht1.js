var button = document.getElementById('button');
button.addEventListener('click', () => {
    document.getElementById('output').textContent = age()
});

function age() {
    var present = new Date(),
        inputdate = document.getElementById('textbox').value,
        birthdate = new Date(inputdate),
        age = Math.floor((present - birthdate) / (365 * 24 * 60 * 60 * 1000));
    return "You age is" + age
}

function getDayUntilBirthday() {

}
