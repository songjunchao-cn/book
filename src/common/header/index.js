import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, NavInput, Addition, Button, SearchWrapper } from './style';
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators';

const Header = (props) => {
  return( 
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
    in={props.focused}
    timeout={900}
    classNames="slide"  
    >
    <NavInput
    className={props.focused ? 'focused' : ''}
    onFocus={props.handleInputFocus}
    onBlur={props.handleInputBlur}/>
    </CSSTransition>
    <i className={props.focused ? 'focused iconfont' : 'iconfont'} >&#xe617;</i>
    </SearchWrapper>
  </Nav>
  <Addition>
    <Button className='reg'>注册</Button>
    <Button className='writting'>
    <i className='iconfont'>&#xe7ce;</i>写文章
    </Button>
  </Addition>
</HeaderWrapper>);
  }
const mapStateToProps = (state) =>{
  return {
    focused: state.header.focused  
  }
}
const mapDispathToProps = (dispatch) =>{
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());  
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);
