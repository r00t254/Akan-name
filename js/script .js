var MaleName = [" Kwasi", " Kwandwo", " Kwabena", " Kwaku", " Yaw", " Kofi", " Kwame"];
var FemaleName = [" Akosua", " Adwoa", " Abenaa", " Akua", " Yaa", " Afua", " Ama"];
function findDay() {
    var mm = parseInt(document.getElementById("month").value);
    var day = parseInt(document.getElementById("day").value);
    var gender = document.getElementById("gender").value;
    var year = document.getElementById("year").value;
    var yy = parseInt(year.substr(2, 4));
    var century = parseInt(year.substr(0, 2));
    var dayDate = Math.abs(parseInt(((century / 4) - 2 * century - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + day) % 7);
    if (year <= 0 || year == "" || year > 2020) {
        alert("enter valid year")
    } else
    if (mm <= 0 || mm > 12) {
        alert("enter valid month")
    } else
    if (day < 1 || day > 31) {
        alert("enter valid date")
    }
    if (gender === "male") {
        alert("your name is"  + maleName[dayDate])
    }
    else
    if (gender === "female") {
        alert("your name is"  + femaleName[dayDate])
    }
}









  