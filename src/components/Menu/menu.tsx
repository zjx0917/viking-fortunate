import React, {useState, createContext} from 'react'
import classNames from 'classnames'
import {MenuItemProps} from './menuItem'

type MenuMode = 'horizontal' | 'vertical';
type SelectCallback = (selectedIndex: string) => void;
export interface MenuProps {
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
}
interface IMenuContext {
  index: string;
  onSelect?: SelectCallback;
  mode?: MenuMode;
}

export const MenuContext = createContext<IMenuContext>({index: '0'});
const Menu: React.FC<MenuProps> = (props) => {
  const { className, mode, style, children, defaultIndex, onSelect } = props
  const classes = classNames('viking-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode === 'horizontal'
  });
  const [currentActive, setActive] = useState(defaultIndex);
  const handleClick = (index: string) => {
    setActive(index);
    if(onSelect) {
      onSelect(index);
    }
  }
  const passedContext: IMenuContext = {
    index: currentActive || '0',
    onSelect: handleClick,
    mode: mode
  }
const renderChildren =  () => {
  /**
   * React.Children 提供了用于处理 this.props.children 不透明数据结构的实用方法，children 可以是任何类型
   * React.Children.map(children, func, context) 在 React 每个直接子节点上调用 func 函数，如果 children 是一个数组，它将被遍历并为数组中每个子节点调用该函数
   * 如果 children 中遇到一些不合规则的类型，map会跳过这些类型，避免出现错误
   */
  return React.Children.map(children, (child, index) => {
    // 将 child 类型断言为 React.FunctionComponentElement<MenuItemProps>
    const childElement = child as React.FunctionComponentElement<MenuItemProps>;
    const {displayName} = childElement.type;
    if(displayName === 'MenuItem' || displayName === 'SubMenu'){
      // index 是一个 number，需要转化为 string
      return React.cloneElement(childElement, {index: index.toString()});
    } else {
      console.error("Warning: Menu has a child which is not a MenuItem component");
    }
  })
}
  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}
Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
}

export default Menu