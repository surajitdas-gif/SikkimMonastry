// let selectedRole = "student";


// document.addEventListener('DOMContentLoaded', () => {
//     selectRole('student');
// });

// function selectRole(role) {
//   selectedRole = role;
  
//   const fullnameField = document.getElementById("fullname");
//   const emailField = document.getElementById("email");
//   const usernameField = document.getElementById("username");
//   const submitButton = document.querySelector(".submit-btn");
//   const socialLogin = document.querySelector(".social-login");
//   const signUpLink = document.querySelector(".footer-links span");

//   document.querySelectorAll(".role-btn").forEach(btn => {
//     btn.classList.remove("active");
//   });
  
//   document.querySelector(`.role-btn[onclick="selectRole('${role}')"]`).classList.add("active");

//   if (role === 'admin') {
//     fullnameField.style.display = 'none';
//     emailField.style.display = 'none';
//     usernameField.style.display = 'block';
//     submitButton.textContent = 'Log In';
//     document.querySelector('.subtitle').textContent = 'Welcome, Admin! Please log in to continue.';
//     socialLogin.style.display = 'none';
//     signUpLink.style.display = 'none';
//   } else {
//     fullnameField.style.display = 'none';
//     emailField.style.display = 'block';
//     usernameField.style.display = 'none';
//     submitButton.textContent = 'Log In';
//     document.querySelector('.subtitle').textContent = 'Welcome back! Please select your role to continue.';
//     socialLogin.style.display = 'block';
//     signUpLink.style.display = 'block';
//   }
// }

// document.getElementById("loginForm").addEventListener("submit", async function(e) {
//   e.preventDefault();
//   const password = document.getElementById("password").value;

//   let payload = {};
//   let apiUrl = "http://localhost:5000/api/auth/login"; 

//   if (selectedRole === 'admin') {
//     const username = document.getElementById("username").value;
//     payload = { username, password };
//   } else {
//     const email = document.getElementById("email").value;
//     payload = { email, password };
//   }

//   try {
//     const response = await fetch(apiUrl, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//       credentials: "include"
//     });

//     const data = await response.json();

//     if (!response.ok) {
//       alert(data.message || "Login failed");
//       return;
//     }

//     if (selectedRole === 'admin') {
//       window.location.href = "/admin.html";
//     } else if (selectedRole === 'researcher') {
//       window.location.href = "/researcher.html";
//     } else if (selectedRole === 'tourist') {
//       window.location.href = "/touristdash.html";
//     } else {
//       window.location.href = "/"; 
//     }

//   } catch (err) {
//     console.error(err);
//     alert("Something went wrong during login.");
//   }
// });
let selectedRole = "tourist"; // default role

document.addEventListener('DOMContentLoaded', () => {
    selectRole('tourist'); // match HTML role buttons
});

function selectRole(role) {
  selectedRole = role;

  const fullnameField = document.getElementById("fullname");
  const emailField = document.getElementById("email");
  const usernameField = document.getElementById("username");
  const submitButton = document.querySelector(".submit-btn");
  const socialLogin = document.querySelector(".social-login");
  const signUpLink = document.querySelector(".footer-links span");

  // Reset active class
  document.querySelectorAll(".role-btn").forEach(btn => {
    btn.classList.remove("active");
  });
  
  document.querySelector(`.role-btn[onclick="selectRole('${role}')"]`).classList.add("active");

  if (role === 'admin') {
    fullnameField.style.display = 'none';
    emailField.style.display = 'none';
    usernameField.style.display = 'block';
    submitButton.textContent = 'Log In';
    document.querySelector('.subtitle').textContent = 'Welcome, Admin! Please log in to continue.';
    socialLogin.style.display = 'none';
    signUpLink.style.display = 'none';
  } else if (role === 'researcher') {
    fullnameField.style.display = 'block';
    emailField.style.display = 'block';
    usernameField.style.display = 'block';
    submitButton.textContent = 'Log In';
    document.querySelector('.subtitle').textContent = 'Welcome back, Researcher!';
    socialLogin.style.display = 'block';
    signUpLink.style.display = 'block';
  } else { // tourist
    fullnameField.style.display = 'none';
    emailField.style.display = 'block';
    usernameField.style.display = 'none';
    submitButton.textContent = 'Log In';
    document.querySelector('.subtitle').textContent = 'Welcome back! Please select your role to continue.';
    socialLogin.style.display = 'block';
    signUpLink.style.display = 'block';
  }
}

document.getElementById("loginForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const password = document.getElementById("password").value;

  let payload = {};
  let apiUrl = "http://localhost:5000/api/auth/login"; 

  if (selectedRole === 'admin') {
    const username = document.getElementById("username").value;
    payload = { username, password };
  } else if (selectedRole === 'researcher') {
    const email = document.getElementById("email").value;
    const fullname = document.getElementById("fullname").value;
    const username = document.getElementById("username").value;
    payload = { email, fullname, username, password };
  } else { // tourist
    const email = document.getElementById("email").value;
    payload = { email, password };
  }

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      credentials: "include" // important for cookies
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Login failed");
      return;
    }

    // Redirect based on role
    if (selectedRole === 'admin') {
      window.location.href = "/admin.html";
    } else if (selectedRole === 'researcher') {
      window.location.href = "/researcher.html";
    } else if (selectedRole === 'tourist') {
      window.location.href = "/touristdash.html";
    } else {
      window.location.href = "/"; 
    }

  } catch (err) {
    console.error(err);
    alert("Something went wrong during login.");
  }
});
