document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    // You can handle form submission here, like sending data to server
    // For demonstration, let's just display the submitted data
    var formData = new FormData(this);
    var data = {};
    formData.forEach(function (value, key) {
        data[key] = value;
    });
    console.log(data); // Log submitted data
    alert("Form submitted!"); // Alert message (you can replace this with any other action)
});