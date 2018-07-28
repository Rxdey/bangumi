import React from 'react'
import './loading.less'
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux'
class Loading extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }
  render() {
    return (
      <CSSTransition
        in={this.props.isLoading}
        timeout={300}
        classNames="fade"
        onEnter={() => {
          this.setState({
            loading: true
          })
        }}
        onExited={() => {
          this.setState({
            loading: false
          })
        }}
      >
        <div className="rx-loading" style={{ display: this.state.loading ? 'inherit' : 'none' }}>
          <div className="rx-loading--icon">
            <svg viewBox="25 25 50 50" className="circular">
            <circle cx="50" cy="50" r="20" fill="none" stroke="#5d9bfd" strokeWidth="5" strokeMiterlimit="10" className="path"></circle>
            </svg>
          </div>
        </div>
      </CSSTransition>
    )
  }
}

// export default Loading
const mapStateToProps = state => {
  return { isLoading: state.isLoading }
}
export default connect(mapStateToProps, )(Loading)