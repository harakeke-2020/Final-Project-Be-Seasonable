import React from 'react'

import { addSubscriber } from '../api/addSubscriber'

class Subscribe extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      subscriber: {
        email: '',
        name: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    const newSubscriber = {
      ...this.state.subscriber,
      [e.target.name]: e.target.value
    }
    this.setState({
      subscriber: newSubscriber
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    addSubscriber(this.state.subscriber)
      .then(() => {
        this.props.history.push('/')
      })
  }

  render () {
    return (
      <>
        <div className="container email">
          <h1>Sign up for email</h1>
          <p>On the first of every month, we&apos;ll email you a list of the produce in season.</p>
          <p>Don&apos;t worry, we won&apos;t sell you anything or share your details with anyone.</p>
          <form onSubmit={this.handleSubmit}>
            <label>Email:</label>
            <input type="email" name="email" onChange={this.handleChange}/>
            <label>Name:</label>
            <input type="text" name="name" onChange={this.handleChange}/>
            <button type="submit" value="Submit"><span>Submit</span></button>
          </form>

        </div>
      </>
    )
  }
}

export default Subscribe
