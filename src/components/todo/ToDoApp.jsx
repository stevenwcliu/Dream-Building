import React, {Component} from 'react'

class ToDoApp extends Component {
    render() {
        return (
            <div className='TodoApp'>
                Today is the day.
                <LoginComponent/>
            </div>
        )
    }
}

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'saintliu',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    
    handleChange(event) { // create a generic event to handle changes
        // console.log(event.target.value);
        this.setState(
            {
                [event.target.name]: 
                event.target.value
            }
        )
    }

    loginClicked() {
        if(this.state.username ==='saintliu' && this.state.password ==='dummy') {
            console.log('Succesful')
            this.setState({showSuccessMessage: true})
            this.setState({hasLoginFailed: false})
        }
        else {
            console.log('Failed')
            this.setState({showSuccessMessage: false})
            this.setState({hasLoginFailed: true})
        }

        // console.log(this.state)
    }


    // handlePasswordChange(event) {
    //     console.log(event.target.value);
    //     this.setState({password: event.target.value})
    // }

    render() {
        return(
        <div>
            {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
            {/* optimize below */}
            {this.state.hasLoginFailed && <div>Invalid Credentials</div>} 
            {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage} /> */}
            {this.state.showSuccessMessage && <div>Login Successfully</div>}
            User Name: <input type="text" name="username" value = {this.state.username} onChange={this.handleChange}/>
            Password: <input type="password" name="password" value = {this.state.password} onChange={this.handleChange}/>
            <button onClick={this.loginClicked}>Login</button>
        </div>
        )
    }

}

// function ShowInvalidCredentials(props) {
//     if(props.hasLoginFailed) {
//         return <div>Invalid Credentials</div>
//     }
//     return null
// }

// function ShowLoginSuccessMessage(props) {
//     if(props.showSuccessMessage) {
//         return <div>Login Successfully</div>
//     }
//     return null
// }
export default ToDoApp
