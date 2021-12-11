// TO DO
document.addEventListener("DOMContentLoaded", function (ha) {

  // const checkList = document.querySelectorAll('ul li');

  var checkList = document.querySelector('ul');
  const inputValue = document.querySelector('#input');

  checkList.addEventListener('click', function (event) {
      const checkedTarget = event.target;
      if (checkedTarget.classList.contains('checked') === false) {
        // console.log(event.currentTarget);
        checkedTarget.classList.add('checked');
      } else {
        checkedTarget.classList.remove('checked');
      };
    });

    checkList.addEventListener('click', function (remove) {
      const deletedTarget = remove.target;
      if (deletedTarget.classList.contains('close') === true) {
        deletedTarget.parentNode.remove();
        };
    });

    document.querySelector('#addBtn').addEventListener('click', function (add) {
      const newToDo = document.createElement('li');
      newToDo.innerText = inputValue.value.trim();
      checkList.insertAdjacentElement('afterbegin', newToDo);
      
      const newSpan = document.createElement('span');
      newToDo.insertAdjacentElement('afterbegin', newSpan);
      newSpan.className = "close";
      newSpan.innerText = "x";
    });

    document.querySelector('#input').addEventListener('keydown', function (press) {
      if (press.key === "Enter" && press.target.value.trim() !== "") {

      const newToDo = document.createElement('li');
      newToDo.innerText = inputValue.value.trim();
      checkList.insertAdjacentElement('afterbegin', newToDo);
      
      const newSpan = document.createElement('span');
      newToDo.insertAdjacentElement('afterbegin', newSpan);
      newSpan.className = "close";
      newSpan.innerText = "x";
    };
  });


  //Test
  // var checkList = document.querySelector('ul');

  // var allList = document.getElementsByClassName('close');

  // console.log(allList);

  // console.log(Object.keys(allList));

  // if(!localStorage.getItem('close')) {
  //   populateStorage();
  // } else {
  //   setList();
  // }
  
  // function populateStorage() {
  //   localStorage.setItem('close', document.getElementsByClassName('close').value);

  //   setList();
  // }


  // function setList() {
  //   var currentList = localStorage.getItem('close');

  //   document.getElementsByClassName('close').value = currentList;
  //   // console.log(Object.keys(currentList));
  // }

  // allList.onchange = populateStorage;


});