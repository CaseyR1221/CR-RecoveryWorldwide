let form = document.getElementById("form");
let email = document.getElementById("emailInput").value;
let errorEl = document.getElementById("errorMessage");

form.addEventListener("submit", (e) => {
    let email = document.getElementById("emailInput").value;

    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if (email.match(re)) {
		alert("Successfully signed up");
		return true;
	}
    else {
        e.preventDefault()
        alert("Email is not valid! Please enter a valid email address to proceed.");
        return false;
    }
})
