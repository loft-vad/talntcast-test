import s from './style.module.scss';
import Button from '../Button';
import FormField from '../FormField';

let formFields = [
  { fieldName: 'monthlyVolume', type: 'text', value: '', label: 'Estimated monthly volume in €', isRequired: true },
  { fieldName: 'transactionSize', type: 'text', value: '', label: 'Estimated average transaction size in €', isRequired: true },
];

const FormEstimatedMonthly = ({ prevStep, nextStep }) => {

  return (
    <>
      <div>
        <p>What is the estimated monthly volume in € and what is the average transaction size in €</p>
      </div>
      <div className={s.formWrapper}>
        {formFields.map(({ fieldName, type, value, label, isRequired }) => (
          <FormField key={fieldName} fieldName={fieldName} type={type} value={value} label={label} isRequired={isRequired} />
        ))}
      </div>
      <div className={s.stepControls}>
        <Button onClick={prevStep}>Back</Button>
        <Button onClick={nextStep} isMain>Next</Button>
      </div>
      <div className={s.stepInfo}>
        Items with an asterisk (*) are mandatory.
      </div>
    </>
  )
}

export default FormEstimatedMonthly;