import { useState } from 'react';
export default function useForm<T>(initialFormValues: T) {
  const [values, setValues] = useState(initialFormValues);
  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
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
