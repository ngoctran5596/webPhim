var t;
var myImg = document.getElementById("myImg");

function start() {
    t = setInterval(nextleft, 2000);
}

function nextleft() {
    var myImg = document.getElementById("myImg");
    var child = myImg.children[0];
    myImg.removeChild(child);
    myImg.appendChild(child);
    myImg.style.transition = "0.3 ease"

}

function drawBackgroud() {
    ufo_ct.clearRect(0, 0, 1550, 560);
}

//việc đầu tiên ta phải select cái cái canvas 
//vào trong html bằng dòng code
var bg = document.getElementById("backgroud");
//trong cavas việc vẽ vời trên giao diện của nó thì thông qua 
//một cái object đó là cái context và chúng ta phải lấy ra được cái 
//object này bằng dòng code getcontext của hàm canvas
var bg_ct = bg.getContext("2d");
//mọi việc thiết lập đã chuẩn bị xong
//vẽ đường thẳng khá là đơn giản các bạn sử dụng hàm lineto được cung cấp 
//sẵn trong context
var imgbg = new Image();
imgbg.onload = function() {
    bg_ct.drawImage(imgbg, 0, 0);
};
imgbg.src = "images/canvas.jpg";
//canvas2 vẽ ufo
var ufo = document.getElementById("ufo");
var ufo_ct = ufo.getContext('2d');
var ufo_img = new Image();

// xác định tọa độ vẽ ufo
var x = 0;
var y = 0;
// xác định chạy xong 1 đoạn sang đoạn khác
var endPath1 = false;
var endPath2 = false;
var endPath3 = false;
var endPath4 = false;
//lập hàm drawUfo lặp 50 milisecond
var t = setInterval(function() { drawUfo() }, 5);

function drawUfo() {
    drawBackgroud();
    ufo_img.src = 'images/maybaycanvas.png';
    ufo_ct.drawImage(ufo_img, x, y, 300, 100);

    if (endPath1 == true && endPath2 == false)
        path2();
    else if (endPath2 == true && endPath3 == false)
        path3();
    else if (endPath3 == true)
        window.clearInterval(t);
    else
        path1();
}

function path1() {
    x++;
    y = 2 * x;
    if (x == 200) {
        endPath1 = true;
    }
}

function path2() {
    x++;
    y = -1 * x + 600;
    if (x == 400) {
        endPath2 = true;
    }
}

function path3() {
    x++;
    y = 200;
    if (x == 1500) {
        endPath3 = true;
        bg.style.display = "none";
        ufo.style.display = "none";
        myImg.style.opacity = "1"
        start();
    }
}