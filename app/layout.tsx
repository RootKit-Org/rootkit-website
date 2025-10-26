import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { inter } from './fonts';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import theme from './theme';

export const metadata = {
  title: 'RootKit - Computer Science Certifications',
  description:
    'Industry\'s best Computer Science certifications - open source, community driven, cutting‑edge.',
  openGraph: {
    title: 'RootKit - Computer Science Certifications',
    description:
      'Industry\'s best Computer Science certifications - open source, community driven, cutting‑edge.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box display="flex" flexDirection="column" minHeight="100vh">
              <Header />
              <Box component="main" flex="1" py={4}>
                {children}
              </Box>
              <Footer />
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
