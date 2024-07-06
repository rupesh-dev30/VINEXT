export default function Meeting({ params }: { params: { id: string } }) {
  return <div>Meeting Room: #{params.id}</div>;
}
