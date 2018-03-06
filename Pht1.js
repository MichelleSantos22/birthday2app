var button = document.getElementById('enterYourBirthdate');
button.addEventListener('click', () => {
    document.getElementById('submit1').textContent = checkFormat()
});

function getage() {
    var present = new Date(),
        inputdate = document.getElementById('inputBirthdate').value,
        birthdate = new Date(inputdate),
        age = Math.floor((present - birthdate) / (365 * 24 * 60 * 60 * 1000));
    return "Your age is " + age
}

function checkFormat(){
    var format = document.getElementById('inputBirthdate').value;
    var test1 = format.substring(2,3);
    var test2 = format.substring(5,6);
    if ((test1 == "/") && (test2 == "/") && (format.length = 10)){
        return getage();
    } else{
       return "invalid input!!!!PLease use this format mm/dd/yyyy"
    }
}
