import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Duas & Ruqyah",
  description: "Learning Duas ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#D9D9D9] min-h-screen bg-no-repeat relative">
        <Navbar />
        {children}
        <Sidebar />
      </body>
    </html>
  );
}
