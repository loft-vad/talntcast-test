import s from './style.module.scss';
import cn from 'classnames';

const IconButton = ({ isMain = false, children }) => {

  return (
    <button className={cn(s.iconButton, { [s.mainButton]: isMain })}>{children}</button>
  )
}

export default IconButton;