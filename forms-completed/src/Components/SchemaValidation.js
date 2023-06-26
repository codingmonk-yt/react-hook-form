import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Stack, Typography } from "@mui/material";

// Define the validation schema using yup
const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required();

export default function SchemaValidation() {
  // Initialize the useForm hook with yupResolver to handle schema validation
  const {
    register, // Function to register input fields
    handleSubmit, // Function to handle form submission
    formState: { errors }, // Object containing form validation errors
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Function to handle form submission
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <Typography variant="subtitle1">Schema Validation</Typography>
        
        {/* Input field registration for "firstName" with schema validation */}
        <input {...register("firstName")} />
        <p>{errors.firstName?.message}</p>
        
        {/* Input field registration for "age" with schema validation */}
        <input {...register("age")} />
        <p>{errors.age?.message}</p>
        
        {/* Submit button */}
        <input type="submit" />
      </Stack>
    </form>
  );
}
