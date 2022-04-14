import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import FirstComponent from './components/learning-examples/FirstComponent'
import SecondComponent from './components/learning-examples/SecondComponent'
import ThirdComponent from './components/learning-examples/ThirdComponent'
import Counter from './components/counter/Counter'
import ToDoApp from './components/todo/ToDoApp';

class App extends Component {
  render() {
    return (
      <div className="counter">
        {/* <LearningComponents /> */}
        {/* <Counter by = "1"/>  */}
        {/* pass in a value by creating JSX expression */}
        {/* <Counter /> */}
        <ToDoApp />
      </div>
    );
  }
}

// class LearningComponents extends Component {
//   render() {
//     return (
//       <div className="LearningComponents">
//         <FirstComponent />
//         <SecondComponent />
//         <ThirdComponent />
//       </div>
//     );
//   }
// }

export default App;
