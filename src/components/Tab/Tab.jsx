import React from 'react';
// import {Link} from 'react-router-dom'
import './Tab.less'

class Tab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sliderWidth: 0,
      sliderLeft: 0
    }

    this.tabList = this.props.tabList
    this.sliderBarWidth = this.props.sliderBarWidth;
  }
  componentDidMount() {
    this.setState({
      sliderWidth: this.refs.tab.clientWidth / this.tabList.length
    }, () => {
      this.setState({
        sliderLeft: this.state.sliderWidth * this.props.active + 'px'
      })
    })
  }
  tabActive(key) {
    let left = this.state.sliderWidth * key + 'px'
    this.setState({
      sliderLeft: left
    }, () => {
      this.props.tabChange(key)
    })
  }
  render() {
    return (
      <div className="tab-list">
        <ul ref="tab">
          {this.tabList.map((item, key) => <li className={this.props.active == key ? 'active tab-item' : 'tab-item'} onClick={this.tabActive.bind(this, key)} key={key}>
            <div className="tab-content">
              {item.title}
            </div>
          </li>)}
        </ul>
        <div className="slide-bar" style={{ width: this.state.sliderWidth, left: this.state.sliderLeft }}>
          <span className="slide-line" style={{ width: this.sliderBarWidth }}></span>
        </div>
      </div>
    )
  }
}
Tab.defaultProps = {
  active: 0,
  sliderBarWidth:'10vw',
  tabChange:(key)=>{}
}
export default Tab