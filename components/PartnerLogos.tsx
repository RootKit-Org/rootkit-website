import { Box, Stack } from "@mui/material";

export default function PartnerLogos() {
  const logos = [
    { src: "/assets/c-logo-light.png", alt: "Partner Clarity" },
  ];

  return (
    <Stack direction="row" spacing={4} justifyContent="center">
      {logos.map((l) => (
        <Box key={l.alt} component="img" src={l.src} alt={l.alt} height={40} />
      ))}
    </Stack>
  );
}
