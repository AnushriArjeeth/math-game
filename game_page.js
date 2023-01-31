function send()
{
    No1 = document.getElementById("No1").value;
    No2 = document.getElementById("No2").value;
    actual_answer = parseInt(No1) * parseInt(No2);

    question = "<h4>" + No1 + "X" + No2 + "</h4>";
input_box = "<br>Answer : <input type='text' id='input_check+box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>CHECK</button>"

div = question + input_box + check_button ;

document.getElementById("output").innerHTML=div;

document.getElementById("No1").value="";
document.getElementById("NO2").value="";

}

