import React from 'react'
import './scroller.less'

class Scroller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentHeight: 0,
      moveY: 0,
      animate: false
    };
    this.Pos = {
      startY: 0,
      nowY: 0,
      lastY: 0,
      lastTime: 0,
      endTime: 0
    }
    this.touchStart = this.touchStart.bind(this)
    this.touchMove = this.touchMove.bind(this)
    this.touchEnd = this.touchEnd.bind(this)
  }
  componentDidMount() {
    
  }
  touchStart(event) {
    event.preventDefault();
    let tans = this.refs.scroller.style.transform;
    this.Pos.lastY = parseInt(tans.replace(/[^0-9\-,]/g, ''));
    this.Pos.startY = event.touches[0].pageY;
    this.Pos.lastTime = Date.now();
    this.setState({
      animate: false,
      contentHeight: this.refs.scroller.offsetHeight
    })
  }
  touchMove(event) {
    event.preventDefault();
    this.Pos.nowY = event.touches[0].pageY;
    let speed = this.Pos.nowY - this.Pos.startY + this.Pos.lastY;
    this.setState({
      moveY: this.state.moveY >= 0 || this.state.moveY <= -(this.state.contentHeight - this.props.height + 20) ? speed = parseInt((speed - this.Pos.lastY) * 0.6) + this.Pos.lastY : speed
    })
  }
  touchEnd(event) {
    this.loading();
    let v = 0
    if (Math.abs(this.Pos.startY - event.changedTouches[0].pageY) > 10) {
      let endDate = Date.now() - this.Pos.lastTime;
      v = 100 / endDate * 300;
    }
    let den = this.state.moveY + parseInt(v)
    if (this.Pos.nowY - this.Pos.startY < 0) {
      den = this.state.moveY - parseInt(v)
    }
    this.setState({
      moveY: den,
      animate: true
    }, () => {
      this.fallBack()
    })
  }
  loading() {
    let pos = this.state.contentHeight >= this.props.height?-(this.state.contentHeight - this.props.height + 10):-50
    if (this.state.moveY <= pos) {
      this.props.onScrollToBottom()
    }
  }
  fallBack() {
    if (this.state.moveY > 0 || this.state.moveY <= -(this.state.contentHeight - this.props.height + 50)) {
      let moveY = this.state.moveY > 0 || this.state.contentHeight<this.props.height ? 0 : -(this.state.contentHeight - this.props.height + 50);
      this.setState({
        moveY: moveY,
        animate: true
      })
    }
  }
  reSet() {
    this.refs.scroller.style.transform = `translateY(0px)`
  }
  render() {
    return (
      <div className="rx-scroller" style={{ height: this.props.height + 'px' }} onTouchStart={this.touchStart} onTouchMove={this.touchMove} onTouchEnd={this.touchEnd}>
        <div className={this.state.animate ? 'rx-scroller-content animate' : 'rx-scroller-content'} ref="scroller" style={{ transform: 'translateY(' + this.state.moveY + 'px)' }}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Scroller