
function formatTime( hour, minute, second, millisecond ) {
    return ( "0" + hour.toString() ).slice(-2) + ":" + ( "0" + minute.toString() ).slice(-2) + ":" + ( "0" + second.toString() ).slice(-2) + "." + ( "00" + millisecond.toString() ).slice(-3);
}

function formatDateTime( century, year, month, day, hour, minute, second, millisecond ) {
    var duration = "";

    if ( century > 0 ) {
        duration += ( duration.length > 0 ? ", " : "" ) + century.toString() + " siècle" + ( century > 1 ? "s" : "" );
    }

    if ( year > 0 ) {
        duration += ( duration.length > 0 ? ", " : "" ) + year.toString() + " an" + ( year > 1 ? "s" : "" );
    }

    if ( month > 0 ) {
        duration += ( duration.length > 0 ? ", " : "" ) + month.toString() + " mois";
    }

    if ( day > 0 ) {
        duration += ( duration.length > 0 ? ", " : "" ) + day.toString() + " jour" + ( day > 1 ? "s" : "" );
    }

    if ( hour > 0 ) {
        duration += ( duration.length > 0 ? ", " : "" ) + hour.toString() + " heure" + ( hour > 1 ? "s" : "" );
    }

    if ( minute > 0 ) {
        duration += ( duration.length > 0 ? ", " : "" ) + minute.toString() + " minute" + ( minute > 1 ? "s" : "" );
    }

    if ( second > 0 ) {
        duration += ( duration.length > 0 ? ", " : "" ) + second.toString() + " seconde" + ( second > 1 ? "s" : "" );
    }

    if ( millisecond > 0 ) {
        duration += ( duration.length > 0 ? ", " : "" ) + millisecond.toString() + " milliseconde" + ( millisecond > 1 ? "s" : "" );
    }

    return duration.replace(/,(?!.*,)/g, " et");
}

function whatDayInMonth( d ) {
    var dayInMonth = 0;

    switch( d.getMonth() + 1 ) {
        case 1 :
        case 3 :
        case 5 :
        case 7 :
        case 8 :
        case 10 :
        case 12 :
            dayInMonth = 31;
            break;

        case 2 :
            var whichYear = d.getFullYear();
            if ( ( whichYear % 100 ) == 0 ) {
                var leapYear = ( ( whichYear % 400 ) == 0 );
            } else {
                var leapYear = ( ( whichYear % 4 ) == 0 );
            }
            dayInMonth = 28;
            if( leapYear ) {
                dayInMonth = 29;
            }
            break;

        case 4 :
        case 6 :
        case 9 :
        case 11 :
            dayInMonth = 30;
            break;
    }

    return dayInMonth;
}

function diffDate( d1, d2, endDateCalculation ) {

    var millisecondDiff = d2.getTime() - d1.getTime();

    var second = Math.floor( millisecondDiff / 1000 );
    var millisecondRemain = millisecondDiff % 1000;

    var minute = Math.floor( second / 60 );
    var secondRemain = second % 60;

    var hour = Math.floor( minute / 60 );
    var minuteRemain = minute % 60;

    var day = Math.floor( hour / 24 );
    var hourRemain = hour % 24;

    var month = 0;
    var dayRemain = 0;

    if ( endDateCalculation ) {
        var includeEndDate = 1;
    } else {
        var includeEndDate = 0;

    }
    var dayInMonth = whatDayInMonth( d1 );
    var beginDate = d1;
    for ( var d = 0; d < day + includeEndDate; d++ ) {
        beginDate.setDate( beginDate.getDate() + 1 );
        dayRemain++;
        if ( d >= dayInMonth ) {
            month++;
            dayRemain=0;
            dayInMonth += whatDayInMonth( beginDate );
        }
    }

    var year = Math.floor( month / 12 );
    var monthRemain = month % 12;

    var century = Math.floor( year / 100 );
    var yearRemain = year % 100;

    return formatDateTime( century, yearRemain, monthRemain, dayRemain, hourRemain, minuteRemain, secondRemain, millisecondRemain );
}
