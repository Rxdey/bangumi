import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import './app.less'
import AnimateList from '../components/animateList/animateList.jsx'
import Tab from '../components/Tab/Tab.jsx'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            animateList: [],
            page: 1,
            active:0
        };
        this.tabList = [
            {title:'默认',order:'id'},
            {title:'评分',order:'score'},
        ]
        this.loadData = this.loadData.bind(this)
        this.loadMore = this.loadMore.bind(this)
    }
    componentDidMount() {
        this.loadData()
    }
    async loadData({type="desc"}={}) {
        let res = await window.$http(window.$api.getList, { page: this.state.page, pageSize: 10 ,order:this.state.order,type:type})
        if (res.data.length) {
            let data = this.state.animateList
            this.setState({ animateList: data.concat(res.data) })
        } else {
            this.setState({ page: this.state.page - 1 })
        }
    }
    loadMore() {
        this.setState({
            page: this.state.page + 1
        }, () => {
            this.loadData()
        })
    }
    tabActive(key){
        this.setState({
            active: key,
            page:1,
            animateList:[],
            order:this.tabList[key].order
        },()=>{
            this.loadData({
                type:"desc",order:this.state.order
            })
        })
    }
    render() {
        return (
            <div className="page">
                <div className="page-view">
                    <div className="nav-bar">
                        <Tab tabList={this.tabList} active={this.state.active} tabChange={this.tabActive.bind(this)}></Tab>
                    </div>
                    <div className="content-bar">
                        <AnimateList animateList={this.state.animateList}></AnimateList>
                        <div className="next-page" onClick={this.loadMore}>more</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default App;