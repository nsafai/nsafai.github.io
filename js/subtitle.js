/* eslint-disable no-undef */
const arrayOfSubtitles = [
  'web development',
  'LED programming',
  'home automation',
  'science fiction',
  'getting things done',
  'indoor soccer',
  'design',
  'psychology',
  'crisp sound',
  'learning new things',
  'gaming',
];

let i = 0;

function myTimer() {
  // var d = new Date();
  if (i < arrayOfSubtitles.length) {
    document.getElementById('subtitle-span').innerHTML = arrayOfSubtitles[i];
    i += 1;
  } else {
    i = 0;
  }
}

setInterval(myTimer, 1250);
