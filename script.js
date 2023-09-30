const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

document.getElementById("audio").addEventListener(
  "playing",
  function () {
    sleep(200).then(() => {
      document
        .getElementById("random-fact-image")
        .setAttribute("src", "res\\swing.gif");
    });
  },
  false
);
