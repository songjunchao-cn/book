import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, NavInput, Addition, Button, SearchWrapper } from './style';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focused: false
    }
    this.handleInputFocuse = this.handleInputFocuse.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left'>首页</NavItem>
          <NavItem className='left'>下载app</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <i className='iconfont'>&#xe603;</i>
          </NavItem>
          <SearchWrapper>
          <CSSTransition
          in={this.state.focused}
          timeout={900}
          classNames="slide"
          >
          <NavInput
          className={this.state.focused ? 'focused' : ''}
          onFocus={this.handleInputFocuse}
          onBlur={this.handleInputBlur}/>
          </CSSTransition>
          <i className={this.state.focused ? 'focused iconfont' : 'iconfont'} >&#xe617;</i>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='reg'>注册</Button>
          <Button className='writting'>
          <i className='iconfont'>&#xe7ce;</i>写文章
          </Button>
        </Addition>
      </HeaderWrapper>
    );
  }
  handleInputFocuse() {
    this.setState({
      focused: true
    })
  };
  handleInputBlur() {
    this.setState({
      focused: false
    })
  }
}

export default Header;
