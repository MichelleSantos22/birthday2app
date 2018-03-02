var button = document.getElementById("button ")

function getDayUntilBirthday() {
    var today = new Date(),
        nextyear = today.getYear + 1,
        birthdate = new Date(birthday),
        birthday = document.getElementById(textbox).value,
        nextbirthday = new Date(birthdate.setFullyYear(today.getFullYear()))
     return "There are" + getDayUntilBirthday
