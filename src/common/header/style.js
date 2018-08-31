import styled from 'styled-components'
import logoUrl from '../../static/logo.png'

export const HeaderWrapper = styled.div`
  height: 56px;
  border: 1px solid #f0f0f0;
  position: relative;
  font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif; */
`;
export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  height: 56px;
  width:100px;
  background: url(${logoUrl});
  background-size: contain;
  // 多行文本嵌变量
`;
export const Nav = styled.div`
  height: 100%;
  width: 960px;
  margin: 0 auto; 
  padding-right: 70px;
  box-sizing: border-size;
`;
export const NavItem =styled.div`
  padding: 0 15px;
  color: #333;
  font-size: 15px;
  height: 56px;
  line-height: 56px;
  &.left {
    float: left;
    cursor: pointer;
  }
  &.active {
    color:  #ea6f5a
  }
  &.right {
    float: right
    color: #969696
    cursor: pointer;
  }
`;

export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    height: 100%;
    .iconfont {
      position: absolute;
      right: 5px;
      bottom: 13px;
      width: 30px;
      height:30px;
      border-radius: 45px;
      text-align: center;
      line-height: 30px;
      font-size: 17px;
      &.focused {
        background: #969696;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
      }
    }
    .slide-enter {
      transition: all .9s ease-out
    }
    .slide-exit {
      transition: all .9s ease-out
    }
  `
  
export const NavInput =styled.input.attrs(
{
  placeholder: '搜索'
})`
  width: 158px;
  height: 38px;
  border-radius: 45px;
  border: 1px solid #eee;
  outline: none
  padding: 0 38px 0 20px;
  box-sizing: border-box;
  margin-top: 9px;
  background: #eee;
  margin-left: 20px;
  color: #777;
  font-size: 17.5px;
  &::placeholder {
    color: #999;
    font-size: 14.5px;  
  }
  &.focused {
    width: 250px;
  }
`;

export const SearchInfo = styled.div `
  position: absolute;
  left: 20px;
  top: 56px;
  width: 210px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2)
`
export const SearchInfoTitle = styled.div `
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 10px;
  font-size: 14px;
  color: #969696;
`
export const SearchInfoSwitch = styled.span `
  float: right;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    color: #333
  }
  .SearchInfoIcon {
    position: absolute;
    right: 50px;
    top: 10px;
    font-size: 10px;
  }
  .spin {
    display: block;
    float: left;
    transition: all .3s ease-in;
    transform: rotate(100deg);
    transform-origin: center center;
  }
`
export const SearchInfoItem = styled.a`
  display: block;
  line-height: 20px;
  padding: 0 5px;
  border: 1px solid #ddd;
  border-radius: 3px;
  font-size: 12px;
  color: #787878;
  color: #969696;
  float: left;
  margin-left: 10px;
  margin-bottom: 10px;
  &:hover {
    color: #333
  }
`
export const SearchInfoList = styled.div`
  overflow: hidden;
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
  `;
export const Button = styled.button`
  float: left
  height: 38px;
  border: 1px solid rgba(236,97,73,.7);
  border-radius: 20px;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  font-size: 15px;
  cursor: pointer;
  outline: none;
  &.reg {
    color: #ec6149;
    background: #fff
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
  `;



