var div = document.getElementById("location");
var khuon = document.getElementById("map-canvas");
function fill() {
    window.onload = layViTri();
}
var map;
// Lấy vị trí người dùng bằng phương thức getCurrentPosition
function layViTri() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(hienThiViTri);
    } else {
        alert("Không hỗ trợ vị trí địa lý");
    }
}

// Hàm này được API định vị không đồng bộ bởi API định vị địa lý HTML5.
function hienThiViTri(position) {
    // Các giá trị vĩ độ và kinh độ thu được từ API HTML 5.
    var viDo = position.coords.latitude;
    var kinhDo = position.coords.longitude;

    // Tạo một đối tượng mới để sử dụng các giá trị vĩ độ và kinh độ với bản đồ Google.
    //tao ban do
    var latLng = new google.maps.LatLng(viDo, kinhDo);

    showMap(latLng); //show len ban do
    createMarker(latLng); //tao dau icon tren man hinh.
    //ngoài ra còn có Polyline : chuỗi các đường thẳng trên bản đồ..vân vân và vân vân.
    //Chi tiết : http://www.w3schools.com/googleAPI/google_maps_overlays.asp

    // Đồng thời đặt giá trị vĩ độ và kinh độ trong div khác.
    var div = document.getElementById("location");
    div.innerHTML = "Bạn đang ở vị trí có Vĩ độ là: " + viDo + ", Kinh độ: " + kinhDo;
}

function showMap(latLng) {
    // Thiết lập các tùy chọn bản đồ như mức thu phóng, loại bản đồ.
    var mapOptions = {
        //Tam ban do, quy dinh boi kinh do va vi do
        center: latLng,
        //set default zoom cua ban do khi duoc load
        zoom: 18,
        //Dinh nghia type
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    //Truyen tham so cho cac thuoc tinh Map cho the div chua Map
    map = new google.maps.Map(khuon, mapOptions);
}

function createMarker(latLng) {
    // Thiết lập đối tượng đánh dấu để đánh dấu vị trí trên khung vẽ bản đồ.
    var markerOptions = {
        //bắt buộc, quy định tọa độ LatLng của điểm được đánh dấu. (ở đây là tọa độ của biến latLng)
        position: latLng,
        title: 'nhà ngọc', //hiện tên khi hover chuột vào 
        map: map,
        //  icon: '1.png',
        draggable: true, //co the di den dia diem khac
        animation: google.maps.Animation.BOUNCE, //animation: cách thức chuyển động của icon của điểm đánh dấu.
        //  CÓ 2 cách: DRAG(đứng yên), Bounce(dao động theo quỹ đạo lên - xuống).
        clickable: true
    }
    var marker = new google.maps.Marker(markerOptions);

    var content = "Vị trí của bạn là" + latLng.lat() + ", " + latLng.lng();
    themHienThiChoMarker(marker, latLng, content);

}
//show đaonj text cho marker
function themHienThiChoMarker(marker, latLng, content) {
    var infoWindowOptions = {
        content: content,
        position: latLng
    };
    //xác định vị trí mở infowindow

    var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
    // Một số đối tượng trong Maps API được thiết kế để đáp ứng với sự kiện người sử dụng chẳng hạn như các sự kiện
    // từ chuột hoặc bàn phím.Một đối tượng google.maps.
    // Marker có thể lắng nghe người sử dụng các sự kiện sau đây: click, dblclick, mouseup, mousedown, mouseover, mouseout.
    //bắt sự kiện click marker
    google.maps.event.addListener(marker, "click", function () {
        //mở infowindow
        infoWindow.open(map);
    });
}  // Lưu ý rằng bản đồ đã được khai báo trên toàn trang web
  