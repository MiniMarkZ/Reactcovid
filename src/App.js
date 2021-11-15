import React from 'react';
import './App.css';
import Menu from './Menu';
import {Route , Link ,Switch} from 'react-router-dom';
import Navbar from './navbar';
import Csvsample from './csv/Csvsample';
import Csvtrainimage from './csv/Csvtrainimage';
import trainstudy from './csv/trainstudy';
import DcmViewer from './compronents/dcmfile';
import home from './home';
import Loading from './loading';


function App() {
  return (
    <div className="App">
      <Navbar />
      <section style={{display:"flex"}}>
        <Menu />
        <Switch>
          <Route exact path="/" component={home} />
          <Route path="/undefined" component={Loading} />
          <Route path="/projectdata/csv/sample_submission.csv" component={Csvsample} />
          <Route path="/projectdata/csv/train_image_level.csv" component={Csvtrainimage} />
          <Route path="/projectdata/csv/train_study_level.csv" component={trainstudy} />
            <Route path="/projectdata/*" exact>
             <DcmViewer />
            </Route>      
        </Switch>
      </section> 
    </div>
  );
}

export default App;
