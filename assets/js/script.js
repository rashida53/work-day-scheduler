var currentDayEl = $('#currentDay');

currentDayEl.text(moment().format('dddd, MMMM Do'));
var currentHour = parseInt(moment().format('HH'));

var containerEl = $('.container');
var successEl = $('.success-message');

for (var i = 9; i < 18; i++) {
    var row = $('<div>');
    row.addClass('row time-block');
    var hourEl = $('<p>');
    hourEl.addClass('hour col-md-1');
    hourEl.attr("id", "hour" + i);
    if (i > 12) {
        hourEl.text((i - 12) + " pm");
    } else {
        if (i === 12) {
            hourEl.text(i + " pm");
        } else {
            hourEl.text(i + " am");
        }
    };
    var eventEl = $('<textarea>');
    eventEl.addClass('description col-md-10');
    eventEl.attr("id", "event" + i);
    var saveButton = $('<button>');
    saveButton.addClass('saveBtn btn col-md-1');
    var icon = $('<i>');
    icon.addClass('fas fa-save');
    saveButton.attr("id", "button" + i);
    saveButton.append(icon);
    row.append(hourEl, eventEl, saveButton);
    containerEl.append(row);
    checkHour(i);
    saveButton.on('click', saveEvent);
};

renderEvent();

function checkHour(hour) {
    var eventId = "#event" + hour;
    if (hour < currentHour) {
        $(eventId).addClass('past')
    } else if (hour === currentHour) {
        $(eventId).addClass('present')
    } else {
        $(eventId).addClass('future')
    }
};

function saveEvent() {

    var keyToSave = $(this).siblings('textarea').attr('id');
    var valueToSave = $(this).siblings('textarea').val();

    localStorage.setItem(keyToSave, valueToSave);

    var message = $('#successMessage');
    if (message.length === 0) {
        var displayEl = $('<p id=successMessage>');
        displayEl.text("Appointment added to ");
        var spanEl = $('<span id=spanText>');
        spanEl.text("local storage ");
        var spanEl2 = $('<span id=spanIcon>');
        spanEl2.text("✓");
        displayEl.append(spanEl, spanEl2);
        successEl.append(displayEl);
    };

};

function renderEvent() {
    $('textarea').each(function () {
        var keyToDisplay = $(this).attr('id');
        var valueToDisplay = localStorage.getItem(keyToDisplay);
        $(this).text(valueToDisplay);
    });
};
