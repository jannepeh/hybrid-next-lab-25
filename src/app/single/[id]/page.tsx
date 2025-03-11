type SingleProps = {
  params: Promise<{ id: string }>;
};

export default async function Single({ params }: SingleProps) {
  const { id } = await params;

  return <div>{id}</div>;
}
