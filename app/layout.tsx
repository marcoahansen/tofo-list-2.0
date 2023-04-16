import "@/styles/globals.css";

export const metadata = {
  title: "ToDo List 2.0",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <div className="bg-[#2D2D2D] w-full h-screen flex flex-col items-center justify-center text-center gap-3">
          {children}
        </div>
      </body>
    </html>
  );
}
