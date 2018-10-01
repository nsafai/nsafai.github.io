var interval = setInterval(myTimer, 1500);
const arrayOfSubtitles = [
    "web development",
    "LED programming",
    "home automation",
    "product management",
    "science fiction",
    "getting things done",
    "soccer",
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
