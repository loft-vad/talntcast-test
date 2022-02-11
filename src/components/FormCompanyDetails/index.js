import s from './style.module.scss';
import Button from '../Button';
//import { useState } from 'react';
import FormField from '../FormField';

let formFields = [
  { fieldName: 'company', type: 'text', value: '', label: 'Company', isRequired: true },
  { fieldName: 'address', type: 'text', value: '', label: 'Address', isRequired: true },
  { fieldName: 'website', type: 'text', value: '', label: 'Postal code/zip', isRequired: true },
  { fieldName: 'zip', type: 'text', value: '', label: 'Website', isRequired: false },
  { fieldName: 'country', type: 'text', value: '', label: 'Country', isRequired: true },
  { fieldName: 'apartment', type: 'text', value: '', label: 'Apartment, suite, etc.', isRequired: false },
  { fieldName: 'city', type: 'text', value: '', label: 'City', isRequired: true },
  { fieldName: 'companyReg', type: 'text', value: '', label: 'Company registration from official register', isRequired: true },
];

const FormCompanyDetails = ({ prevStep, nextStep }) => {

  return (
    <>
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

export default FormCompanyDetails;