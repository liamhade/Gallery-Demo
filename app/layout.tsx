import "./globals.scss";
import "./_styles/cuo.scss";
import AppAuthProvider from "./_utils/providers/AppAuthProvider";
import AppThemeProvider from "./_utils/providers/AppThemeProvider";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </head>
      <body>
        <AppAuthProvider>
          <AppThemeProvider>{children}</AppThemeProvider>
        </AppAuthProvider>
      </body>
    </html>
  );
}
