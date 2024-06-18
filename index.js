let express = require("express");
let app = express();

// function to return a welcome message
function getWelcomeMessage() {
  return "Welcome to our service";
}
// /welcome
// Endpoint-1: Returns a welcome message
app.get("/welcome", (req, res) => {
  res.send(getWelcomeMessage());
});

//function to return greeting with username
function getGreetingMessage(username) {
  return `Hello, ${username}!`;
}
// /greet?username=John
// Endpoint-2: Returns a greeting message for the user
app.get("/greet", (req, res) => {
  let username = req.query.username;
  res.send(getGreetingMessage(username));
});

// function to check the password length
function checkPassswordLength(password) {
  if (password.length > 15) {
    return "Password is strong";
  } else {
    return "Password is weak.";
  }
}
// /check-password?password=myverystrongpassword
// Endpoint-3:  takes a password returns if it is strong (length > 15) or weak.
app.get("/check-password", (req, res) => {
  let password = req.query.password;
  res.send(checkPassswordLength(password));
});

//function to caculate sum of two numbers
function calculateSum(num1, num2) {
  let sum = num1 + num2;
  return sum.toString();
}
// /sum?num1=5&num2=10
// Endpoint-4: takes two numbers as query parameters and returns their sum.
app.get("/sum", (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(calculateSum(num1, num2));
});

// function that return subscription status message
function getSubcriptionStatus(userName, isSubscribed) {
  if (isSubscribed === "true") {
    return userName + " is subscribed";
  } else {
    return userName + " is not subscribed";
  }
}
// /subscription-status?username=John&isSubscribed=true
// Endpoint-5: takes a username and a boolean isSubscribed indicating subscription status, and returns a message if the user is subscribed or not.
app.get("/subscription-status", (req, res) => {
  let username = req.query.username;
  let isSubscribed = req.query.isSubscribed;
  res.send(getSubcriptionStatus(username, isSubscribed));
});

// function to calculate the discounted price
function calculateDiscoutedPrice(price, discount) {
  let discountedPrice = price - (price * discount) / 100;
  return discountedPrice.toString();
}
// /discounted-price?price=100&discount=10
// Endpoint-6: takes a product price and a discount percentage, and returns the final price after discount.
app.get("/discounted-price", (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  res.send(calculateDiscoutedPrice(price, discount));
});

// function that returns a greeting message
function getGreeting(age, gender, name) {
  return `Hello, ${name}! You are a ${age} year old ${gender}`;
}
// /personalized-greeting?age=25&gender=male&name=John
// Endpoint-7 :  that takes a user's age, gender, and name, and returns a personalized greeting message.
app.get("/personalized-greeting", (req, res) => {
  let age = req.query.age;
  let gender = req.query.gender;
  let name = req.query.name;
  res.send(getGreeting(age, gender, name));
});

//A- function that return final price after tax
function calculateFinalPrice(cb, price, discount, tax) {
  let discoutedPrice = parseFloat(cb(price, discount));
  console.log(discoutedPrice);
  let finalPrice = discoutedPrice + (discoutedPrice * tax) / 100;
  return finalPrice.toString();
}
// B- function that return final price after tax
function calculateFinalPriceAfterTax(price, discount, tax) {
  let discoutedPrice = price - (price * discount) / 100;
  let finalPrice = discoutedPrice + (discoutedPrice * tax) / 100;
  return finalPrice.toString();
}
// /final-price?price=100&discount=10&tax=5
// Endpoint-8: takes a product price, discount percentage, and tax rate, and returns the final price after applying discount and tax.
app.get("/final-price", (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);
  //res.send(calculateFinalPrice(calculateDiscoutedPrice, price, discount, tax));

  res.send(calculateFinalPriceAfterTax(price, discount, tax));
});

// function to calculate total exercise time
function calculateTotalExerciseTime(running, cycling, swimming) {
  return (running + cycling + swimming).toString();
}

// /total-exercise-time?running=30&cycling=40&swimming=50
// Endpoint-9:  that takes three fitness activity durations (running, cycling, swimming) and returns the total exercise time.
app.get("/total-exercise-time", (req, res) => {
  let running = parseFloat(req.query.running);
  let cycling = parseFloat(req.query.cycling);
  let swimming = parseFloat(req.query.swimming);

  res.send(calculateTotalExerciseTime(running, cycling, swimming));
});

let PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on PORT: ", PORT);
});
