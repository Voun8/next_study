export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h2>我是根 dashboard Layout</h2>
      {children}
    </div>
  );
}
