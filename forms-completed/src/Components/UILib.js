import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { Stack, TextField, Typography } from "@mui/material";

const UILib = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      select: {},
    },
  });

  // Function to handle form submission
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <Typography variant="subtitle1">Integrating UI Library</Typography>
        
        {/* Text field integration using the Controller */}
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => <TextField {...field} />}
        />
        
        {/* Select field integration using the Controller */}
        <Controller
          name="select"
          control={control}
          render={({ field }) => (
            <Select
              menuPlacement="top"
              {...field}
              options={[
                { value: "chocolate", label: "Chocolate" },
                { value: "strawberry", label: "Strawberry" },
                { value: "vanilla", label: "Vanilla" },
              ]}
            />
          )}
        />
        
        {/* Submit button */}
        <input type="submit" />
      </Stack>
    </form>
  );
};

export default UILib;
