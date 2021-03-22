/*
class Home {
    constructor () {
        this.inp1 = document.getElementById('inp1');
        this.inp2 = document.getElementById('inp2');
        this.inp3 = document.getElementById('inp3');
        this.text1 = document.getElementById('text1');
        this.text2 = document.getElementById('text2');
        this.text3 = document.getElementById('text3');
        this.bt1 = document.getElementById('btn1');
        this.element = document.getElementById('div');
        this.itemList = [];
        this.itemID = 0;
    }
   finish(){
       const div = document.createElement('div');
       div.innerHTML = ` 
       <div>
       <h1 id="text1">${this.inp1.value}</h1>
       <h1 id="text2">${this.inp2.value}</h1>
       <h1 id="text3">${this.inp3.value}</h1>
   </div>
       `
    this.element.appendChild(div);
   }
}
document.getElementById('btn1').addEventListener('click',function(){
    const ome = new Home();
    ome.finish();
}) */
class Home {
    constructor () {
        this.inp1 = document.getElementById('inp1');
        this.inp2 = document.getElementById('inp2');
        this.bt1 = document.getElementById('btn1');
        this.element = document.getElementById('myList');
    }
   finish(){
       const div = document.createElement('li');
       div.innerHTML = `
       <h1 id="text1">${this.inp1.value}</h1>
       <h1 id="text2">${this.inp2.value}</h1>
       <button type="button">edit</button>
       <button type="button" id="close">remove</button>
       `
      this.element.appendChild(div);
      this.inp1.value = "";
      this.inp2.value = "";
      div.addEventListener('click',function(){
        document.getElementById("myList").removeChild(div);
      })
    }
}
document.getElementById('btn1').addEventListener('click',function(){
    const ome = new Home();
    ome.finish();
})
// let container = document.getElementById('myList');
// container.addEventListener('click',(event)=>{
//     if(event.target.tagName === 'BUTTON'){
//         let button = event.target;
//         const li = button.parentNode;
//         const ul = li.parentNode;
//         if(button.textContent === 'remove'){
//             ul.removeChild(li);
//         }else if(button.textContent === 'edit'){
//             document.getElementById('inp1').value = document.getElementById('text1').innerText;
//             document.getElementById('inp2').value = document.getElementById('text2').innerText;
//             li.style.display = 'none';
//         }
//     }
// })
document.getElementById('btn2').addEventListener('click',function(){
    document.getElementById('container').style.display = 'block';
})
document.getElementById('icon').addEventListener('click',function(){
    document.getElementById('container').style.display = 'none';
})
// !hellow world
// * rhfjhjkehrfg