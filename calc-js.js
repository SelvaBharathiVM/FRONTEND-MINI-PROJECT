function displayval(val)
{
    document.getElementById("display").value=document.getElementById("display").value+val;
}

function cleardisplay(){
    document.getElementById("display").value="";
}
function calculate(){
   let a= document.getElementById("display").value;
   let result=eval(a);
   document.getElementById("display").value=result;
}