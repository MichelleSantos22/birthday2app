var button = document.getElementById("11/07/1999")


function getDayUntilBirthday(input) {
    var today = new Date();
      var nextyear = today.getYear + 1;
     var birthdate = new Date(birthday);
    var birthday = document.getElementById("birthdayinput").value;
    var nextBirthday = new Date(birthdate.setFullYear(today.getFullYear()));

    if (today - nextbirthday > 0) {
        var nextbirthday = nextbirthday.setFullYear(today.getFullYear() + 1)
    }
    var dayuntilnextbirthday = Math.ceil((nextbirthday - today) / (24 * 60 * 60 * 1000))
    return dayuntilnextbirthday
}







