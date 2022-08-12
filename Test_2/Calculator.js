var result = "";

function check(num){
    Audio();
    //------------------------------------------------------------------------
    var isflag = true;
    
    if(document.getElementById("display").value == "" && num == "0"){
       isflag = false;
    }
    if(isflag){
        document.getElementById("display").value += num;
        isflag = true;
    }
    //-----------------------------------------------------------
    
    var firstcase = Number(document.getElementById('display').value.replaceAll(',',""));
    document.getElementById('display').value = firstcase.toLocaleString();
    
    //-----------------------------------------------------------------------------
}
function checkIndex(temp){
    
    result = Number(document.getElementById("display").value.replaceAll(',',''));
    
    if(document.getElementById("display").value != ""){
        if(temp == '+'){
            document.getElementById("topdisplay").value = result.toLocaleString() + "+";
            document.getElementById("display").value = "";
        }
        else if(temp == '-'){
            document.getElementById("topdisplay").value = result.toLocaleString() + "-";
            document.getElementById("display").value = "";
        }
        else if(temp == '*'){
            document.getElementById("topdisplay").value = result.toLocaleString() + "*";
            document.getElementById("display").value = "";
        }
        else if(temp == '/'){
            document.getElementById("topdisplay").value = result.toLocaleString() + "/";
            document.getElementById("display").value = "";
        }
    }else if(temp == '-'){
        document.getElementById("display").value += "-";
    }
    else if(temp == '+'){
        document.getElementById("display").value += "+";
    }
}

function Audio(){
    var audio = document.getElementById("mp");
    audio.load();
    audio.play();
}

function Tresult(){
    let query1 = document.getElementById("topdisplay").value.replaceAll(',','');
    let query2 = document.getElementById("display").value.replaceAll(',','');
    let query = query1 + "(" +query2 + ")";
    document.getElementById("topdisplay").value = eval(query);
    document.getElementById("display").value = '';
    
    if(Number(document.getElementById("topdisplay").value) >= 0){
        document.getElementById('display').style.backgroundColor = '#4CAF50';
        document.getElementById('topdisplay').style.backgroundColor = '#4CAF50';
    }   
    else{
        document.getElementById('display').style.backgroundColor = '#F44336';
        document.getElementById('topdisplay').style.backgroundColor = '#F44336';
    }
    let secendcase = Number(document.getElementById('topdisplay').value);
    document.getElementById('topdisplay').value = secendcase.toLocaleString();
}