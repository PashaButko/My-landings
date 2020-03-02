window.onload = drop;

function play () {
    var video = document.getElementById("video");
    video.onplay = getPlay;
    video.onpause = getPause;
}

function getPlay() {
    alert("РЕКЛАМНАЯ ПАУЗА");
}

function getPause() {
    alert("РЕКЛАМНАЯ ПАУЗА , ага опять азино...");
}


function drop() {
    var dropItem = document.getElementsByTagName("p");
    for (var i = 0;i < dropItem.length ; i++){
        dropItem[i].ondragstart = dropDiv;
    }
}

function dropDiv(){
    alert("Опути");
}

