
function cut(){
    $("#outputRange").empty();
    var qrId = "";
    var qrLength = "";
    var qrValue = "";

    var step = 0;
    var inputString = $("#inputQRString").val();
    var inputStringLength = $("#inputQRString").val().length;
    var index = 1;

    while(step<inputStringLength){
        qrId = "";
        qrLength = "";
        qrValue = "";

        qrId = inputString.substring(step, step+2);
        step += 2;
        qrLength = parseInt(inputString.substring(step, step+2));
        step+=2;
        qrValue = inputString.substring(step,step+qrLength);
        step+=qrLength;
        
        $("#outputRange").append("<div class='form-row'><div class='col-md-1 mb-3'><input type='text' class='form-control' id='qrId"+index+"' value='"+qrId+"' disabled></div><div class='col-md-1 mb-3'><input type='text' class='form-control' id='qrLength"+index+"' value='"+qrLength+"' disabled></div><div class='col-md-10 mb-3'><input type='text' class='form-control' id='qrValue"+index+"' value='"+qrValue+"' disabled></div></div>");
        index +=1;
    }    
}