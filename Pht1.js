var button = document.getElementById('button');
button.addEventListener('click', () => {
    document.getElementById('output').textContent = age()
});

function getage() {
    var present = new Date(),
        inputdate = document.getElementById('textbox').value,
        birthdate = new Date(inputdate),
        age = Math.floor((present - birthdate) / (365 * 24 * 60 * 60 * 1000));
    return "Your age is " + age
}

//function getDayUntilBirthday() {
    //var today = new Date(),
        //nextyear = today.getYear + 1,
        //birthdate = new Date(birthday),
       // birthday = document.getElementById(textbox).value,
       // nextmiracle= new Date(birthdate.setFullyYear(today.getFullYear()))
    //if (today - nextmiracle > 0){
   //     var nextBday = nextmiracle.getFullYear(today.getFullYear())
  //  }
    // return "There are" + getDayUntilBirthday
}
function checkFormat(){
    var format = document.getElementById('button').value;
    var test1 = format.substring(2,3);
    var test2 = format.substring(6,7);
    var
    if (test1 = ("/") && test2 = ("/") && (format.length = 10)){
        return age
    } else{
        return "invalid input!!!!PLease use this format mm/dd/yyyy"
    }

}
