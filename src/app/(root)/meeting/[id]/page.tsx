const Meeting: React.FC<{ params: { id: string } }> = ({ params }) => {
  return <>Meeting room: #{params.id}</>;
};

export default Meeting;
