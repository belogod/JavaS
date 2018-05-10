var
    day = "",
    text = "",

    i = 1,
    arrNotes = [],
    form = document.dwsForm;




function btnClick() {
    day = form.days.value;
    text = form.message.value;
    day+= " :",

    arrNotes.push("<ul>" + "<li>" +"Заметка на: " + day.bold() + "<br>"+ text + "<hr></li>" + "</ul>");
    i++;
    form.reset();
}


function prClick() {
    document.getElementById('diary').innerHTML="<table>" + arrNotes.join('') + "</table>";
}


