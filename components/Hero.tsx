import Image from "next/image";
import { Box, Container, Typography, Stack, Button } from "@mui/material";
import { hero } from "@/lib/data";

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: "grey.900",
        color: "common.white",
        py: { xs: 6, md: 12 },
        textAlign: "center",
      }}
    >
      {/* Matrix background */}
      <Image
        src={hero.bgImage}
        alt="Matrix background"
        fill
        style={{ objectFit: "cover", opacity: 0.15 }}
        priority
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {hero.title}
        </Typography>
        <Typography variant="h6">
          {hero.subtitle}
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          mt={4}
        >
          {hero.cta.map((c) => (
            <Button
              key={c.label}
              href={c.href}
              component="a"
              variant="contained"
              color="primary"
              size="large"
            >
              {c.label}
            </Button>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
