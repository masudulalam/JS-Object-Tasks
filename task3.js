/**
 * 
 * Task-3
    Display the physics marks as output.

    const student = {
        name: "Hamim Sakep",
        id: 5421,
        physics: {
            subject: "HSC Physics",
            author: "Shahjahan Tapan",
            marks: 30
        }
    };
 */


// Solution:

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

// Display the physics marks
const physicsMarks = student.physics.marks;
console.log(physicsMarks);