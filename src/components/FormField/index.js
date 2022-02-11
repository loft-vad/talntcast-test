import s from './style.module.scss';
import { useState } from 'react';

const FormField = ({ type = 'text', fieldName, classList = '', value = '', label = '', isRequired = false }) => {

  const [fieldState, setFieldState] = useState(value);
  const [isValid, setIsValid] = useState(true);

  const onChange = (e) => {
    setFieldState(e.target.value);
  };

  return (
    <div className={classList}>
      <label htmlFor={fieldName}>{label}{isRequired ? ' *' : ''}</label>
      <input
        type={type}
        name={fieldName}
        value={fieldState}
        onChange={onChange}
      ></input>
    </div>
  )
}

export default FormField;