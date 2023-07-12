function add(){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    var s = (n1+n2)
    document.getElementById("add").innerHTML=s;
}
function sub(){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    var s = (n1-n2)
    document.getElementById("sub").innerHTML=s;
}
function mul(){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    var s = (n1*n2)
    document.getElementById("mul").innerHTML=s;
}
function div(){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    var s = (n1/n2)
    document.getElementById("div").innerHTML=s;
}