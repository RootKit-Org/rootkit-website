import {
  AppBar,
  Toolbar,
  Button,
  Stack,
  Container,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <AppBar position="static" color="default" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Link href="/" passHref>
            <Image alt='Rootkit' src="/assets/Logo-1.png" height={30} width={133} />
          </Link>

          <Stack direction="row" spacing={2}>
            <Link href="/certifications" passHref>
              <Button component="a" color="primary">
                Certifications
              </Button>
            </Link>
            <Link href="/shop" passHref>
              <Button component="a" color="primary">
                Shop
              </Button>
            </Link>
            <Link href="/volunteer" passHref>
              <Button component="a" color="primary">
                Volunteer
              </Button>
            </Link>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
