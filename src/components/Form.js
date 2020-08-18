import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';


function AppForm() {

    const [name, setName] = useState("");
    const [resultYes, setResultYes] = useState(false)
    const [resultNo, setResultNo] = useState(false)

    const obj = {resultYes: false, resultNo: false }
  

    const handleChange = (e) => {
        setName(e.target.value)
        console.log(name)
    }

    const handleSubmit = (e) => {
    
        e.preventDefault();
        console.log(name, resultYes, resultNo)
    }

    const handleRadio = (e) => {
        const chosen = e.target.value;
        const id = e.target.id;
        console.log(id);
        
        
        if (chosen === "yes") {
            if (!resultYes) {
                obj.resultYes = true;
                console.log(obj)
                setResultYes(true)
                setResultNo(false)
                document.querySelector(`#boxyes`).checked = true;
                document.querySelector(`#boxno`).checked = false;
            }
           
            if (resultYes) {
                console.log("current: " + resultYes)
                setResultYes(false)
                document.querySelector(`#boxyes`).checked = false;
            }
        }
       
        if (chosen === "no") {
            if (!resultNo) {
                setResultNo(true)
                setResultYes(false)
                document.querySelector(`#boxno`).checked = true;
                document.querySelector(`#boxyes`).checked = false;
            }
           
            if (resultNo) {
                console.log("current: " + resultNo)
                setResultNo(false)
                document.querySelector(`#boxno`).checked = false;
            }
        }
    }

    return (
        <>

        <h1>Mahaniform</h1>
        <form onSubmit={handleSubmit} >
  <label>
    Name:
    <input type="text" name="name" value={name} onChange={handleChange}/>
  </label>
  <p>Question:</p>
  <label>
  Yes
  <input type="checkbox" value="yes" id="boxyes" onClick={handleRadio}></input></label>
  <label>
  No
  <input type="radio" value="no" id="boxno" onClick={handleRadio}></input></label>
  <input type="submit" value="Submit" />
</form>
     

        </>
    )
}

export default AppForm;

