import { Box, Typography, Container } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" py={3} bgcolor="grey.100">
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} RootKit. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
