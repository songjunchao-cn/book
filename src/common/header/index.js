import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { 
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavInput,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
} from './style';

class Header extends Component {
  getListArea() {
    const { focused, list, page, mouseIn, totalPage, handleMouseEnter, 
            handleMouseLeave, handleChangePage} = this.props;
    const pageList = [];
    const newList = list.toJS();
    for (let index = (page - 1) * 10; index < page * 10; index++) {
      if(newList[index]) {
      pageList.push(
        <SearchInfoItem key={newList[index]}>{newList[index]}</SearchInfoItem>
      )
      }      
    }
    if(focused || mouseIn){
    return (
      <SearchInfo 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
        <SearchInfoTitle>热门搜索
        <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)  }>
          <i ref={(icon)=>{this.spinIcon = icon}} className='SearchInfoIcon iconfont spin'>&#xe603;</i>
          换一批  
        </SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          {pageList}
        </SearchInfoList>
      </SearchInfo>
    )
  }
  else {
    return null;
  }
  }
  render() {
    const { focused, handleInputFocus, handleInputBlur, list} = this.props
    return( 
      <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载app</NavItem>
        <NavItem className='right'>登录</NavItem>
        <NavItem className='right'>
          <i className='iconfont'>&#xe603;</i>
        </NavItem>
        <SearchWrapper>
        <CSSTransition
        in={focused}
        timeout={900}
        classNames="slide"  
        >
        <NavInput
        className={focused ? 'focused' : ''}
        onFocus={()=>handleInputFocus(list)}
        onBlur={handleInputBlur}/>
        </CSSTransition>
        <i className={focused ? 'focused iconfont' : 'iconfont'} >&#xe617;</i>
        {this.getListArea()}
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
}
const mapStateToProps = (state) =>{
  return {
    focused: state.getIn(['header','focused']),
    list: state.getIn(['header','list']),
    page: state.getIn(['header','page']),
    mouseIn: state.getIn(['header','mouseIn']),
    totalPage: state.getIn(['header','totalPage']),
  }
}
const mapDispathToProps = (dispatch) =>{
  return {
    handleInputFocus(list) {
      (list.size === 0) &&  dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());  
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());  
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());  
    },
    handleChangePage(page,totalPage,spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate('+(originAngle + 360) + 'deg)';
      if (page < totalPage) {
        dispatch(actionCreators.pageChange(page + 1));
      } else {
        dispatch(actionCreators.pageChange(1));
      }
       
    },
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);
