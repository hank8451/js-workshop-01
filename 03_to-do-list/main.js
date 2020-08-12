// TO DO

window.addEventListener('DOMContentLoaded', function(){
  // let liCheck = document.querySelectorAll('li');
  // let closeButton = document.querySelectorAll('.close');
  let addList = document.querySelector('#addBtn');
  let ulcheck = document.querySelector('ul');
  ulcheck.addEventListener('click', function(e){
    
    if (e.target.className == 'checked'){
      e.target.className = "";
    }else if (e.target.className == ''){
      e.target.className = "checked";
    }
    
    if (e.target.className === "close"){
      e.path[1].remove();
    }
    
  })

  addList.addEventListener('click', function(){
    let newLi = document.createElement('li')
    let newSpan = document.createElement('span');
    let lastLi = document.querySelector('li:last-child');
    // let liNumber = Number(lastLi.textContent.replace('x','')) + 1;
    let addPosition = document.querySelector('ul');
    let liText = document.querySelector('input').value;
    newSpan.className = 'close';
    newSpan.textContent = 'x';
    // newLi.textContent = `${liNumber}`
    newLi.textContent = `${liText}`
    newLi.setAttribute('draggable', 'true');
    newLi.appendChild(newSpan);
    addPosition.insertAdjacentElement('beforeend', newLi);

    document.querySelector('input').value = ""
  })
})