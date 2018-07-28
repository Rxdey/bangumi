import React from 'react'
import './animateList.less'
import LazyLoad from 'react-lazyload'
const AnimateList = (props) => {
  let { animateList } = props
  return (
    <div className="animate">
      <ul className="animate-list">
        {animateList.map(item => <AnimateItem item={item} key={item.animateId}></AnimateItem>)}
      </ul>
    </div>
  )
}
const AnimateItem = (props) => {
  let { item } = props
  return (
    <li className="animate-item">
      <div className="animate__cover">
        <LazyLoad height={100}>
          <img className="ignore" src={item.cover} alt="" />
        </LazyLoad>
      </div>
      <div className="animate__info">
        <div className="animate__info--left">
          <div className="animate__info--name ov_2"><span>{item.animateNameCN}</span><span>{item.animateNameJP?'/'+item.animateNameJP:''}</span></div>
          <p className="small"><span>{item.episode}</span><span>{item.year + '年' + item.month + '月'}</span></p>
          <p className="desc ov_3">{item.animateInfo}</p>
        </div>
        <div className="animate__info--score"><span className={item.score?'':'small'}>{item.score||'暂无'}</span></div>
        {/* <div className="rank">{item.rank}</div> */}
      </div>
    </li>
  )
}
export default AnimateList