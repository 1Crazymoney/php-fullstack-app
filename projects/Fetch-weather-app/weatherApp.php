<?php
session_start();
include("../../include/database.php");

// Checks if the user is logged in. Otherwise, redirect him to the login page.

if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
  header("Location: ../../login/login.php");
  exit;
}
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fetch Weather App ❄🌨</title>
    <link
      href="https://db.onlinewebfonts.com/c/a7e3822358f6dcb2f986a68cf24721b2?family=MV+Boli+V1"
      rel="stylesheet"
    />
    <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="../../css/style.css" />
    <script
      src="../../dist/projects/fetch-weather-app/script.js"
      defer
    ></script>
  </head>

  <body
    class="weatherDayImg flex items-center justify-between flex-col MV-boli flex-wrap text-black gap-0 m-1 min-w-80"
  >
    <h1
      class="flex items-center justify-center flex-wrap text-6xl mb-0 gap-0 m-0"
    >
      <span id="spanTittle" class="text-center">Weather App</span>
      <div class="flex items-center justify-center flex-row">
        <img src="icons/titleIcons/snow.svg" class="size-[4.5rem]" />

        <img src="icons/titleIcons/tornado.svg" class="size-[4.5rem]" />

        <img
          src="icons/titleIcons/clear-day.svg"
          class="size-[4.5rem]"
          id="sunOrMoon"
        />
      </div>
    </h1>
    <form
      action=""
      method="post"
      id="weatherForm"
      class="mt-1 flex items-center justify-center flex-wrap gap-4"
    >
      <input
        type="text"
        placeholder="Enter a city..."
        id="cityEntered"
        required
        class="text-black bg-slate-300 text-lg rounded-lg border-2 outline-none border-pink-950 text-center p-1 MV-boli min-w-36 w-56 max-w-80"
      />
      <input
        type="submit"
        value="Submit"
        class="outline-none text-lg bg-black rounded-lg p-1 MV-boli text-white cursor-pointer hover:scale-110 border-black border-2 active:bg-slate-900 active:outline active:outline-white active:outline-2"
        id="submitButton"
      />
    </form>

    <div
      id="card"
      class="hidden mt-8 items-center justify-center flex-col mb-8"
    >
      <div
        id="cityDisplay"
        class="font-bold text-2xl gap-3text-center flex items-center justify-center flex-row mb-2"
      >
        <img
          src="../fetch-weather-app/icons/cardIcons/marker.png"
          alt="Location"
          class="h-5"
          id="marker"
        />
        <p id="cityText" class="text-center"></p>
        <p id="countryText"></p>
      </div>

      <div class="flex w-full justify-center items-center" id="tempDisplay">
        <img
          src="./icons/cardIcons/thermometer.svg"
          alt="Thermometer icon"
          class="size-10"
          id="tempIcon"
        />
        <p class="text-center w-5/6 text-xl" id="temperatureText"></p>
      </div>

      <div
        class="flex items-center justify-center flex-row w-full"
        id="feelsLikeDisplay"
      >
        <img
          src="./icons/cardIcons/thermometer.svg"
          alt="Thermometer icon"
          class="size-10"
          id="feelsIcon"
        />
        <p class="text-center w-5/6 text-xl" id="temperatureFlText"></p>
      </div>

      <div
        class="flex items-center justify-center flex-row w-full"
        id="humidityDisplay"
      >
        <img
          src="./icons/cardIcons/humidity.svg"
          alt="Humidity icon"
          class="size-10"
          id="humidityIcon"
        />
        <p class="text-center w-5/6 text-xl" id="humidityText"></p>
      </div>

      <div class="flex items-center justify-center flex-col w-full" id="windDisplay">
        <div class="flex items-center justify-center w-full">
          <img
            src="./icons/cardIcons/wind.svg"
            alt="wind Icon"
            class="size-10"
            id="windIcon"
          />
          <div id="windDeg" class="text-center w-5/6 text-xl"></div>
        </div>
        <div class="flex items-center justify-center w-full">
          <img
            src="./icons/cardIcons/windsock.svg"
            alt="Wind Speed Icon"
            class="size-10"
            id="speedIcon"
          />

          <div id="windSpeed" class="text-center w-5/6 text-xl"></div>
        </div>
      </div>

      <div
        class="flex items-center justify-center flex-row max-h-10 font-bold gap-0 w-full"
        id="descriptionDisplay"
      >
        <img src="" alt="Weather icon" class="size-12" id="weatherIcon" />
        <p class="text-right w-5/12 text-2xl" id="descriptionText"></p>
      </div>

      <div
        class="flex items-center justify-center flex-row gap-2 flex-wrap invisible h-14"
        id="locationDateDisplay"
      >
        A date of the place depending of your timezone with all...
      </div>
    </div>
    <p
      id="errorDisplay"
      class="hidden flew-wrap flex-col items-center justify-center gap-4 text-center MV-boli text-xl text-red-600 mt-20 mb-20"
    ></p>
  </body>
</html>
<?php
include("../../include/footer.php");
?>
