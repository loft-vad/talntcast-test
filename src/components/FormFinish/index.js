import s from './style.module.scss';
import Button from '../Button';
import { useState } from 'react';

const FormFinish = ({ firstStep }) => {
  const [isCancelButton, setIsCancelButton] = useState(true);

  return (
    <>
      <div>
        <p>Your customer is now approved</p>
      </div>
      <div className="stepControls">
        <Button
          onMouseEnter={() => setIsCancelButton(false)}
          onMouseLeave={() => setIsCancelButton(true)}
          onClick={firstStep}
        >
          {isCancelButton && (
            <>Close</>
          )}
          {!isCancelButton && (
            <>Next</>
          )}
        </Button>
      </div>
    </>
  )
}

export default FormFinish;