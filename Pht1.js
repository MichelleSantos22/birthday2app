var button = document.getElementById("button")
button.addEventListiner('click',() => {
document.getElementById("submit").textContent = age()
 });

function age(){
    var present = new Date()
    var inputdate = document.getElementById("button").value;
    var birthdate = new Date(birthdate);
    var age = math.floor((present - birthdate) / (365 * 24 * 60 * 60 * 1000));
    return "You age is" + age
}
