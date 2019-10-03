 
let careers = [];
let users = [];
let xmlhttp = new XMLHttpRequest();
let xmlhttp1 = new XMLHttpRequest();

xmlhttp.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
        careers = JSON.parse(this.responseText);
        console.log(careers);
    }
};
xmlhttp.open("GET", '../json/careers.json', true);
xmlhttp.send();



xmlhttp1.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
        users = JSON.parse(this.responseText);
        users.forEach(item => {
            document.write('Name: ' + item.name + '<br>');
            let careetTitle = careers.find(function(career) {
                return career.id == item.career_id
            });

            document.write('Career: ' + careetTitle.title + '<br>');
            document.write('------------------------------------------<br>');
        });
    }
};
xmlhttp1.open("GET", '../json/Users.json', true);
xmlhttp1.send();



