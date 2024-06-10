function showSubmittedData() {
  const fullName = document.getElementById("full-name").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const dob = document.getElementById("dob").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const profilePicture = document.getElementById("profile-picture").files[0];
  const country = document.getElementById("country").value;
  const bio = document.getElementById("bio").value;
  const terms = document.getElementById("terms").checked;

  console.log("Full Name:", fullName);
  console.log("Username:", username);
  console.log("Password:", password);
  console.log("Confirm Password:", confirmPassword);
  console.log("Email:", email);
  console.log("Phone:", phone);
  console.log("Date of Birth:", dob);
  console.log("Gender:", gender);

  console.log("Country:", country);
  console.log("Bio:", bio);
  console.log("Terms and Conditions:", terms);
}
