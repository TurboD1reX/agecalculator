function calculating() {
    var data = document.getElementById('date').value;
    if (data != "") {
        var answer = document.querySelector('.answer');
        var currentDate = new Date();
        var dateFromInput = new Date(data);
            let diffInYears =  currentDate.getFullYear() - dateFromInput.getFullYear();
            let diffInMonths = currentDate.getMonth()  - dateFromInput.getMonth();
            if(diffInMonths < 0 && diffInYears > 0) {
                diffInMonths = 12 + diffInMonths;
                diffInYears--;
            }
            answer.innerHTML = `${diffInYears} year(s), ${diffInMonths} month(s)`;
    } else {
        alert('Please select a date.');
    }
}
