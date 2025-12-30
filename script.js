const $doinner = document.querySelectorAll(".do-inner");
$doinner.forEach(inner => {
    inner.addEventListener('click', function() {
        const targetID = this.getAttribute('id');
        if (targetID & Number(targetID)) {
            window.location.href = `${targetID}/${targetID}.html`;
        }
    });
});