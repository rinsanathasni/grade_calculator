function calculateGrade() {
    // Collecting input values
    let marks1 = document.getElementById("marks1").value;
    let marks2 = document.getElementById("marks2").value;
    let marks3 = document.getElementById("marks3").value;
    let marks4 = document.getElementById("marks4").value;
    let marks5 = document.getElementById("marks5").value;

    // Converting string inputs to numbers
    let totalMarks = Number(marks1) + Number(marks2) + Number(marks3) +
                     Number(marks4) + Number(marks5);

    // Calculating average
    let averageMarks = totalMarks / 5;

    // Grade calculation
    let grade;
    if (averageMarks >= 90) {
        grade = 'A+';
    } else if (averageMarks >= 80) {
        grade = 'A';
    } else if (averageMarks >= 70) {
        grade = 'B';
    } else if (averageMarks >= 60) {
        grade = 'C';
    } else if (averageMarks >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    // Displaying results
    console.log("Total Marks: " + totalMarks);
    console.log("Average Marks: "+ averageMarks);
    console.log("Grade: "+ grade);

    document.getElementById("result").textContent = 
        "Total Marks: " + totalMarks + "| Average: " + averageMarks +"| Grade: " + grade;
}