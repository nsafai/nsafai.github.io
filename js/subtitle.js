var interval = setInterval(myTimer, 1250);
const arrayOfSubtitles = [
  "web development",
  "LED programming",
  "home automation",
  "science fiction",
  "getting things done",
  "indoor soccer",
  "beautiful design",
  "psychology",
  "crisp sound"
];

let i = 0;

function myTimer() {
  // var d = new Date();
  if (i < arrayOfSubtitles.length) {
    document.getElementById("subtitle-span").innerHTML = arrayOfSubtitles[i];
    i++;
  } else {
    i = 0;
  }
}
