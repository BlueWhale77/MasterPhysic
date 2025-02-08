function GetElement (id,Class) {
    var boxTime = document.querySelector(id);
    var boxCout = boxTime.querySelector(Class);
    return [
        boxTime,
        boxCout,
    ];
};
function GetBoxButton(id) {
    var boxButton = document.querySelector(id);
    return boxButton;
};
// lấy các phần tử có trong bộ đếm
var boxSecond = GetElement("#block__second",".cout");
var boxMinute = GetElement("#block__minute",".cout");
var boxHours = GetElement("#block__hours",".cout");
// lấy các nút của đồng hồ
var Button_start = GetBoxButton("#start");
var Button_reset = GetBoxButton("#reset");
var Button_stop = GetBoxButton("#stop");

var IsEventActive = false;

// bắt đầu đếm giờ
Button_start.addEventListener("click", function () {
    
    
    if (IsEventActive) {
        // clearInterval(cout_time);

    } else {
        IsEventActive = true;
        //  đếm giờ của cái đồng hồ
        
        if (second > 0) {clearInterval(cout_time)};
        var second = Number(boxSecond[1].innerHTML);
        var minute = Number(boxMinute[1].innerHTML);
        var hours = Number(boxHours[1].innerHTML);
        cout_time = setInterval(function () {
            second += 1;
            boxSecond[1].innerHTML = second;
            if (second === 61) {
                minute += 1;
                boxMinute[1].innerHTML = minute;
                if (minute === 61) {
                    hours += 1;
                    boxHours[1].innerHTML = hours;
                    minute = 0;
                    boxMinute[1].innerHTML = minute;
                };
                second = 0;
                boxSecond[1].innerHTML = second;
            };
        }, 1000);
    
    };
    
    
}); 


// reset lại bộ đếm
Button_reset.addEventListener("click", function() {
    clearInterval(cout_time);
    IsEventActive = false
    boxSecond[1].innerHTML = 0;
    boxMinute[1].innerHTML = 0;
    boxHours[1].innerHTML = 0;
}); 

// button stop
Button_stop.addEventListener("click", function() {
    // if (Press_button) {
    //     var second = Number(boxSecond[1].innerHTML)
    //     var minute = Number(boxMinute[1].innerHTML)
    //     var hours = Number(boxHours[1].innerHTML)
    // }

    if (IsEventActive) {
        clearInterval(cout_time);
        IsEventActive = false;
    }

});

// test