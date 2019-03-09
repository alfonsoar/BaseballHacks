import React, { Component } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';
import { Jumbotron, Container } from 'reactstrap';

import Chart1 from './attChart';
import Chart2 from './payrollChart';
import Stats from './stats';

import logo from './resources/redSox.png'
import AttChartData from './resources/attendance.json';
import PayChartData from './resources/payroll.json';

import 'react-accessible-accordion/dist/fancy-example.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Jumbotron fluid className='jumbo'>
            <Container fluid>
              <div className='row'>
                <div className='col-sm topBox'>
                  <h1 className="display-4 mainHeading">Hey, Boston Red Sox</h1>
                  <p className="lead subHeading">Do this to win <span className='subMinHeading'>(it's backed by data science)</span></p>
                </div>
                <div className='col-sm'>
                  <img  src={logo} alt="fireSpot" height="200" width="200"/>
                </div>
              </div>     
            </Container>
          </Jumbotron>
      </div>
    <Accordion>
        <AccordionItem>
            <AccordionItemTitle>
                <h3>Optimal Attendance</h3>
                <div>Optimal <b>Attendance</b> range for target wins of <b>>95</b> per season: <b>1,556,402 - 3,062,699</b></div>
            </AccordionItemTitle>
            <AccordionItemBody>
              <div className='row'>
                <div>
                  <Chart1
                  width={800}
                  height={500}/>
                </div>
                <div>
                  <Stats 
                    min={AttChartData.optimalRangeMin}
                    max={AttChartData.optimalRangeMax}
                    pearson={AttChartData.pearsonCorr}/>
                </div>
              </div>
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h3>Optimal Team Payroll</h3>
                <div>Optimal <b>Team Payroll</b> range for target wins of <b>>95</b> per season: <b>98,696,500 - 206,247,686</b></div>
            </AccordionItemTitle>
            <AccordionItemBody>
            <div className='row'>
                <div>
                  <Chart2
                  width={800}
                  height={500}/>
                </div>
                <div>
                <Stats 
                    min={PayChartData.optimalRangeMin}
                    max={PayChartData.optimalRangeMax}
                    pearson={PayChartData.pearsonCorr}/>
                </div>
              </div>
            </AccordionItemBody>
        </AccordionItem>
    </Accordion>
      </div>
    );
  }
}

export default App;
