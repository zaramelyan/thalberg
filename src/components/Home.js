import React from 'react';
import { fetchAnswers } from '../services/forms'

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            answers: [],
            isLoading: false,
            sentToday: false, 
            error: null,
        }
    }

    async componentDidMount() {
    const answers = await this.fillAnswers();
    }

    async fillAnswers() {
        try {
          this.setState({ isLoading: true }) 
          const answers = await fetchAnswers()
          console.log(answers[0].created_at)
          this.setState({ answers, isLoading: false })
        } catch (error) {
          this.setState({ error });
        }
      }


    render() {
        const date = Date.now();
        const { 
              answers,
              isLoading,
              error,
             } = this.state;
            if (error) {
              return (
                <div>Unable to fetch answers: {error.message}</div>
              )
            }
      
            if (isLoading) {
              return (
                <div>Loading answers...</div>
              )
            }
      
            const answerElements = answers.map(({ id, created_at, health, job, love, self, user_id }) => {
             const styles = { border: '1px solid black', padding: 10, margin: 10}
              return (
                <div key={id}>
                  <p>{created_at}</p>
                  <div className="answers">
                  <div>Helse: {health ?<p>ja</p> : <p>nei</p>}</div>
                  <div>Jobb: {job ? <p>ja</p> : <p>nei</p>}</div>
                  <div>Forhold: {love ? <p>ja</p> : <p>nei</p>}</div>
                  <div>Selvrealisering: {self ? <p>ja</p> : <p>nei</p>}</div>
                  </div>
                </div>
              )
            })
      
          return(
              <div>

                <div>
                  {answerElements}
                  </div>
                </div>
              
          )

    }
}


export default Home;