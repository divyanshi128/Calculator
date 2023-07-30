
const input= document.querySelector('input');
const buttons=document.querySelectorAll('button');
const click= new Audio('click-button.mp3');
var elem = document.querySelector('body');

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { 
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { 
    elem.msRequestFullscreen();
  }
}

document.addEventListener('dblclick',()=>{
    openFullscreen();
})


let arr=[];
for(let button of buttons){
    button.addEventListener('click',function(event){
        click.play();
        let button_value= event.target.innerText
        arr.push(`${button_value}`)
        // console.log(arr)
        if(button_value==='C'){
            input.value= '';
        }
        else if(button_value===''){
            let len=input.value.length;
            input.value= input.value.substring(0, len-1);
                
        }

        else if(button_value==='='){
            try{
                input.value=input.value.replaceAll('×','*')
                input.value= eval(input.value);
            }
            catch(e){
                input.value= 'Error!!';
            }
        }
        else{
            let currIndex=arr.lastIndexOf(`${button_value}`)
            if(arr[currIndex-1]!=='='){
                input.value+=button_value;
            }
                
            
            else{
                input.value=button_value
            }
        }
    })
}










