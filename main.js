let url = "https://665736969f970b3b36c8658a.mockapi.io/form";

async function signU() {
  let names = document.getElementById("name");
  let username = document.getElementById("username");
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  let p1 = document.getElementById("p1");
  let p2 = document.getElementById("p2");
  let p3 = document.getElementById("p3");
  let p4 = document.getElementById("p4");
  let p5 = document.getElementById("p5");

  let bnt = document.getElementById("link1");

  let checkName = /^[a-zA-Z]{3,}$/;
  let checkUserame = /^(?=.*?[A-Z]).*$/;
  let checkEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let heckPass = /^[0-9]{5,}$/;

  //   let testName = checkName.test(names.value);
  //   let testUserName = checkName.test(username.value);
  //   let testEmail = checkName.test(email.value);
  //   let testPass = checkName.test(password.value);

  if (
    names.value !== "" &&
    username.value !== "" &&
    email.value !== "" &&
    password.value !== ""
  ) {
    p1.innerText = "";
    p2.innerText = "";
    p3.innerText = "";
    p4.innerText = "";
    p5.innerText = "";
    let testName = checkName.test(names.value);
    let testUserName = checkUserame.test(username.value);
    let testEmail = checkEmail.test(email.value);
    let testPass = heckPass.test(password.value);

    if (!testName) {
      p1.style.color = "red";
      p1.innerText = "The Name should be contains at leaset 4 characters";
    }
    if (!testUserName) {
      p2.style.color = "red";
      p2.innerText =
        "The Username should be contains at leaset one Capital letter";
    }
    if (!testEmail) {
      p3.style.color = "red";
      p3.innerText = "The Email should be contains @";
    }
    if (!testPass) {
      p4.style.color = "red";
      p4.innerText = "The Password should be contains at leaset 5 Numbers";
    }
    if (testPass && testEmail && testName && testUserName) {
      let res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          name: names.value,
          username: username.value,
          email: email.value,
          password: password.value,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      let data = await res.json();
      console.log(data);
      window.location.href = "./login.html";
    }
  } else {
    p5.style.color = "red";
    p5.innerText = "Please Fill All Fields";
  }
}
