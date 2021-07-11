import { EventType } from '@components/types';
import { useState } from 'react';

export default function useForm<T>(
  initialFormValues: T,
  validate: (formValues: T) => boolean,
  validateOnChange = false
) {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState<
    {
      [K in keyof T]?: string;
    }
  >({});
  const handleInputChange = (e: EventType) => {
    const { name, value } = e.target;
    // console.log(name);
    // console.log(value);
    setValues({
      ...values,
      [name]: value,
    });
    if (validateOnChange) {
      validate({
        [name]: value,
      } as T);
    }
  };
  const resetForm = () => {
    setValues(initialFormValues);
    setErrors({});
  };
  return {
    values,
    setValues,
    handleInputChange,
    errors,
    setErrors,
    resetForm,
  };
}
