// TO DO
document.addEventListener("DOMContentLoaded", function (ha) {

  const checkList = document.querySelector('.ul_wrapper');

  const removeList = document.querySelector('span.close');

  // console.log(removeList);

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
  });