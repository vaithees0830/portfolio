
function actionMethod(event) {
    const aMethod = document.querySelectorAll('.actionMethod');

    aMethod.forEach(button => {
        button.classList.remove('active');
    });

    event.target.classList.add('active');

}