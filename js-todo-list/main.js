// TO DO
document.addEventListener("DOMContentLoaded", function (ha) {

  // const checkList = document.querySelectorAll('ul li');

  const checkList = document.querySelector('ul');
  const checkListLi = document.querySelector('li');
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

});