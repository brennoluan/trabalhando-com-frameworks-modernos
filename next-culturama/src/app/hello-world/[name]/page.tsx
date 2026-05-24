export default async function HelloWorldWithParams({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  return (
    <div>
      Hello World {name}, estamos dentro de uma pasta com App Router e
      roteamento dinâmico
    </div>
  );
}
