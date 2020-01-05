import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtCard } from "taro-ui"
import TaroScrollbar from '../../components/taro-scrollbar';
import './index.scss'

export default class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          note: '标题1',
          title: 'title',
          content: '文本内容'
        },
        {
          note: '标题1',
          title: 'title',
          content: '文本内容'
        },
        {
          note: '标题1',
          title: 'title',
          content: '文本内容'
        },
        {
          note: '标题1',
          title: 'title',
          content: '文本内容'
        },
        {
          note: '标题1',
          title: 'title',
          content: '文本内容'
        },
        {
          note: '标题1',
          title: 'title',
          content: '文本内容'
        },
        {
          note: '标题1',
          title: 'title',
          content: '文本内容'
        }
      ]
    }
  }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  down() {
    console.log('下拉刷新')
  }
  loadMore() {
    console.log('上拉加载')
  }

  render () {
    const { list } = this.state
    return (
      <View className='index'>
        <TaroScrollbar down={this.down} loadMore={this.loadMore} >
          <View className='container'>
            {
              list.map((item, index) => {
                return <AtCard
                  key={index}
                  note={item.note}
                  title={item.title}
                >
                  {item.content}
                </AtCard>
              })
            }
          
          </View>
        </TaroScrollbar>
      </View>
    )
  }
}
