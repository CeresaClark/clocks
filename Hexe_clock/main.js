
function startTime() {
    var today = new Date();
    var yy = today.getFullYear(),
        mon = today.getMonth() + 1,
        dd = today.getDate(),
        ww = today.getDay(),
        hh = today.getHours(),
        mm = today.getMinutes(),
        ss = today.getSeconds(),
        M = '', W = '';

    dd = two_digits(dd);
    mm = two_digits(mm);
    mon = two_digits(mon);
    ss = two_digits(ss);

    switch (ww) {
        case 1:
            W = 'Mon';
            break;
        case 2:
            W = 'Tue';
            break;
        case 3:
            W = 'Wed';
            break;
        case 4:
            W = 'Thu';
            break;
        case 5:
            W = 'Fri';
            break;
        case 6:
            W = 'Sat';
            break;
        case 0:
            W = 'Sun';
            break;
    }

    am(hh)

    $('#yy').html(yy);
    $('#mon').html(mon);
    $('#dd').html(dd);
    $('#date').html(W);
    $('#min').html(mm);
    $('#sec').html(ss);
    var timeoutId = setTimeout(startTime, 1000);
}

function am(hour) {
    if(hour >= 12){
        hour -= 12
        hour = two_digits(hour);
        $('#hour').html(hour);
        $('#am').html("PM");
    }else{
        if(hour == 0){
            hour = 12
        }
        hour = two_digits(hour);
        $('#hour').html(hour);
        $('#am').html("AM");
    }
}

function two_digits(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function blink() {
    var b = document.getElementById('blink');
    setInterval(function () {
        b.style.opacity = (b.style.opacity == '0' ? '1' : '0');
    }, 1000);
}

startTime()
blink()
