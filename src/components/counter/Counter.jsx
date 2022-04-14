import React, { Component } from 'react';
import './Counter.css'
import PropTypes from 'prop-types'

class Counter extends Component { // parent-child relationship between counter and counterbutton class
    
    constructor() { // define the initial state of the counter
        super(); // Error 1
        this.state = {
            counter : 0 // state of the TOTAL count
        } 
        this.increment = this.increment.bind(this) // binding the increment method
        this.decrement = this.decrement.bind(this) // binding the decrement method
        this.reset = this.reset.bind(this)
    }

    render() {
        return (
          <div className="counter">
            <CounterButton by = {1} incrementMethod={this.increment} decrementMethod={this.decrement}/>  {/* pass a reference, not the method itself */}
            <CounterButton by = {5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButton by = {10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButton by = {50} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <span className='count'>{this.state.counter}</span>
            <div>
                <button className='reset' onClick={this.reset}>Reset</button>
            </div>
          </div>
        );
      }

    reset() {
        this.setState( 
            (prevState) => { 
            return {counter: 0}
            }
        ); 
    }

    increment(by) {
        this.setState( // the setState returns the counter object back
            (prevState) => { // the arrow func takes prevState as parameter
            return {counter: prevState.counter + by}
            }
        ); 

    }

    decrement(by) {
        this.setState( 
            (prevState) => { 
            return {counter: prevState.counter - by}
            }
        ); 
    }
}
class CounterButton extends Component {

    constructor() { // define the initial state in a ctor
        super(); // Error 1
    }
    render() {
        return (
            <div className="counterButton">
                <button onClick = {() => this.props.incrementMethod(this.props.by)}> +{this.props.by} </button>
                <button onClick = {() => this.props.decrementMethod(this.props.by)}> -{this.props.by} </button>
            </div>
        )
    }

    // GOAL: call the increment method in the Counter class in the CounterButton
    // in other words: call a parent method from a child component
    // sol: passing in the method as a property to the child component

  }

  CounterButton.defaultProps = {
      by : 1
  }

  CounterButton.propTypes = {
      by : PropTypes.number
  }

  export default Counter