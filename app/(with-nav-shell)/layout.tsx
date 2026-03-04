// import PageShell from "@/components/ClientRender/PageShell";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageShell>{children} </PageShell>;
}
