// task 1

let age = 100;
if (age < 50) {
    console.log("ნაკლებია 50ზე");
} else if (age > 20) {
    console.log("მეტია 20ზე");
} else {
    console.log("შეცდომა");
};

// ternary operator

let secondAge = (age < 50) ? "ნაკლებია 50ზე" : (age > 20) ? "მეტია 20ზე" : "შეცდომა";
console.log(secondAge);

// task 2

let firstName = "მარიამ";

if (firstName == "მარიამ") {
    console.log(true);
} else {
    console.log(false);
};

// task 3

let namee = "მარიამ";
switch (namee) {
    case "მარიამ":
        console.log(true);
        break;
    default:
        console.log(false);
        break;
}

// task 4

let box = ("ნებისმიერი");
console.log(typeof box);

// task 5 

let number = 10;
console.log(String(number));





