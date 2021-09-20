function welcome(firstName, lastName) {
    let fullName = firstName.concat(" ", lastName);

    function displayFullName() {
        alert("Welcome".concat(" ", fullName, "!"));
    }
    displayFullName();
}
