class Wallet {
    #balance=0;
    #transactions=[];

    //deposit function
    deposit(amount) {
      this.#PrcessDeposits(amount);
      this.#balance += amount;
    }
  
    //withdraw function
    withdraw(amount) {
      if (this.#balance < amount) {
        console.log("Insufficient balance");
      } else {
        this.#ProcessWithdraw(amount);
        this.#balance -= amount;
      }
    }
  
    //processdeposit function
    #PrcessDeposits(amount) {
      console.log(`Depositing ${amount}`);
  
      this.transactions.push({
        type: "deposit",
        amount,
      });
    }
  
    //processwithdraw function
    #ProcessWithdraw(amount) {
      console.log(`Withdrawn ${amount}`);
  
      this.transactions.push({
        type: "withdraw",
        amount,
      });
    }
    get balance() {
      return this.#balance;
    }
  
    get transactions() {
      return this.#transactions;
    }
  }
  
  const wallet1 = new Wallet();
  console.log(wallet1.deposit(300));
  console.log(wallet1.withdraw(200));
//   console.log(wallet1.#balance);
  console.log(wallet1.balance);
  
  
  
  
  