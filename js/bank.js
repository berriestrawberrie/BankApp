
const user ={
    accountName: "Kitten Milks",
    balance: 1200,
    getBalance(){
        if(this.balance != 0){
            alert(`You have ${this.balance}(s) in the milk bank`);
        }else{
            alert(':( You have no milks in the milk bank');
        }
    }
}

function atm(){
    const message = parseFloat(prompt("Select a choice 1.) See Balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit"));
    
    switch(message){
        case 1: 
            user.getBalance();
            break;
        case 2:
            console.log("Want Deposit");
            break;
        case 3:
            console.log("Want Withdraw");
            break;
        case 4:
            console.log("Want Name");
            break;
        case 5:
            console.log("Want Exit");
            break;
        
    }

}//END FUNCTION ATM

atm();

