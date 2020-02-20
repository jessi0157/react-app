import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import InputText from './Components/inputGroup'
import * as serviceWorker from './serviceWorker';

// class Message extends React.Component {
//     render(){
//         return (
//             <>
//                 <InputText/>
//                 {/* <h1>{this.props.msg}</h1> */}
//             </>
//         )
//     }
// }
// const title = React.createElement(
//     'h1',
//     {id: 'title', className: 'header', style: style},
//     'Currency Converter'
// )
ReactDOM.render( <InputText/>, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
