class BankAccount {
  constructor(name,balance) {
    this.name = name;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    return this.balance;
  }

  withdraw(amount) {                                               
    if (amount > this.balance) {
      console.log("Insufficient funds");
      return;
    }

    this.balance -= amount;
    return this.balance;
    return this.amount;
  }
} 
class CheckingAccount extends BankAccount {
  constructor(balance) {
    super(balance);
    this.transactionFee = 0.15;
  }
  withdraw(amount) {
    this.balance += withdraw + this.balance;
    this.balance -= amount + this.transactionFee;
    return this.balance;
  }
}
class SavingsAccount extends BankAccount {
  constructor(balance) {
    super(balance);
    this.interestRate = 0.05;
  }
  deposit(amount) {
    this.balance += amount + (amount * this.interestRate);
    return this.deposit;
  }
}
const BankAccount = new SavingsAccount("Harshil", 1000, 200);
BankAccount.addInterest();
console.log(BankAccount.balance);




// class BankAccount {
//     constructor(name, balance) {
//       this.name = name;
//       this.balance = balance;
//     }
//     // deposit(amount) {
//     //   this.balance += amount;
//     // }
//     // withdraw(amount) {
//     //   if (this.balance - amount < 0) {
//     //     console.log("You cannot withdraw that amount.");
//     //   } 
//     //   else {
//     //     this.balance -= amount;
//     //   }
//     // }
// }

// class SavingsAccount extends BankAccount {
//   constructor(name, balance, interest) {
//     super(name, balance);
//     this.interest = interest;
//   }
//   addInterest() {
//     this.balance = this.balance + this.interest;
//   }
// }

// const myAccount = new SavingsAccount("Harshil", 1000, 200);
// myAccount.addInterest();
// console.log(myAccount.balance);