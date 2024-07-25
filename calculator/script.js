const query=document.getElementById("query");
function appendtodisplay(input){
    query.value+=input;
}
function clearing(){
    query.value="";
}
function calculate(){
    try{
        query.value=eval(query.value);
    }
   catch(error){
    query.value="Error";
   }
}
