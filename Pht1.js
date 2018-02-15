var button1 = document.getElementById('button1')
button1.addEventListiner('click',() => {
document.getElementById("submit1").textContent = checkFormat();
 });
function age(){
    var present = new Date():
    var inputdate = document.getElementById('button1').value;
    var birthdate = new Date(birthdate);
    var age = math.floor((now - birthdate) / 31536000000);
    return "You are"+age+"years old"
}
