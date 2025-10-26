import { Box, Container, Typography } from "@mui/material";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <Box py={4}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom align="center">
          {title}
        </Typography>
        {children}
      </Container>
    </Box>
  );
}
