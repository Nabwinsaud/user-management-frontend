import { useState } from "react";

export default function useForm<T>(
  initialValue: T
): [T, (event: React.ChangeEvent<HTMLInputElement>) => void] {
  const [form, setForm] = useState<T>(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  return [form, handleChange];
}
