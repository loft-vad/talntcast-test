import s from './style.module.scss';

const Header = () => {

  return (
    <div className={s.wrapper}>
      <h4>KYC &amp; DUE DILIGENCE</h4>
      <h1>Add new customer</h1>
      <p>Estimated time: <strong>10 min</strong></p>
    </div>
  )
}

export default Header;