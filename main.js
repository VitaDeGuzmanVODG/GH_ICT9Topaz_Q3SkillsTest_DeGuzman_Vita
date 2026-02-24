// Function to preview uploaded image
    function previewimage(event) {
            let reader = new FileReader();

            reader.onload = function() {
                document.getElementById('preview').src = reader.result;
            }
       
            reader.readAsDataURL(event.target.files[0]);
        }


    // Javascript Function
function calculateYear() {
    // Variables & Data Types
    let Firstname = document.getElementById('fname').value; // string
    let Lastname = document.getElementById('lname').value; // string
    let Age = document.getElementById('age').value; // number

    // Operator
    let CurrentYear = new Date().getFullYear();
    let BirthYear = CurrentYear - Age;

    // Output Result
    document.getElementById('output').innerHTML =
    "Hello " + Firstname + " " + Lastname +
    "! You were likely born in " + BirthYear + ".";
}