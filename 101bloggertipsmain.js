class Lorem{
  constructor(num){
    this.num=num;
  }
  chnageNum(num){
    this.num=num;
  }
  async getData(){
    let response=await fetch(`https://baconipsum.com/api/?type=meat-and-filler&paras=${this.num}`);
    let resData=await response.json();
 
    return resData;
  }
  
  
}
