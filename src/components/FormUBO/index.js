import s from './style.module.scss';
import Button from '../Button';
import IconButton from '../IconButton';
import FormField from '../FormField';

let formFields = [
  { fieldName: 'fullname', type: 'text', value: '', label: 'Full name', isRequired: true },
  { fieldName: 'personAddress', type: 'text', value: '', label: 'Address', isRequired: true },
  { fieldName: 'personZip', type: 'text', value: '', label: 'Postal code/zip', isRequired: true },
  { fieldName: 'email', type: 'email', value: '', label: 'Email', isRequired: true },
  { fieldName: 'billUBO', type: 'text', value: '', label: 'Upload Utility bill on UBO', isRequired: true },
  { fieldName: 'role', type: 'text', value: '', label: 'Role', isRequired: true },
  { fieldName: 'personApartment', type: 'text', value: '', label: 'Apartment, suite, etc.', isRequired: false },
  { fieldName: 'personCity', type: 'text', value: '', label: 'City', isRequired: true },
  { fieldName: 'passportUBO', type: 'text', value: '', label: 'Upload Passport on UBO', isRequired: true },
];

const FormUBO = ({ prevStep, nextStep }) => {

  return (
    <>
      <div>
        <p>Who is the Ultimate Beneficial Owner(s)?<br />
          UBO of a legal entity are the natural persons who directly or indirectly hold or control a stake of at least 25% in the caputal or of at least 25% of the voting rights of the company, or who undertake the de jure or de facto management of the legal entity.
        </p>
        <p>Details of the person(s) acting as representative(s) (the undersigned)</p>
      </div>
      <div className={s.formWrapper}>
        {formFields.map(({ fieldName, type, value, label, isRequired }) => (
          <FormField key={fieldName} fieldName={fieldName} type={type} value={value} label={label} isRequired={isRequired} />
        ))}
      </div>
      <div className={s.stepAddPanel}>
        <IconButton><em>+</em> Add person</IconButton>
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

export default FormUBO;