

function make_report_object(){
    var report_object = {
        "report_id":"",
        "event_name":"",
        "venue_name":"",
        "date":"",
        "time":"",
        "phone_number":"",
        "description":""
    }
    //for the report_id, we might just need to do document.getelemid method thing since not gonna be through form but random id number
    report_object.report_id = $("#").val();
    report_object.event_name = $("#event_report").val();
    report_object.venue_name = $("#venue_report").val();
    report_object.date = $("#").val();
    report_object.time = $("#").val();
    report_object.phone_number = $("#").val();
    report_object.description = $("#description_report").val();

    return report_object
}

//load the js after the html and css has loaded
$(document).ready(function(){

    //clear the previous session's information (remove to have persistent storage)
    //window.localStorage.clear();
    
    //make a json object to store on LocalStorage when submit button is clicked
    $("#confirm-yes").on("click", function(){
        // report_object = make_report_object();

        // //since LocalStorage only accepts name/val pairs, stringify json object 
        // string_report_object = JSON.stringify(report_object);

        // //store in localstorage (might wanna think clearly again about using report_id directly)
        // window.localStorage.setItem(String(report_object.report_id), string_report_object);
        // var publicPath = path.join(__dirname, 'public');
        // window.location.href="../task2_report/report_confirmation.html";
        console.log("successful call");
    })
    $('#confirm-no').click(function (eventObject) {
        $('#confirmation-popup').modal('hide');
    });

});