import { Box, Card, CardContent, Container, Grid } from "@mui/material";
import React from "react";

const App = () => {
  return (
    <Container>
      <Box sx={{ width: 1, height: "100vh", pt: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                {/* Content */}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default App;
