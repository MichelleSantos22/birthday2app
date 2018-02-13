var button1 = document.getElementById('button1')
var button2 = document.getElementById('button2')





 var button3 = document.getElementById('button3')
        //days till birthday

        var today = new Date("2/13/18");
        var birthday = new Date("2/15/18");
        var days = Math.floor((birthday.getTime() - today.getTime()) / 86400000);
        document.write("Days until birthday: ", days, "</br>");



