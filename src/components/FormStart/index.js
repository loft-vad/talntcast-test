import s from './style.module.scss';
import Button from '../Button';

const FormStart = ({ nextStep }) => {

  return (
    <>
      <div>
        <p>You need to upload and complete KYC & Due Diligence. Input your basic information about the customer and add the UBO. And upload KYC documents and make Due diligence.</p>
      </div>
      <div className={s.stepControls}>
        <Button onClick={nextStep}>Start</Button>
      </div>
    </>
  )
}

export default FormStart;