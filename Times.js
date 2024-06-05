let url =
  "https://api.aladhan.com/v1/hijriCalendarByCity/1437/4?city=Riyadh&country=SaudiArabia%20Kingdom&method=2";
async function times() {
  let res = await fetch(url);
  let data = await res.json();
  //   console.log(data.data);
  let data2 = data.data;
  let date = new Date();
  let formattedDate = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;
  console.log(formattedDate);

  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");
  let year = date.getFullYear();

  let full = `${day}-${month}-${year}`;
  console.log(typeof full);

  data.data.forEach((e) => {
    if (e.date === full) {
      console.log("hello");
    }
    // let dev = document.getElementById("card");
    // let h4 = document.createElement("h4");
    // let h5 = document.createElement("h5");
    // let span = document.createElement("span");
    // h4.innerText = e.timings;
    // h5.innerText = e.timings;
  });
}

times();

//   let checkUsername = data.find((e) => e.username === username.value);
//   let checkpassword = data.find((e) => e.password === password.value);
// ;
