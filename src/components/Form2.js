import React from 'react';
import {submitForm} from '../services/forms'

class AppForm2 extends React.Component {
    //Submit the date to SQL with NOW()::DATE;
    constructor(props) {
        super(props);
        this.state = {
          form: {  health: false,
            job: false,
            love: false, 
            self: false},
          
            submitted: false
        }

        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(e) {
        const { history } = this.props;
        e.preventDefault();
        console.log("HERE ", {...this.state.form})
        
        try {
           //await postForm({...this.state.form});
        await submitForm({...this.state.form})
        //await this.populateForm();
        //check if form has been submitted on this date
        
        history.push('/home')
        } catch (err) {
          console.error(err.name + ': ' + err.message)
        }
       
    }
  
    handleCheckbox = (e) => {
        const id = e.target.id;
        if (e.target.checked) {
            console.log(id + " checked")
            this.setState(prevState => {
              let form = {...prevState.form};  // creating copy of state variable jasper
              form[id] = true;                     // update the name property, assign a new value                 
              return { form };                                 // return new object jasper object
            })
        } else {
            console.log(id + " unchecked")
            this.setState(prevState => {
              let form = {...prevState.form};  // creating copy of state variable jasper
              form[id] = false;                     // update the name property, assign a new value                 
              return { form };                                 // return new object jasper object
            })
        }
        console.log(this.state)
    }

    render() {
    return (
        <>
        <form onSubmit={this.handleSubmit} >
  <label>
    <h2>Helse</h2>
    <p>Har du holdt deg hydrert, og generelt sunn gjennom dagen + en treningsøkt? 
  </p>
    <input type="checkbox" value="health" id="health" onClick={this.handleCheckbox}></input>
  </label>
  
  <label>
  <h2>Kjærlighet</h2>
  <p>
  Har du aktivt gjort noe for å gjøre hani lykkelig i løpet av dagen? 
 </p>
  <input type="checkbox" value="love" id="love" onClick={this.handleCheckbox}></input></label>
  
<label>
<h2>Jobb</h2>
<p>Har du aktivt forbedret strategi, eller jobbet med strategien i løpet av dagen?
</p>
  <input type="checkbox" value="job" id="job" onClick={this.handleCheckbox}></input></label>

  <label><h2>Selvrealisering</h2>
  <p>Har du gjort ting du er god på?</p>
  <input type="checkbox" value="self" id="self" onClick={this.handleCheckbox}></input></label>

<br/>
  <input type="submit" className="submit" value="SUBMIT" />
</form>
    </>
    )
    }
}

export default AppForm2;

