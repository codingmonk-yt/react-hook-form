import { Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

export default function RegisterFields() {
  const { register, handleSubmit } = useForm();

  // Function to handle form submission
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <Typography variant="subtitle1">Register Fields</Typography>
        
        {/* Input field registration */}
        <input {...register("firstName")} />
        
        {/* Select field registration */}
        <select {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        
        {/* Submit button */}
        <input type="submit" />
      </Stack>
    </form>
  );
}
