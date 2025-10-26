import Hero from "@/components/Hero";
import PartnerLogos from '@/components/PartnerLogos';
import Section from "@/components/Section";
import { sections } from "@/lib/data";
import { Stack, Button, List, ListItem, ListItemText } from "@mui/material";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Render each textual section */}
      {sections.map((sec) => (
        <Section key={sec.id} title={sec.title}>
          <List dense>
            {sec.items.map((it) => (
              <ListItem key={it}>
                <ListItemText primary={it} />
              </ListItem>
            ))}
          </List>

          {sec.cta && (
            <Stack direction="row" justifyContent="center" mt={2}>
              <Button
                variant="contained"
                color="primary"
                href={sec.cta.href}
                component="a"
              >
                {sec.cta.label}
              </Button>
            </Stack>
          )}
        </Section>
      ))}

      {/* Partner logos */}
      <Section title="Partner Companies">
        <PartnerLogos />
      </Section>
    </>
  );
}
