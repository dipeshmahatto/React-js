const temperatureField = document.querySelector(".weather1");
const cityField = document.querySelector(".weather2 p");
const dateField = document.querySelector(".weather2 span");
const iconField = document.querySelector(".weather3 img");
const weatherField = document.querySelector(".weather3 span");
const form = document.querySelector("form");
const input = document.querySelector(".searchfield");

let target = "Kathmandu";

const fetchData = async (target) => {
  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=b52d52fbbbc441629fc24650240408&q=${target}`
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log(data); // Log the data to inspect its structure

    const {
      current: {
        temp_c,
        condition: { text, icon },
      },
      location: { name, localtime },
    } = data;

    temperatureField.innerHTML = `${temp_c}&deg;c`;
    cityField.innerHTML = name;
    iconField.src = icon;
    weatherField.innerHTML = text;
    const exactTime = localtime.split(" ")[1];
    const exactDate = localtime.split(" ")[0];

    const currentDay = new Date();
    let newDate = getTodaysDay(currentDay.getDay());

    dateField.innerHTML = `${exactTime} - ${newDate} ${exactDate}`;
  } catch (error) {
    console.error(error);
    alert("Failed to fetch weather data. Please try again later.");
  }
};

fetchData(target);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.trim() === "") {
    alert("Please enter your location");
  } else {
    target = input.value.trim();
    fetchData(target);
  }
});

function getTodaysDay(num) {
  switch (num) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Invalid day";
  }
}
