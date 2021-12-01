
var head =0,tail=0;
while(tail<=11 || head <= 11){
let flip = Math.floor((Math.random()*10)%2);
console.log(flip);
if(flip==0){
head+=1;
}
else {
    tail +=1;
}

if(head == 11){
    console.log("head wins");
    break;
}
else if(tail ==11){
console.log("tail wins");
break;
}

}
