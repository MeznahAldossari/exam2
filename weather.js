let url =
  "https://api.openweathermap.org/data/2.5/weather?q=Riyadh&appid=09c37bc38189a4c402acc7a8148dcb34";

async function weather() {
  let res = await fetch(url);
  let data = await res.json();
  let div = document.getElementById("weatherCard");
  let div1 = document.createElement("div");
  div1.classList.add("newDiv");

  let h2 = document.createElement("h2");
  h2.innerText = data.name;
  //   h2.innerText = "hello";
  div1.append(h2);

  let div2 = document.createElement("div");
  let h3 = document.createElement("h3");
  h3.innerText = "humidity: ";
  //   div2.append(h3);

  let span = document.createElement("span");
  span.innerText = `${data.main.humidity}`;
  console.log(data.main.humidity);
  h3.append(span);

  div2.append(h3);

  let h32 = document.createElement("h3");
  h32.innerText = "Temp: ";

  let span2 = document.createElement("span");
  span2.innerText = `${data.main.temp}`;
  console.log(data.main.temp);
  h32.append(span2);
  div2.append(h32);

  let h321 = document.createElement("h3");
  h321.innerText = "Coord Lon";

  let span21 = document.createElement("span");
  //   span21.innerText = data.coord.lon;
  span21.innerText = ` ${data.coord.lon}`;
  h321.append(span21);
  div2.append(h321);

  let h3212 = document.createElement("h3");
  h3212.innerText = "Coord Lat";

  let span211 = document.createElement("span");
  span211.innerText = `${data.coord.lat}`;
  h3212.append(span211);
  div2.append(h3212);

  //   div2.append(h3212);
  //   console.log(data.main.coord.lon);

  //   let h3212 = document.createElement("h3");
  //   h3212.innerText = "Coord Lat";

  //   let span211 = document.createElement("span");
  //   span211.innerText = `${data.main.temp.coord.lat}`;
  //   h3212.append(span211);
  //   div2.append(h3212);
  //   console.log(data.main.coord.lon);
  //=====================================

  //   let h32 = document.createElement("h3");
  //   h32.innerText = "Temp";
  //   div2.append(h32);

  //   let span2 = document.createElement("span");
  //   span2.innerText = `${data.main.temp}`;
  //   console.log(data.main.temp);
  //   div2.append(span2);

  //   let h321 = document.createElement("h3");
  //   h321.innerText = "Temp";
  //   div2.append(h321);

  //   let span21 = document.createElement("span");
  //   span21.innerText = `${data.main.temp.coord.lon}`;
  //   console.log(data.main.coord.lon);
  //   div2.append(span21);

  //   let h3212 = document.createElement("h3");
  //   h3212.innerText = "Temp";
  //   div2.append(h3212);

  //   let span211 = document.createElement("span");
  //   span211.innerText = `${data.main.temp.coord.lat}`;
  //   console.log(data.main.coord.lon);

  div.append(div1);
  div.append(div2);

  //   let div1 = document.createElement("div");
  //   div1.classList.add("newDiv");

  //   //   console.log(data["name"]);

  //   console.log(data["name"]);

  //   let h2 = document.createElement("h2");
  //   h2.innerText = `${data.name}`;

  //   div1.append(h2);

  //   let div2 = document.createElement("div");
  //   let h3 = document.createElement("h3");
  //   h3.innerText = "humidity";
  //   div2.append(h3);

  //   let span = document.createElement("span");
  //   span.innerText = `${data.main.humidity}`;
  //   console.log(data.main.humidity);
  //   div2.append(span);

  //   let h32 = document.createElement("h3");
  //   h32.innerText = "Temp";
  //   div2.append(h32);

  //   let span2 = document.createElement("span");
  //   span2.innerText = `${data.main.temp}`;
  //   console.log(data.main.temp);
  //   div2.append(span2);

  //   let h321 = document.createElement("h3");
  //   h321.innerText = "Temp";
  //   div2.append(h321);

  //   let span21 = document.createElement("span");
  //   span21.innerText = `${data.main.temp.coord.lon}`;
  //   console.log(data.main.coord.lon);
  //   div2.append(span21);

  //   let h3212 = document.createElement("h3");
  //   h3212.innerText = "Temp";
  //   div2.append(h3212);

  //   let span211 = document.createElement("span");
  //   span211.innerText = `${data.main.temp.coord.lat}`;
  //   console.log(data.main.coord.lon);

  //   div2.append(span211);
  //   div.append(div1);
  //   div.appendChild(div2);
}

weather();
