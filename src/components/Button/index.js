import s from './style.module.scss';
import cn from 'classnames';

const Button = ({ isMain = false, onMouseEnter, onMouseLeave, onClick, children }) => {

  return (
    <button onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick} className={cn(s.button, { [s.mainButton]: isMain })}>{children}</button>
  )
}

export default Button;