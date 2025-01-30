import "../componentsStyle/loanForm.css";
import { useState } from "react";
import ModalPop from "../components/ModalPop";

export default function LoanForm() {
    const [errorMessage, setErrorMessage] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [loanInputs, setLoanInputs] = useState({
        name: "",
        phoneNumber: "",
        age: "",
        isEmployee: false,
        salary: ""
    });
    function handleFormSubmit(event){
        event.preventDefault();
        setErrorMessage(null);
        const {age, phoneNumber} = loanInputs;
        if (age < 18 || age > 100) {
            setErrorMessage("Age must be between 18 and 100.");
            setShowModal(true);
            return;
        }else if(phoneNumber.length < 1 || phoneNumber.length > 11){
            setErrorMessage("Phone number must be 11 digits.");
            setShowModal(true);
            return;
        }
        
        // setTimeout(() => {
            setShowModal(true);
        // },2000)
        
    }
    let isbtnDisable = loanInputs.name == "" || loanInputs.phoneNumber == "" || loanInputs.age == ""
    function handleDivClick() {
        console.log("divClick");
        if (showModal) {
            setShowModal(false);
            setLoanInputs({
                name: "",
                phoneNumber: "",
                age: "",
                isEmployee: false,
                salary: ""
            });
        }
    }
    return (
        <div className="container" onClick={handleDivClick}>
            <form className="form">
                <h1>Requesting a Loan</h1>
                <hr></hr>
                {/* Name */}
                <label htmlFor="Name">Name:</label>
                <input value={loanInputs.name} onChange={(event)=>{
                    setLoanInputs({...loanInputs, name: event.target.value.trim() });
                }} type="text" id="Name" name="Name" required></input>
                {/* phone Number */}
                <label htmlFor="PhoneNumber">Phone Number:</label>
                <input value={loanInputs.phoneNumber} onChange={(event)=>{
                    setLoanInputs({...loanInputs, phoneNumber: event.target.value });
                }} type="number" id="PhoneNumber" name="PhoneNumber" required></input>
                {/* Age */}
                <label htmlFor="age">Age:</label>
                <input value={loanInputs.age} onChange={(event)=>{
                    setLoanInputs({...loanInputs, age: event.target.value });
                }} type="number" id="age" name="age" required></input>
                {/* employee  */}
                <div className="employee">
                    <label>Are you an employee?</label>
                    <input checked={loanInputs.isEmployee} onChange={(event)=>{
                        setLoanInputs({...loanInputs, isEmployee: event.target.checked });
                    }} type="checkbox" id="employee" name="employee" required></input>
                </div>
                {/* salart  */}
                <select value={loanInputs.salary} onChange={(event)=>{
                    setLoanInputs({...loanInputs, salary: event.target.value });
                }}>
                    <option value="" disabled>Select your Salary</option>
                    <option value="less than 500$">less than 500$</option>
                    <option value="between 500$ and 2000$">between 500$ and 2000$</option>
                    <option value="above 2000$">above 2000$</option>
                </select>
                {/* submit button */}
                <button className={isbtnDisable ? "disable" : "unable"}  onClick={handleFormSubmit} id="loan-btn" type="submit" disabled={isbtnDisable}>submit</button>
            </form>
            <ModalPop errorMessage={errorMessage} nameUser={loanInputs.name} isVisable={showModal}/>
        </div>
    );
}
