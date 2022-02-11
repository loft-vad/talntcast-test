import s from './style.module.scss';
import Button from '../Button';
import FormField from '../FormField';

let formFields = [
  { fieldName: 'businessType', type: 'text', value: '', label: 'Choose the type of nature of business?', isRequired: true },
];

const FormNatureOfBusiness = ({ prevStep, nextStep }) => {

  return (
    <>
      <div>
        <p>What is the nature of the business transaction?</p>
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

export default FormNatureOfBusiness;