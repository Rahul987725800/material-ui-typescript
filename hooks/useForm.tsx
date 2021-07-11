import { EventType } from '@components/types';
import { useState } from 'react';

export default function useForm<T>(initialFormValues: T) {
  const [values, setValues] = useState(initialFormValues);
  const handleInputChange = (e: EventType) => {
    const { name, value } = e.target;
    // console.log(name);
    // console.log(value);
    setValues({
      ...values,
      [name]: value,
    });
  };
  return {
    values,
    setValues,
    handleInputChange,
  };
}
