// _app.tsx

import "@/styles/globals.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import type { AppProps } from "next/app";
<% if (it.nextauth === true) { %>
import { SessionProvider } from 'next-auth/react';
<% } %>

<% if (it.nextauth === true) { %>
export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
      <SessionProvider session={session}>
          <Component {...pageProps} />
      </SessionProvider>
  )
}
<% } else { %>
export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
<% } %>

// EOF