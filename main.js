function info() {
    var name = document.getElementById("name").value;

    var email = document.getElementById("email").value;

    var radio = document.getElementById("gridCheck").value;

    if (name !== " " && email !== " " && radio !== " ") {
        window.open("thankyou.html");
    } else {
        alert("You do not fill out the required information.");
        return false;
    }
}