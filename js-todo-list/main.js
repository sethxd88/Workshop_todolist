// TO DO
document.addEventListener("DOMContentLoaded", function () {

  const checkList = document.querySelector('.ul_wrapper');

  // console.log(checkList);
  // console.log(checkBox.item);

    checkList.addEventListener('click', function (event) {
      const target = event.target;
      if (target.classList.contains('checked') === false) {
        // console.log(event.currentTarget);
        target.classList.add('checked');
      } else {
        target.classList.remove('checked');
      };
    });
	});