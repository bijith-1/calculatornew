var screen = document.getElementById('screen');
function btnclick(value){
    screen.value += value;

}
function btnclear(value){
    screen.value =" "
}
function btnresult(value)
{
    var result= eval(screen.value)
    screen.value=result;
}