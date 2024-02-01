let h1 = document.querySelector(".time");
let sec = document.querySelector("#seconds");
let set = document.querySelector(".sub");
let inp = document.querySelector(".inp");
let stopp = document.querySelector("#so");
let audio=document.querySelector("#myAudio");
let age = 0;
let ag1 = 0;
let count = 0;
let inter;
let min;

set.addEventListener('click', () => {
    clearInterval(inter);
    clearInterval(min);
    age = 0;
    ag1 = 0;
    count = 0;

    inter = setInterval(() => {
        age = age + 1;
        h1.innerHTML = age;

        if (age === Number(inp.value)) {
            clearInterval(inter);
            audio.play();
        }
    }, 60000);

    if (count !== Number(inp.value) * 60) {
        min = setInterval(() => {
            ag1 = ag1 + 1;
            count = count + 1;
            console.log(count);
            sec.innerHTML = ag1;

            if (count === Number(inp.value) * 60) {
                clearInterval(min);
                sec.innerHTML="00";
            }

            if (ag1 === 60) {
                ag1 = 0;
            }
        }, 1000);
    }
});

stopp.addEventListener('click', () => {
    clearInterval(inter);
    clearInterval(min);
});

