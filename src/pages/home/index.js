import React, { Component } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';


import { HomeWrapper,
         HomeLeft,
         HomeRight,
} from './style'

class Home extends Component {
    render() {
      return(
        <HomeWrapper>
           <HomeLeft>
             <img
              className='banner-img'
              src="//upload.jianshu.io/admin_banners/web_images/4424/28fa64c724d3d67bc47994c5b9e43b43474069d9.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540"/>
             <Topic/>
             <List/>
           </HomeLeft>
           <HomeRight>right
           <Recommend/>
             </HomeRight>
             <Writer/>
        </HomeWrapper>
      )
    }
}

export default Home;