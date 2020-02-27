import React from 'react'
import { connect } from 'react-redux'

function ErrorComponent (props) {
  return props.error
    ? <div data-testid={'error'} style={{ margin: '100px', textAlign: 'center', color: 'red' }}>
      <h1><b>{props.error}</b></h1>
    </div>
    : null
}

function mapStateToProps (state) {
  return {
    error: state.error
  }
}

export default connect(mapStateToProps)(ErrorComponent)
