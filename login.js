let url = "https://665736969f970b3b36c8658a.mockapi.io/form";

async function login() {
  let username = document.getElementById("username");
  let password = document.getElementById("password");
  let btn = document.getElementById("signup");
  p5 = document.getElementById("p5");

  if (username.value && password.value) {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);

    let checkUsername = data.find((e) => e.username === username.value);
    let checkpassword = data.find((e) => e.password === password.value);
    console.log(checkUsername);
    console.log(checkpassword);
    if (checkUsername && checkpassword) {
      window.location.href = "home.html";
    }
  } else {
    p5.innerText = "Please Fill All Fields";
  }
}
