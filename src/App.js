import "./index.css"
import { useState } from "react";
import PaystackPop from '@paystack/inline-js';
import swal from "sweetalert";
require('dotenv').config()

function App() {
const [email, setEmail] = useState("")
const [amount, setAmount] = useState("")
const [firstname, setfirstname] = useState("")


function PaywithPaystack(e){
  e.preventDefault();

  const paywithpaystack = new PaystackPop();

  paywithpaystack.newTransaction(
    {
      key: process.env.PAYSTACK_API_KEY,
      amount:amount*100,
      email,
      firstname,
      onSuccess(transaction){
        alert(`Transaction successful ${transaction.reference}` )
      },
      onCancel(){
        alert("Transaction cancelled")
      }
    }
  )

}



  return (
    <div className="App">
      <form>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>

        <label htmlFor="amount">amount</label>
        <input type="text" name="amount" value={amount} onChange={(e)=> setAmount(e.target.value)}/>

        <label htmlFor="firstname">Firstname</label>
        <input type="text"  name="firstname" value={firstname} onChange={(e)=> setfirstname(e.target.value)}/>

        <button onClick={PaywithPaystack}>Pay</button>

      </form>
    </div>
  );
}

export default App;
