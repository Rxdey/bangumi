import React from 'react'
import './Search.less'
// import { Icon } from 'antd-mobile'
import PropTypes from 'prop-types';
class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value:''
    }
  }
  handleKeyDown(e) {
    if (e.keyCode === 13 ) {
        this.props.search(this.state.value);
    }
  }
  handleChange(e)     {
    this.setState({value: e.target.value});
 }
  render() {
    return (
      <div className="rx-search-box">
       <div className="from-group">
        <input type="search" name="rx-search" className="rx-search" onChange={this.handleChange.bind(this)} onKeyDown={this.handleKeyDown.bind(this)} placeholder={this.props.placeholder} />
        <i className="iconfont icon-search"></i>
       </div>
    </div>
    )
  }
}
Search.propTypes = {
  placeholder:PropTypes.string||PropTypes.number
}
Search.defaultProps = {
  placeholder:'请输入搜索内容'
}
export default Search