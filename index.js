const button = document.querySelector("#btn");
button.addEventListener("click", calculateAmount);

const buttonPocket = document.querySelector("#addPocketMoney");
buttonPocket.addEventListener("click", showaddPocketMoney);

 function showaddPocketMoney(e){
    e.preventDefault();
    pocket.style.display = "block";
 }

function calculateAmount(e){
    e.preventDefault();
    const sum = document.querySelector("#school").value;
    const people = document.querySelector("#people").value;
    const pocket = document.querySelector("#pocket").value;
    const insurance = document.querySelector("#insurance").value;

    if (sum === "" || people === "" || insurance === ""|| pocket === ""){
        Swal.fire({
  icon: 'error',
  title: 'Error!',
  text: 'Please enter your information!',
})
return false
 }
     
let sumPerPerson = sum /people;
let insurancePerPerson = insurance/people;
let pocketPerPerson = ((sum/1 + insurance/1)*pocket)/people;
let totalSum = sumPerPerson + pocketPerPerson;


sumPerPerson = sumPerPerson.toFixed(2);
pocketPerPerson = pocketPerPerson.toFixed(2);
insurancePerPerson = insurancePerPerson.toFixed(2);
totalSum = totalSum.toFixed(2);


document.querySelector("#dividedSum").textContent = sumPerPerson;
document.querySelector("#dividedPocketMoney").textContent = pocketPerPerson;
document.querySelector("#dividedSumAndPocketMoney").textContent = totalSum;
document.querySelector("#dividedInsurance").textContent = insurancePerPerson;
}

