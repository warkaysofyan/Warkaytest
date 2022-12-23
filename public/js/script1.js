function move(e){
    let f1 = document.forms[0];
            $(`.f${e}`).css({"position":"relative"});
            $(`.f${e}`).animate({"left":"20px"},100);
            $(`.f${e}`).animate({"left":"0px"},100);
            document.getElementsByClassName(`f${e}`)[0].style.border="red 1px solid";
}



function valid1(){
    
    let isValid = false ; 
    let f1 = document.forms[0];
    let A = true;
    for(i=0 ; i<f1.length ;i++){
        if(f1[i].value == ""){
            A = false;
            move(i);
        }
    }
    
    let re1 = /[^a-z]/gi;
    
    let re2 = /\w+@{1}\w+\.{1}\w+/gm
    let re3 =/^(\d{10}||\+212\d{9})$/gm

    if(re1.test(f1[0].value)){
        A = false ;
        move(0);
    }
    if(re1.test(f1[1].value)){
        A = false ;
        move(1);
    }
    if(!re2.test(f1[2].value)){
        A = false ;
        move(2);
    }
    if(!re3.test(f1[3].value)){
        A = false ;
        move(3);
    }if(f1[4].value!=f1[5].value){
        A = false ;
        move(5);
    }

    
    return A;
}

document.forms[0][5].addEventListener("keyup",()=>{
    if(document.forms[0][5].value==document.forms[0][4].value){
        $(".f5").css({"color":"green"});
    }else if(document.forms[0][5].value.length >= document.forms[0][4].value.length){
        $(".f5").css({"color":"red"});
    }else{
        $(".f5").css({"color":"black"});
    }
})
