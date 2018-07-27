const lorem=new Lorem(1);
lorem.getData()
.then(data=>{document.querySelector('.lorem-text').textContent=data;})
document.getElementById('button1').addEventListener('click',function(e){
  const inputfield=document.getElementById('page-request');
  lorem.chnageNum(inputfield.value);
  lorem.getData().then(data=>{document.querySelector('.lorem-text').textContent=data;})
  .then(err=>console.log(err));
  e.preventDefault();
})
document.getElementById('button2').addEventListener('click',function(e){
  let texts=document.querySelector('.lorem-text').textContent;
  const test=document.getElementById('test');
  test.value=texts;
  test.select();
  document.execCommand('copy');
  e.preventDefault();
});
