import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';

const Landing = () => <div><h2>heading</h2></div>
const Student = () => <div><h2>Student</h2></div>

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact={true} path="/" component={Landing} />
                    <Route exact path="/student" component={Student} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;