import { Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

export default function HandlingErrors() {
  const {
    register, // Function to register input fields
    formState: { errors }, // Object containing form validation errors
    handleSubmit, // Function to handle form submission
  } = useForm();

  // Function to handle form submission
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <Typography variant="subtitle1">Handling Errors</Typography>
        
        {/* Input field with required validation */}
        <input
          {...register("firstName", { required: true })}
          aria-invalid={errors.firstName ? "true" : "false"}
        />
        
        {/* Display error message if the "firstName" field is required */}
        {errors.firstName?.type === "required" && (
          <p role="alert">First name is required</p>
        )}

        {/* Input field with custom error message */}
        <input
          {...register("mail", { required: "Email Address is required" })}
          aria-invalid={errors.mail ? "true" : "false"}
        />
        
        {/* Display error message if the "mail" field has a validation error */}
        {errors.mail && <p role="alert">{errors.mail?.message}</p>}

        {/* Submit button */}
        <input type="submit" />
      </Stack>
    </form>
  );
}
