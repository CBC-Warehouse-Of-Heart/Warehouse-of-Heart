// Interactive game layout here

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={"h-full w-full"}>{children}</div>;
}
