export default function HelloWorldWithParamsInfoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="bg-blue-400 text-black min-h-screen">{children}</div>;
}
