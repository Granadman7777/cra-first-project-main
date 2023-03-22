import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Greeting from './components/Greeting/Greeting';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
        <App/>
        <Greeting name='Alex'/>
        <Greeting name='Joy'/>
        <Greeting name='Jay'/>
        <Greeting name='Jons'/>
    </React.Fragment>
);
