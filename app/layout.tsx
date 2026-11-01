import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="bg-[#09090c] text-slate-100">
        <Script src="/js/webmcp.js" strategy="afterInteractive" />
        {children}
      </body>
    </html>
  );
}
