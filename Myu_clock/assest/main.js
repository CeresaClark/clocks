startTime()

function startTime() {
    var today = new Date();
    var yy = today.getFullYear(),
        mon = today.getMonth() + 1,
        dd = today.getDate(),
        hh = today.getHours(),
        mm = today.getMinutes();

    hh = hh.toString().padStart(2, '0')
    mm = mm.toString().padStart(2, '0')
    yy = yy.toString().padStart(2, '0')
    mon = mon.toString().padStart(2, '0')
    dd = dd.toString().padStart(2, '0')


    $('#hr').html(hh);
    $('#min').html(mm);
    $('#year').html(yy);
    $('#mon').html(mon);
    $('#day').html(dd);
    var timeoutId = setTimeout(startTime, 1000);
}