import React from 'react';
import { fetchAnswers } from '../services/forms'

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            answers: []
        }
    }
   

    async componentDidMount() {
        // const answers = await fetchAnswers();
        // this.setState({answers})
        // console.log("ans " + Object.keys(answers))
        // console.log("Ans" + Object.keys(this.state.answers))
    }

    render() {
    const answers = this.state.answers;
      const answerElems = answers.map(({ id, created_at, health, job, love, self }) => {
         return (
           <div key={id} >
            <p>{created_at}</p>
           </div>
         )
       })
 
  
    return ( 
        <div>
        Home
        {answerElems}
        </div>
    )
    }
}


export default Home;