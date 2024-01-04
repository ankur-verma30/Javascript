class Wallet {
  constructor() {
    this._balance = 0;
    this._transactions = [];
  }
  //deposit function
  deposit(amount) {
    this._PrcessDeposits(amount);
    this._balance += amount;
  }

  //withdraw function
  withdraw(amount) {
    if (this._balance < amount) {
      console.log("Insufficient balance");
    } else {
      this._ProcessWithdraw(amount);
      this._balance -= amount;
    }
  }

  //processdeposit function
  _PrcessDeposits(amount) {
    console.log(`Depositing ${amount}`);

    this._transactions.push({
      type: "deposit",
      amount,
    });
  }

  //processwithdraw function
  _ProcessWithdraw(amount) {
    console.log(`Withdrawn ${amount}`);

    this._transactions.push({
      type: "withdraw",
      amount,
    });
  }
  get balance() {
    return this._balance;
  }

  get transactions() {
    return this._transactions;
  }
}

const wallet1 = new Wallet();
wallet1.deposit(300);
wallet1.withdraw(100);
console.log(wallet1.balance);
console.log(wallet1.transactions);


//ES2022 Class Fields

//there is feature of class fields  
