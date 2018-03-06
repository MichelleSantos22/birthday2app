var button = document.getElementById('enterYourBirthdate');
button.addEventListener('click', processBirthday);

function processBirthday() {

    var inputdate = document.getElementById('inputBirthdate').value;

    if (checkFormat(inputdate) == false) {
        document.getElementById("result").textContent = "Invalid input!!!!PLease use this format mm/dd/yyyy";
    } else {
        var birthdate = new Date(inputdate);
        var age = getAge(birthdate);
        var sign = getSign(birthdate);
        var countdown = getDayUntilBirthday(birthdate);
        document.getElementById("result").textContent = "You are " + age + " years old, your sign is " + sign + ", and there are " + countdown + " days until your birthday."
    }

}

function getAge(birthdate) {
    var present = new Date();
    age = Math.floor((present - birthdate) / (365 * 24 * 60 * 60 * 1000));
    return age;
}

function getSign(birthdate) {
    var sign = birthdate;
    if ((sign.getMonth() === 0 && sign.getDate() > 19) || (sign.getMonth() === 1 && sign.getDate() < 19)) {
        return "Aquarius";
    } else if ((sign.getMonth() === 1 && sign.getDate() > 18) || (sign.getMonth() === 2 && sign.getDate() < 21)) {
        return "Pisces";
    } else if ((sign.getMonth() === 2 && sign.getDate() > 20) || (sign.getMonth() === 3 && sign.getDate() < 20)) {
        return "Aries";
    } else if ((sign.getMonth() === 3 && sign.getDate() > 19) || (sign.getMonth() === 4 && sign.getDate() < 21)) {
        return "Taurus";
    } else if ((sign.getMonth() === 4 && sign.getDate() > 20) || (sign.getMonth() === 5 && sign.getDate() < 21)) {
        return "Gemini";
    } else if ((sign.getMonth() === 5 && sign.getDate() > 20) || (sign.getMonth() === 6 && sign.getDate() < 23)) {
        return "Cancer";
    } else if ((sign.getMonth() === 6 && sign.getDate() > 22) || (sign.getMonth() === 7 && sign.getDate() < 23)) {
        return "Leo";
    } else if ((sign.getMonth() === 7 && sign.getDate() > 22) || (sign.getMonth() === 8 && sign.getDate() < 23)) {
        return "Virgo";
    } else if ((sign.getMonth() === 8 && sign.getDate() > 22) || (sign.getMonth() === 9 && sign.getDate() < 23)) {
        return "Libra";
    } else if ((sign.getMonth() === 9 && sign.getDate() > 22) || (sign.getMonth() === 10 && sign.getDate() < 22)) {
        return "Scorpio";
    } else if ((sign.getMonth() === 10 && sign.getDate() > 21) || (sign.getMonth() === 11 && sign.getDate() < 22)) {
        return "Sagittarius";
    } else if ((sign.getMonth() === 11 && sign.getDate() > 21) || (sign.getMonth() === 0 && sign.getDate() < 20)) {
        return "Capricorn";
    }
}

function getDayUntilBirthday(birthdate) {
    var today = new Date();
    var nextyear = today.getYear + 1;
    var nextBirthday = new Date(birthdate.setFullYear(today.getFullYear()));

    if (today - nextBirthday > 0) {
        nextBirthday = nextBirthday.setFullYear(today.getFullYear() + 1)
    }
    var dayUntilNextBirthday = Math.ceil((nextBirthday - today) / (24 * 60 * 60 * 1000))
    return dayUntilNextBirthday
}

function checkFormat() {
    var format = document.getElementById('inputBirthdate').value;
    var test1 = format.substring(2, 3);
    var test2 = format.substring(5, 6);
    if ((test1 == "/") && (test2 == "/") && (format.length = 10)) {
        return true;
    } else {
        return false;
    }
}
