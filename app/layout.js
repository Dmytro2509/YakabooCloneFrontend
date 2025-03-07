import { Nunito } from "next/font/google";
import { Footer, Header } from "./components"
import "./globals.css";

const nunito = Nunito({
  variable: "--nunito",
  subsets: ["latin"],
});

export const metadata = {
  title: "Yakaboo Clone",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} antialiased`}
      >
        <div className="bg-gray-100 px-[6.5%] cursor-normal">
          <Header />  
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
