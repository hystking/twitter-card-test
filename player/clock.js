var date = new Date();
var offset = - date/1000 + date.getTimezoneOffset() * 60;
seconds2.style.WebkitAnimation = "countUp10 "+10+"s steps(10, end) "+offset+"s infinite";
seconds1.style.WebkitAnimation = "countUp6 "+60+"s steps(6, end) "+offset+"s infinite";
minutes2.style.WebkitAnimation = "countUp10 "+60*10+"s steps(10, end) "+offset+"s infinite";
minutes1.style.WebkitAnimation = "countUp6 "+60*60+"s steps(6, end) "+offset+"s infinite";
hours2.style.WebkitAnimation = "countUp24-2 "+3600*24+"s steps(24, end) "+offset+"s infinite";
hours1.style.WebkitAnimation = "countUp24-1 "+3600*24+"s linear "+offset+"s infinite";
