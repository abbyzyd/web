import React, { Component } from "react";
import styles from './index.module.scss'

const menu = [
  { title: '首页', icon: '1', link: '/' },
  { title: '购物车', icon: 'gouwuchezhengpin', link: '/' },
  { title: '订单列表', icon: 'dingdanliebiao', link: '/' },
  { title: '用户中心', icon: 'icon-user-light', link: '/' },
]

export default class BottomNav extends Component {
  render() {
    const {activeNum,setActiveNum}=this.props

    return (
      <div className={styles.main}>
        {menu.map((item, index) => (
          <ItemMenu key={item.link} {...item} active={activeNum===index} onClick={()=>setActiveNum(index)}/>
        ))}
      </div>
    );
  }
}

function ItemMenu({ title, icon,active,onClick }) {
  return (
    <div className={active?styles.selected+'':''} onClick={onClick}>
      <span className={'iconfont icon-' + icon}></span>
      <span className={styles.title}>{title}</span>
    </div>
  )
}