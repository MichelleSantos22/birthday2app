var button1 = document.getElementById('enterYourBirthdate');

function getSign(date) {
        var sign = new Date(date);
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


function displaySign() {
    var input = document.getElementById('inputBirthdate').value;
    var result = getSign(input);
    document.getElementById('submit1').textContent = "Your sign is " + result + ".";
}

button1.addEventListener('click', displaySign);
