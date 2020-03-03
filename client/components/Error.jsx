import React from 'react'
import { connect } from 'react-redux'

function ErrorComponent (props) {
  return props.error
    ? <div data-testid={'error'} style={{ margin: '100px', textAlign: 'center' }}>
      <h2>Bananas! We had a problem</h2>
      <p>{props.error}</p>
      <img style={{ width: '200px' }} src='/waiting.gif' alt='🌶️ HOLD UP BUDDY 🌶️' />
    </div>
    : null
}

function mapStateToProps (state) {
  return {
    error: state.error
  }
}

export default connect(mapStateToProps)(ErrorComponent)
