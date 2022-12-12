import { useFormContext } from 'react-hook-form';
import { DynamicFieldData } from '@/typings/dynamic-control-types';
import styles from '@/styles/components/dynamicControl.module.scss';
export const DynamicControl = ({
  inputType,
  fieldName,
  defaultValue,
  options = [],
  config = {},
}: DynamicFieldData) => {
  const { register } = useFormContext();
  
  switch (inputType) {
    case 'text':
      return (
        <input
          id={fieldName}
          className={styles.input}
          type='text'
          {...register(fieldName, config)}
          defaultValue={defaultValue}
        />
      );
    case 'password':
      return (
        <input
          id={fieldName}
          className={styles.input}
          type='password'
          {...register(fieldName, config)}
          defaultValue={defaultValue}
        />
      );
    case 'email':
      return (
        <input
          id={fieldName}
          className={styles.input}
          type='email'
          {...register(fieldName, config)}
          defaultValue={defaultValue}
        />
      );
    case 'select': {
      return (
        <select
          {...register(fieldName, config)}
          defaultValue={defaultValue}
          name={fieldName}
          id={fieldName}>
          {options.map((o, index) => (
            <option key={index} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      );
    }
    case 'checkbox': {
      return (
        <input
          className={styles.input}
          type='checkbox'
          {...register(fieldName, config)}
          defaultValue={defaultValue}
        />
      );
    }
    case 'number':
      return (
        <input
          className={styles.input}
          type='number'
          {...register(fieldName, config)}
          defaultValue={defaultValue}
        />
      );
    default:
      return <input className={styles.input} type='text' />;
  }
};
