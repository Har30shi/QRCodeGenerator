let source=null;
function qrgenerator(){
    var s=document.getElementById('no').value;
    var size=s+"x"+s
    var txt=document.getElementById('qr').value;
    if(s){
        if(s<30){
            msg.style.display='block';
            setTimeout(()=>{
                msg.style.display='none';
            },2000);
        }else{
            var link="https://api.qrserver.com/v1/create-qr-code/?size="+size+"&data="+txt;
            img.src=link;
            source=link;
        }
    }
    else{
        check.style.display='block';
        setTimeout(()=>{
            check.style.display='none';
        },2000);
    }
}
function download(){
    if(source){
        let fn=getFileName(source);
        saveAs(source,fn);
    }
    else{
        generate.style.display='block';
        setTimeout(()=>{
            generate.style.display='none';
        },2000)
    }
}
function getFileName(str){
    return str.substring(str.lastIndexOf('/')+1);
}