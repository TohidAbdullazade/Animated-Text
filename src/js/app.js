let changedText =  document.querySelector('#secondText');

const textLoad = ()=>{
setTimeout(()=>{
  changedText.textContent="This Is Text 1"
},0)
setTimeout(()=>{
  changedText.textContent="This is Text 2 "
},4000)
setTimeout(()=>{
  changedText.textContent="This is Text 3"
},8000)
}
textLoad()
setInterval(textLoad,12000)






