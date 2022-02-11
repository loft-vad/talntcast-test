import s from './style.module.scss';

import logo from '../../assets/logo-small.png'

const Sidebar = () => {
  
  return(
    <div className={s.wrapper}>
      <img src={logo} alt=""/>
    </div>
  )
}

export default Sidebar;