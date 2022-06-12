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

function siteView() {
    var age = parseInt(prompt("What is your age?"));
    if (age >= 15) {
        alert("You are allowed to visit the website! :)");
    }
    if (age < 15) {
        parseInt(alert("You are not elgible to visit this website however, you will be elgible in " + (15 - age) + " " + "years!"));
		window.location.href = "https://tinyurl.com/y4dffd56";
    }
}