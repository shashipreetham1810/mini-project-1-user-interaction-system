// ================================
// Mini Project 1 - User Transaction System
// ================================

// Data Model
let users = [
    {
        name: "A",
        age: 20,
        balance: 1000,
        transactions: [100, -200, 300]
    },
    {
        name: "B",
        age: 15,
        balance: 500,
        transactions: [50, -100, -50]
    },
    {
        name: "C",
        age: 25,
        balance: 2000,
        transactions: [500, -300, 200]
    }
];

// ================================
// STEP 1 - USER CLASSIFICATION
// ================================
console.log("\n--- USER CLASSIFICATION ---");

for (let i = 0; i < users.length; i++){
    if (users[i].age >= 18){
        console.log("Adult:", users[i].name);
    } else {
        console.log("Child:", users[i].name);
    }
}

// ================================
// STEP 2 - TRANSACTION PROCESSING
// ================================
console.log("\n--- USER ACCOUNTS ---");

function processUser(acc){

    let income = 0;
    let expense = 0;
    let finalBalance = acc.balance;

    for(let i = 0; i < acc.transactions.length; i++){
        let value = acc.transactions[i];

        if(value > 0){
            income = income + value;
            finalBalance = finalBalance + value;
        } else {
            expense = expense + value; // negative
            finalBalance = finalBalance + value;
        }
    }

    console.log("User:", acc.name);
    console.log("Income:", income);
    console.log("Expense:", expense);
    console.log("Final Balance:", finalBalance);
    console.log("---------------------------");

    return finalBalance;
}

// store final balances
let finalBalances = [];

for (let i = 0; i < users.length; i++){
    let fb = processUser(users[i]);
    finalBalances.push(fb);
}

// ================================
// STEP 3 - SYSTEM SUMMARY
// ================================
console.log("\n--- SYSTEM SUMMARY ---");

let totalUsers = users.length;
let totalAdults = 0;
let totalChildren = 0;
let systemBalance = 0;

for (let i = 0; i < users.length; i++){

    let user = users[i];

    // classification
    if(user.age >= 18){
        totalAdults++;
    } else {
        totalChildren++;
    }

    // system balance
    systemBalance = systemBalance + finalBalances[i];
}

console.log("Total users:", totalUsers);
console.log("Total adults:", totalAdults);
console.log("Total children:", totalChildren);
console.log("Total system balance:", systemBalance);
