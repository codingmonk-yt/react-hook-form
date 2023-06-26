import { Box, Card, CardContent, Container, Grid } from "@mui/material";
import React from "react";
import {
  Register,
  Validate,
  Custom,
  UILib,
  HandlingError,
  SchemaValidation,
} from "./Components";

const App = () => {
  return (
    <Container>
      <Box sx={{ width: 1, height: "100vh", pt: 4 }}>
        <Grid container spacing={3}>
          {/* Register component */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Register />
              </CardContent>
            </Card>
          </Grid>
          
          {/* Validate component */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Validate />
              </CardContent>
            </Card>
          </Grid>
          
          {/* Custom component */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Custom />
              </CardContent>
            </Card>
          </Grid>
          
          {/* UILib component */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <UILib />
              </CardContent>
            </Card>
          </Grid>
          
          {/* HandlingError component */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <HandlingError />
              </CardContent>
            </Card>
          </Grid>
          
          {/* SchemaValidation component */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <SchemaValidation />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default App;
