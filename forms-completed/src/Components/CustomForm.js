import { Stack, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

// The following component is an example of your existing Input Component
const Input = ({ label, register, required }) => (
  <>
    <label>{label}</label>
    <input {...register(label, { required })} />
  </>
);

// you can use React.forwardRef to pass the ref too
const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
  <>
    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </>
));

const CustomForm = () => {
  const { register, handleSubmit } = useForm();

  // Function to handle form submission
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <Typography variant="subtitle1">Custom Form</Typography>
        
        {/* Custom Input component usage */}
        <Input label="First Name" register={register} required />
        
        {/* Custom Select component usage */}
        <Select label="Age" {...register("Age")} />
        
        {/* Submit button */}
        <input type="submit" />
      </Stack>
    </form>
  );
};

export default CustomForm;
