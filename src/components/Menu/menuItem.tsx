import React, {useContext} from 'react'
import classNames from 'classnames'
import {MenuContext} from './menu'

export interface MenuItemProps {
  index?: string;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const {index, className, style, disabled, children} = props;
  const context = useContext(MenuContext);
  const classes = classNames('menu-item', className, {'is-disabled': disabled, 'is-active': context.index === index});
  const handleClick = () => {
    if(context.onSelect && !disabled && (typeof index === 'string')){
      context.onSelect(index);
    }
  }
  return (
    <li className={classes} style={style} onClick={handleClick}>{children}</li>
  )
}

// displayName 是 React 内置的一个静态属性，可以判断组件的类型
MenuItem.displayName = 'MenuItem';
export default MenuItem



