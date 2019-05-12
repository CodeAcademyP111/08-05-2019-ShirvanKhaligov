var tarix1 = new Date();
var tarix2 = new Date('05/11/2019');

var diffTime = Math.abs(tarix2.getTime() - tarix1.getTime());
var diffDays = Math.floor(diffTime / (1000 * 60 * 60* 24 )); 
diffDays<7&&diffDays>3?alert("bu hefte"):null;
console.log(diffDays)
if(diffDays<=7&&diffDays>=3){
    alert("bu hefte")
}else if(diffDays<3&&diffDays>=1){
    alert("saat-evvel")
}else if(diffDays<1){
    alert("saat evvel")

}else{
    alert("deq once")
}

if (diffDays<2&&diffDays>1){
    alert("gun evvel")
}

alert(diffDays);