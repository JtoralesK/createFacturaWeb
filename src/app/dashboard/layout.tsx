import { Nav } from "../components/nav";
import { LeftBar } from "../components/leftBar";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Añade los pesos que necesitas
});

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="w-full py-2 pr-2 flex flex-row bg-principalColor ">
          <LeftBar />
          <div className="ml-32 w-full h-auto rounded-3xl bg-[#EBECF0] py-2 px-4 flex flex-col gap-2  ">
            <Nav />
            <div className="flex-grow">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
