var interval = setInterval(myTimer, 2000);
const arrayOfSubtitles = [
    "creative problem solving",
    "Web Development",
    "building things",
    "Science Fiction",
    "getting things done",
    "LED programming",
    "Soccer",
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
