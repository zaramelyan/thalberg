import React from 'react';
import {submitForm} from '../services/forms'
//import { checkToday } from '../../queries';

class AppForm2 extends React.Component {
    //Submit the date to SQL with NOW()::DATE;
    //fix import + checkToday function
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

    async componentDidMount() {
    //await checkToday();
    }

    async handleSubmit(e) {
        const { history } = this.props;
        e.preventDefault();
        console.log("Submitted values: ", {...this.state.form})
        
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
            console.log(id + " checked " + e.target.checked)
            this.setState(prevState => {
              let form = {...prevState.form};  // creating copy of state variable 
              form[id] = !prevState.form[id];                     // update specific, assign a new toggled value                 
              return { form };                                 // return new object 
            })
    }

    render() {
    return (
        <>
        <form onSubmit={this.handleSubmit} >
  <label>
    <h2>Helse</h2>
    <p>Har du holdt deg hydrert og tatt sunne valg? 
  </p>
    <input type="checkbox" value="health" id="health" onClick={this.handleCheckbox}></input>
  </label>
  
  <label>
  <h2>Forhold</h2>
  <p>
  Har du aktivt gjort noe for å gjøre partner glad i løpet av dagen? 
 </p>
  <input type="checkbox" value="love" id="love" onClick={this.handleCheckbox}></input></label>
  
<label>
<h2>Jobb</h2>
<p>Har du aktivt forbedret strategi, eller brukt strategien i løpet av dagen?
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

