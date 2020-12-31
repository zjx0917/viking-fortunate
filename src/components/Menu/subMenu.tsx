import React, {useState, useContext} from 'react'
import classNames from 'classnames'
// import {CSSTransition} from 'react-transition-group'
import {MenuContext} from './menu'
import MenuItem, {MenuItemProps} from './menuItem'
import Transition from '../Transition/transition'

export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const {index, title, className, children} = props;
  const [menuOpen, setOpen] = useState(false);
  const context = useContext(MenuContext);
  const classes = classNames('menu-item submenu-item', className, {'is-active': context.index === index});
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(!menuOpen);
  }
  let timer: any;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    // 使用 setTimeout 去除交界区域不断触发 onMouseEnter 与 onMouseLeave 事件
    timer = setTimeout(() => {
      setOpen(toggle);
    }, 300)
  }
  const clickEvents = context.mode === 'vertical'? {
    onClick: handleClick
  }: {}
  const hoverEvents = context.mode !== 'vertical'? {
    onMouseEnter: (e: React.MouseEvent) => {handleMouse(e, true)},
    onMouseLeave: (e: React.MouseEvent) => {handleMouse(e, false)}
  }: {}
  const renderChildren = () => {
    // 当 display 由 none 变成 block 的时候，动画效果会失效
    const subMenuClasses = classNames('viking-submenu', {'menu-opened': menuOpen});
    const childrenComponent  = React.Children.map(children, (child, i) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>;
      if(childElement.type.displayName === MenuItem.displayName){
        return React.cloneElement(childElement, {index: `{${index}-${i}}`});
      } else {
        console.error("Warning: SubMenu has a child which is not a MenuItem component")
      }
    })
    return(
      /**
       * 添加动画方案：不通过 display，而是通过操作 React Transition Group 中的节点，当 in 为 true，增加节点，为 false 移除节点
       * 通过 unmountOnExit 属性设置为 true 实现，默认值是 false
       */
      // <CSSTransition in={menuOpen} timeout={300} classNames='zoom-in-top' appear unmountOnExit>
      //   <ul className={subMenuClasses}>{childrenComponent}</ul>
      // </CSSTransition>
      <Transition animation = 'zoom-in-left' in={menuOpen} timeout={300}>
        <ul className={subMenuClasses}>{childrenComponent}</ul>
      </Transition>
    )
  }
  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
      </div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = 'SubMenu';
export default SubMenu