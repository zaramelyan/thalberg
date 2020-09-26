import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';

class WeekChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            answers: this.props.data
        }
    }

  render() {
    console.log(this.state.answers)

    const data = this.state.answers.map((item) => {
        return { 
            name: item.created_at.split('-'), 
            helse: item.health ? 1 : -1, 
            jobb: item.job ? 1 : -1, 
            forhold: item.love ? 1 : -1, 
            selvrealisering: item.self ? 1 : -1
        }
    })
    console.log(typeof data)
  

    return (
      <BarChart
        width={800}
        height={500}
        data={data}
   
        stackOffset="sign"
        margin={{
          top: 5, right: 20, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="1 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[-4, 4]} label={{ value: 'ikke møtt | møtt krav', angle: -90, position: 'center' }}/>
        <Tooltip />
        <Legend height={1} />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="helse" fill="#8884d8" stackId="a" />
        <Bar dataKey="jobb" fill="#8834d8" stackId="a" />
        <Bar dataKey="forhold" fill="#82ca9d" stackId="a" />
        <Bar dataKey="selvrealisering" fill="#6784d8" stackId="a" />
      </BarChart>
    );
  }
}


export default WeekChart;