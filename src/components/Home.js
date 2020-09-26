import React from 'react';
import WeekChart from './WeekChart';
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
      await this.fillAnswers();
    }

    async fillAnswers() {
        try {
          this.setState({ isLoading: true }) 
          const answers = await fetchAnswers()
          //timestamp of latest answer
          console.log(answers[0].created_at)
          this.setState({ answers, isLoading: false })
        } catch (error) {
          this.setState({ error });
        }
      }


    render() {
        const date = Date.now();
        const { answers, isLoading, error } = this.state;
            if (error) {
              return (
                <div>Fikk ikke tak i svar: {error.message}</div>
              )
            }
      
            if (isLoading) {
              return (
                <div>Laster svar...</div>
              )
            }

            //kategori og svar kan lagres/lastes annerledes...
            const answerElements = answers.map(({ id, created_at, health, job, love, self, user_id }) => {
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
                <div className="chart">
                <WeekChart data={answers} />
                </div>
                <div>
                  {answerElements}
                  </div>
                </div>
              
          )

    }
}


export default Home;