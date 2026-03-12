
function startTime() {
    var today = new Date();
    var yy = today.getFullYear(),
        mon = today.getMonth() + 1,
        dd = today.getDate(),
        hh = today.getHours(),
        mm = today.getMinutes();

    dd = String(dd).padStart(2, '0')
    hh = String(hh).padStart(2, '0')
    mm = String(mm).padStart(2, '0')
    mon = String(mon).padStart(2, '0')



    $('.day,.dayB').html(yy + '.' + mon + '.' + dd);
    $('.hour').html(hh);
    $('.min').html(mm);
    var timeoutId = setTimeout(startTime, 1000);
}

startTime()
