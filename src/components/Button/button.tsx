// 写成 import React, {FC, ButtonHTMLAttributes, AnchorHTMLAttributes} from 'react' 是为了支持 react-docgen-typescript-loader
import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import classNames from "classnames";

// enum 的 使用
// export enum ButtonSize {
//   Large = 'lg',
//   Small = 'sm'
// }

// export enum ButtonType {
//   Primary = 'primary',
//   Default = 'default',
//   Danger = 'danger',
//   Link = 'link'
// }

export type ButtonSize = "lg" | "sm";

export type ButtonType = "primary" | "default" | "danger" | "link";

export interface BaseButtonProps {
  /**自定义 Button 的 class */
  className?: string;
  /**设置 Button 的禁用 */
  disabled?: boolean;
  /**设置 Button 的尺寸 */
  size?: ButtonSize;
  /**设置 Button 的类型 */
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}

// 通过 React.ButtonHTMLAttributes 可以拿到 button 的所有属性，并接受一个范型，这里是 HTMLElement
// 通过 AnchorHTMLAttributes 可以拿到 a 的所有属性，并接受一个范型，这里是 HTMLElement
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;

export type ButtonProps = NativeButtonProps & AnchorButtonProps;
// 此处的 export 是为了支持 react-docgen-typescript-loader
/**
 * Button Component
 * @param props
 */

export const Button: FC<ButtonProps> = (props) => {
  const {
    btnType,
    disabled,
    size,
    children,
    href,
    ...restProps // 通过 ...restProps 存放 props 的其他属性
  } = props;

  const classes = classNames("btn", {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === "link" && disabled,
  });
  if (btnType === "link" && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: "default",
};

export default Button;
