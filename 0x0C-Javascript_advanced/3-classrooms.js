function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return function () {
            return seat;
        };
    }

    let students = new Array(numbersOfStudents);
    for (let i = 0; i < students.length; i++) {
        students[i] = studentSeat(i + 1);
    }

    return students;
}

let classRoom = createClassRoom(10);
