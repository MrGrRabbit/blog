
const imgPic = document.getElementById('image1');
let i = 0;
const arrayImg = ["img/flower.jpg", "img/flowers.jpg", "img/coffe.jpg" ];
const smen = setInterval(()=>{
    if (i < arrayImg.length-1) {
      cicl(i);
      i++}
    else{
     arrayImg.revers;
     i = 0;
     cicl(i);
     i++
    }

	}, 5000);



function cicl (i){
  while (i <= arrayImg.length-1) {
    imgPic.src = arrayImg[i];
  }
}
