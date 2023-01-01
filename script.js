function fanaction(status){
if(status=="on"){
//    document.getElementById("img").style.backgroundColor=red;
//   let a=document.getElementById("move");
// //   a.style.background='red'
// a.style.Image='notStable.gif'
document.getElementById("move").src=status+".gif"
  console.log("on");

}

else{
    // document.getElementById("move").src=status+"stable.jpg";
    // document.getElementById('img').style.backgroundColor=yellow;
    // let a=document.getElementById("move");
    // a.style.Image='stable.jpg'
    document.getElementById("move").src=status+".jpg"
    console.log("off");
}
}
