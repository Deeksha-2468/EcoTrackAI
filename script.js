function calculate() {

let travelInput = document.getElementById("travel").value;
let electricityInput = document.getElementById("electricity").value;
let plasticInput = document.getElementById("plastic").value;

// Input validation
if(
travelInput.trim() === "" ||
electricityInput.trim() === "" ||
plasticInput.trim() === ""
){
document.getElementById("result").innerHTML =
"⚠️ Please enter all values.";

document.getElementById("badge").innerHTML = "";
document.getElementById("level").innerHTML = "";
document.getElementById("achievement").innerHTML = "";
document.getElementById("tip").innerHTML = "";

return;
}

let travel = Number(travelInput);
let electricity = Number(electricityInput);
let plastic = Number(plasticInput);

if(
travel < 0 ||
electricity < 0 ||
plastic < 0
){
document.getElementById("result").innerHTML =
"⚠️ Values cannot be negative.";

document.getElementById("badge").innerHTML = "";
document.getElementById("level").innerHTML = "";
document.getElementById("achievement").innerHTML = "";
document.getElementById("tip").innerHTML = "";

return;
}



// Carbon score calculation
let score = (travel * 0.2) + (electricity * 0.5) + (plastic * 0.3);

// Generate eco-friendly suggestions
let suggestion = "";

if(score < 50){
    suggestion = "🌱 Great job! Keep using eco-friendly habits.";
}
else if(score < 100){
    suggestion = "🚲 Try using public transport or cycling more often.";
}
else{
    suggestion = "🌍 Your footprint is high. Reduce electricity use and plastic consumption, and consider carpooling or walking when possible.";
}

document.getElementById("result").innerHTML =
"🌿 Estimated Carbon Score: " + score.toFixed(2);

if(score < 50){
    document.getElementById("badge").innerHTML =
    "🏆 Badge: Green Beginner";

    document.getElementById("level").innerHTML =
    "🟢 Eco Level: Excellent";
}
else if(score < 100){
    document.getElementById("badge").innerHTML =
    "🏆 Badge: Eco Warrior";

    document.getElementById("level").innerHTML =
    "🟡 Eco Level: Good";
}
else{
    document.getElementById("badge").innerHTML =
    "🏆 Badge: Climate Champion";

    document.getElementById("level").innerHTML =
    "🔴 Eco Level: Needs Improvement";
}
if(score < 30){
    document.getElementById("achievement").innerHTML =
    "🥇 Achievement: Earth Protector";
}
else if(score < 70){
    document.getElementById("achievement").innerHTML =
    "🥈 Achievement: Eco Explorer";
}
else{
    document.getElementById("achievement").innerHTML =
    "🥉 Achievement: Climate Learner";
}

document.getElementById("tip").innerHTML =
"🤖 AI Suggestion: " + suggestion;
let challenges = [

"🚶 Walk or cycle instead of using a vehicle today.",

"💧 Save water by turning off the tap while brushing.",

"♻️ Recycle one plastic item today.",

"🌳 Plant or care for a tree or plant.",

"🔌 Switch off unused electrical appliances."

];

let randomChallenge =
challenges[Math.floor(Math.random() * challenges.length)];

document.getElementById("challenge").innerHTML =
randomChallenge;
// Update progress tracker
let progressValue = ((300 - score) / 300) * 100;

if(progressValue < 0){
    progressValue = 0;
}

if(progressValue > 100){
    progressValue = 100;
}

document.getElementById("progress").value =
progressValue;

document.getElementById("progressText").innerHTML =
"🌿 Sustainability Progress: " +
progressValue.toFixed(0) + "%";

}
function resetForm(){

document.getElementById("travel").value = "";
document.getElementById("electricity").value = "";
document.getElementById("plastic").value = "";

document.getElementById("result").innerHTML = "";
document.getElementById("badge").innerHTML = "";
document.getElementById("level").innerHTML = "";
document.getElementById("achievement").innerHTML = "";
document.getElementById("tip").innerHTML = "";

document.getElementById("challenge").innerHTML =
"Complete one eco-friendly action today!";

document.getElementById("progress").value = 0;

document.getElementById("progressText").innerHTML = "";
}
