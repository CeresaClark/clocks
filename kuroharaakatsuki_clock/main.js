
function startTime() {
    let today = new Date();
    let mon = today.getMonth() + 1,
        dd = today.getDate(),
        week = today.getDay(),
        hh = today.getHours(),
        mm = today.getMinutes();
    let W, M

    hh = String(hh).padStart(2, '0')
    mm = String(mm).padStart(2, '0')


    switch (mon) {
        case 1:
            M = 'JAN';
            break;
        case 2:
            M = 'FEB';
            break;
        case 3:
            M = 'MAR';
            break;
        case 4:
            M = 'APR';
            break;
        case 5:
            M = 'MAY';
            break;
        case 6:
            M = 'JUN';
            break;
        case 7:
            M = 'JUL';
            break;
        case 8:
            M = 'AUG';
            break;
        case 9:
            M = 'SEP';
            break;
        case 10:
            M = 'OCT';
            break;
        case 11:
            M = 'NOV';
            break;
        case 12:
            M = 'DEC';
            break;
    }

    switch (week) {
        case 1:
            W = 'Mon'
            break;
        case 2:
            W = 'Tue'
            break;
        case 3:
            W = 'Wed'
            break;
        case 4:
            W = 'Thu'
            break;
        case 5:
            W = 'Fri'
            break;
        case 6:
            W = 'Sat'
            break;
        case 0:
            W = 'Sun'
            break;

        default:
            break;
    }


    $('.day').html(M + ' ' + dd + ' ' + W);
    $('.hour').html(hh);
    $('.min').html(mm);
    var timeoutId = setTimeout(startTime, 1000);
}

function blink() {
    let b = document.getElementById('blink'), c = 1;
    setInterval(function () {
        b.style.opacity = (b.style.opacity == '0' ? '1' : '0');
    }, 1000);
}

startTime()
blink()
