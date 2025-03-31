
let user ={
    accountName: "Kitten Milks",
    balance: 1200,
    signIn: true,
    getBalance(){
        //FIRST CHECK IF THE BALANCE IS ZERO
        if(this.balance != 0){
            alert(`You have ${this.balance}(s) in the milk bank`);
        }else{
            alert(':( You have no milks in the milk bank');
        }
    },//END OF GETBALANCE
    accountError(){
        //MAKE SURE USER PICKS A VALID OPTION
        alert("Option invalid please pick a valid option number from the list");
    
    },
    deposit(){
        let addMoney = prompt("How many milks do you wish to deposit? *Please note all milk deposits will be rounded to nearest whole milk");

        //CHECK IF USER ENTERED A POSITIVE REAL NUMBER
        if(isNaN(addMoney) || addMoney < 0){

            //CONTINUE TO PROMPT UNTIL USER ENTERS A POSITIVE NUMBER
            while(isNaN(addMoney) || addMoney < 0){
                addMoney = prompt("Error: Sorry you must enter a real number and must be a positive quantity.");
            }
            //THEN APPLY DEPOSIT TO THE ACCOUNT
            addMoney = Math.round(addMoney);
            let newBal = addMoney + this.balance;
            this.balance = newBal;
            alert(`Deposit successful! You now have ${this.balance}(s) milks in your account ${this.accountName}.`);

        }else{
            addMoney = Math.round(addMoney);
            let newBal = addMoney + this.balance;
            this.balance = newBal;
            alert(`Deposit successful! You now have ${this.balance}(s) milks in your account ${this.accountName}.`);
        }

    },//END OF DEPOSIT FUNCTION
    withdraw(){
        let takeMoney = prompt("How many milks would you like to withdraw? *Please note all milk withdrawals will be rounded to nearest whole milk");

         //CHECK IF USER ENTERED A POSITIVE REAL NUMBER & HAS ENOUGH TO WITHDRAW
        if(isNaN(takeMoney)|| takeMoney < 0 || takeMoney > this.balance){

            //CONTINUE TO PROMPT UNTIL USER ENTERS A POSITIVE NUMBER
            while(isNaN(takeMoney) || takeMoney < 0 || takeMoney > this.balance){
                takeMoney = prompt(`Error: Sorry you must enter a real number, it must be a positive quantity and it must be less than your current balance of ${this.balance}.`);
            }
             //THEN TAKE MILKS FROM THE ACCOUNT
             takeMoney = Math.round(takeMoney);
             let newBal = this.balance - takeMoney;
             this.balance = newBal;
             alert(`Withdrawal successful! You now have ${this.balance}(s) milks in your account ${this.accountName}.`);
 
        }else{
            //THEN TAKE MILKS FROM THE ACCOUNT
            takeMoney = Math.round(takeMoney);
            let newBal = this.balance - takeMoney;
            this.balance = newBal;
            alert(`Withdrawal successful! You now have ${this.balance}(s) milks in your account ${this.accountName}.`);
        }
    },//END OF WITHDRAW
    getName(){
        alert(`The name on your account is: ${this.accountName}`);
    },//END OF GETNAME
    exit(){
        this.signIn = false;
        alert(`${this.accountName} is now logged out`);
    }//END OF EXIT 
 
}//END OF OBJECT

function atm(){
        while(user.signIn){
            const message = parseFloat(prompt("Select a choice 1.) See Balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit"));
    
        
            switch(message){
                case 1: 
                    user.getBalance();
                    continue;
                case 2:
                    user.deposit();
                    continue;
                case 3:
                    user.withdraw();
                    continue;
                case 4:
                    user.getName();
                    continue;
                case 5:
                    user.exit();
                    continue;
                default: 
                    user.accountError();
                    continue;
                
            }//END OF SWITCH
            break
        }//END OF WHILE LOOP
   

}//END FUNCTION ATM

atm();
console.log(user);
