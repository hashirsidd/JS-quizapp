var q = 0;
var score = 0;
var que = [{
    question: "What is the capital city of Pakistan?",
    o1: "Karachi",
    o2: "Islamabad",
    o3: "Lahore",
    o4: "Quetta",
    a: "Islamabad"
},
{
    question: "What river valley was home to an ancient civilization in what is now known as the country of Pakistan?",
    o1: "Nile",
    o2: "Ganges",
    o3: "Indus",
    o4: "Khyber",
    a: "Indus"

}, {
    question: "Religion is an important part of life in Pakistan. What religion do most citizens of Pakistan practice?",
    o1: "Buddhism",
    o2: "Islam",
    o3: "Hinduism",
    o4: "Judaism",
    a: "Islam"

}, {
    question: "Where the biggest Salt Mine located in Pakistan?",
    o1: "Mangora",
    o2: "Rawalpindi",
    o3: "Islamabad",
    o4: "Jhelum",
    a: "Jhelum"

}, {
    question: "The most beautiful stone-Marble is extracted from Province?",
    o1: "Balochistan",
    o2: "Sindh",
    o3: "KPK",
    o4: "Punjab",
    a: "Balochistan",
}, {
    question: "Which city have the biggest Railway platform in Pakistan?",
    o1: "Rawalpindi",
    o2: "Rohri",
    o3: "Sukkhar",
    o4: "Rahim yar khan",
    a: "Rohri",
}, {
    question: "Where is the biggest coal mine in Pakistan?",
    o1: "Mangora",
    o2: "Quetta",
    o3: "Thar",
    o4: "Khwera",
    a: "Quetta",
}, {
    question: "K-2 the second highest mountain peak in the world,it is a part of what mountain range?",
    o1: "Hindu Kush",
    o2: "Pamir",
    o3: "Karakoram",
    o4: "Sulaiman",
    a: "Karakoram",
}];

var total = que.length;
function quizStart() {
    if (q != total) {
        document.getElementById("q-num").innerText = "Question " + (q + 1);
        document.getElementById('question').innerText = que[q].question;
        document.getElementById('ans1').innerText = que[q].o1;
        document.getElementById('ans2').innerText = que[q].o2;
        document.getElementById('ans3').innerText = que[q].o3;
        document.getElementById('ans4').innerText = que[q].o4;
        var options = document.getElementsByName('ans');
        options[0].value = que[q].o1;
        options[1].value = que[q].o2;
        options[2].value = que[q].o3;
        options[3].value = que[q].o4;
    }
    else{
        document.getElementById("que-sec").classList.add('d-none');
        document.getElementById("score").classList.remove('d-none');
        document.getElementById('result').innerText = "Your score is " + ((score/total)*100) + "%";
    }
    var wid = ((q) / total) * 100;
    document.getElementById('progress').style.width = wid + '%';

}

function check() {
    var ans;
    var options = document.getElementsByName('ans');
    for (i = 0; i < options.length; i++) {
        if (options[i].checked)
            ans = options[i].value;
        options[i].checked = false;
    }
    if (que[q].a == ans) {
        score++;
        console.log(score)
    }
    q++;
    quizStart();
}

