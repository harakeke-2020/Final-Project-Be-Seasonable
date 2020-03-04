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
        <div className="about">
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <label>Email:</label>
              <input type="email" name="email" onChange={this.handleChange}/>
              <label>Name:</label>
              <input type="text" name="name" onChange={this.handleChange}/>
              <input type="submit" value="Submit" />
            </form>

          </div>
        </div>
      </>
    )
  }
}

export default Subscribe
