

> # taro-scrollbar
>
> 项目地址: [https://github.com/w86wh2/taro-scrollbar](https://github.com/w86wh2/taro-scrollbar)

TaroScrollbar 基于taro的下拉刷新，上拉加载组件

> ### 使用方式

- **首先用npm安装**

  ```bash
  npm install --save taro-scrollbar
  ```

- **引入组件库**

  ```typescript
  import {
    TaroScrollbar
  } from 'taro-scrollbar';
  ```

- **在代码中使用**

  ```typescript
 
    <TaroScrollbar down={this.down} loadMore={this.loadMore} >
      <View className='container'>
      </View>
    </TaroScrollbar>
  ```

> ### 参数说明

|       参数名       |            参数类型            |                           参数说明                           | 默认值                |
| :----------------: | :----------------------------: | :----------------------------------------------------------: | --------------------- |
|       down        |             function             |                 下拉刷新触发                  |  |
|       loadMore       |             function             |                上拉加载触发                 |                  |


> ### 效果展示

<img src="./doc/example.gif" width="375"/>
