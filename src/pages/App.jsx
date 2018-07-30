import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import './app.less'
import AnimateList from '../components/animateList/animateList.jsx'
import Tab from '../components/Tab/Tab.jsx'
import Search from '../components/Search/Search.jsx'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            animateList: [],
            page: 1,
            active: 0,
            search:'',
            order:'animateId'
        };
        this.tabList = [
            { title: '默认', order: 'animateId' },
            { title: '评分', order: 'score' },
            { title: '时间', order: '`year` desc, month' }
        ]
        this.loadData = this.loadData.bind(this)
        this.loadMore = this.loadMore.bind(this)
    }
    componentDidMount() {
        this.loadData({})
    }
    async loadData({ type = "desc",search=this.state.search,page = this.state.page} = {}) {
        try {
            let res = await window.$http(window.$api.getList, { page: page, pageSize: 10, order: this.state.order, type: type ,search:search })
            if (res.data.length) {
                let data = this.state.animateList
                this.setState({ animateList: data.concat(res.data) })
            } else {
                this.setState({ page: page-1})
            }
        } catch (err) {
            this.setState({
                page: this.state.page>0?this.state.page - 1:0
            })
        }
    }
    loadMore() {
        this.setState({
            page: this.state.page + 1
        }, () => {
            this.loadData()
        })
    }
    tabActive(key) {
        this.setState({
            active: key,
            page: 1,
            animateList: [],
            order: this.tabList[key].order
        }, () => {
            this.loadData({
                type: "desc", order: this.state.order
            })
        })
    }
    handleChange(val){
        this.setState({
            animateList:[],
            search:val
        },()=>{
            this.loadData({
                search:val,page:1
            })
        })
    }
    render() {
        return (
            <div className="page">
                <div className="page-view">
                    <div className="nav-bar">
                        <div className="search-bar">
                            <Search search={this.handleChange.bind(this)}></Search>
                        </div>
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