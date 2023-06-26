import { Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

export default function Validation() {
  const { register, handleSubmit } = useForm();

  // Function to handle form submission
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <Typography variant="subtitle1">Validation</Typography>
        
        {/* Input field for "firstName" with required and maxLength validation */}
        <input {...register("firstName", { required: true, maxLength: 20 })} />
        
        {/* Input field for "lastName" with pattern (alphabet characters only) validation */}
        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
        
        {/* Input field for "age" with min and max value validation */}
        <input type="number" {...register("age", { min: 18, max: 99 })} />
        
        {/* Submit button */}
        <input type="submit" />
      </Stack>
    </form>
  );
}
