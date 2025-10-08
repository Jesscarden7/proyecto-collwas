// app.js - Maneja login y registro

const backendURL = "http://localhost:3000"; // Cambia si tu backend usa otro puerto

// ---- LOGIN ----
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("loginMessage");

    try {
      const response = await fetch(`${backendURL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        message.innerHTML = `<span class="text-green-600 font-medium">Inicio de sesión exitoso</span>`;
        // Simulamos login guardando usuario
        localStorage.setItem("user", JSON.stringify(data));
        setTimeout(() => {
          window.location.href = "dashboard.html"; // Redirigir al dashboard
        }, 1000);
      } else {
        message.innerHTML = `<span class="text-red-600">${
          data.message || "Credenciales incorrectas"
        }</span>`;
      }
    } catch (error) {
      console.error(error);
      message.innerHTML = `<span class="text-red-600">Error de conexión con el servidor</span>`;
    }
  });
}

// ---- REGISTRO ----
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("registerMessage");

    try {
      const response = await fetch(`${backendURL}/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        message.innerHTML = `<span class="text-green-600 font-medium">Registro exitoso. Redirigiendo...</span>`;
        setTimeout(() => {
          window.location.href = "index.html";
        }, 1000);
      } else {
        message.innerHTML = `<span class="text-red-600">${
          data.message || "Error al registrarse"
        }</span>`;
      }
    } catch (error) {
      console.error(error);
      message.innerHTML = `<span class="text-red-600">Error de conexión con el servidor</span>`;
    }
  });
}
