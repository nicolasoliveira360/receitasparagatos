import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import Image from "next/image";
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "20 Receitas Caseiras Balanceadas para Gatos | Alimentação Natural Felina",
  description: "Descubra 20 receitas caseiras nutricionalmente balanceadas para uma alimentação natural e saudável do seu gato. Ingredientes acessíveis e passo a passo fácil!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="overflow-x-hidden">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16840469676"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16840469676');
          `}
        </Script>
        {/* End Google tag */}

        {/* Meta Pixel Code */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '668159282337201');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <Image 
            height={1} 
            width={1} 
            alt="facebook pixel"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=668159282337201&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}

        {/* Hotjar Tracking Code for Receitas para Gatos */}
        <Script id="hotjar-tracking" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:5340502,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
        {/* End Hotjar Tracking Code */}
      </head>
      <body
        className={`${poppins.variable} antialiased overflow-x-hidden`}
        style={{ backgroundColor: "#FEF5E6" }}
      >
        {children}
      </body>
    </html>
  );
}
