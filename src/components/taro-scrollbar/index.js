import Taro, { useState } from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import { AtActivityIndicator } from 'taro-ui'

import './index.scss'

export default function TaroScrollBar(props) {
  const {down = ()=> {}, loadMore = ()=> {}} = props
  const [downDragStyle, setDownDragStyle] = useState({height: 0 + 'px'})
  const [dargStyle, setDargStyle] = useState({ top: 0 + 'px' })
  const [downText, setDownText] = useState('下拉刷新')
  const [scrollY, setScrollY] = useState(true)
  const [dargState, setDargState] = useState(0) // 0不做操作 1刷新
  const [startP, setStartP] = useState({})

  const touchmove = e => {
    let move_p = e.touches[0],//移动时的位置
      deviationX = 0.30,//左右偏移量(超过这个偏移量不执行下拉操作)
      deviationY = 56,//拉动长度（低于这个值的时候不执行）
      maxY = 80;//拉动的最大高度
 
    let start_x = startP.clientX,
      start_y = startP.clientY,
      move_x = move_p.clientX,
      move_y = move_p.clientY
    let dev = Math.abs(move_x - start_x) / Math.abs(move_y - start_y)
    if (dev < deviationX) {//当偏移数值大于设置的偏移数值时则不执行操作
      if (move_y - start_y > 0) {//下拉操作
        let pY = Math.abs(move_y - start_y) / 3.5;//拖动倍率
        if (pY >= deviationY) {
          setDargState(1)
          setDownText('释放刷新')
        } else {
          setDargState(0)
          setDownText('下拉刷新')
        }
        if (pY >= maxY) {
          pY = maxY
        }
        setDargStyle({top: pY + 'px'})
        setDownDragStyle({height: pY + 'px'})
        setScrollY(false)
      }
  }
  }
  const touchEnd = e => {
    if (dargState === 1) {
      _down()
  }
    reduction()
  }
  const _down = () => {
    down()
  }
  const reduction = () => {
    // 刷新之后重置
    setDargStyle({top: 0 + 'px'})
    setDownDragStyle({height: 0 + 'px'})
    setScrollY(true)
    setDargState(0)
    setDownText('下拉刷新')
  }
  const touchStart = e => {
    setStartP(e.touches[0])
  }
  // console.log(info)
  const loadRecommend = () => {
    loadMore()
  }
  return (
    <View className='dragUpdataPage'>
      <View className='downDragBox' style={downDragStyle}>
          <AtActivityIndicator content={downText}></AtActivityIndicator>
      </View>
      <ScrollView
        style={dargStyle}
        className='home__wrap'
        scrollY={scrollY}
        onTouchMove={touchmove}
        onTouchEnd={touchEnd}
        onTouchStart={touchStart}
        onScrollToLower={() => loadRecommend()}
        scrollWithAnimation
      >
        {props.children}
      </ScrollView>
    </View>
  )
}
