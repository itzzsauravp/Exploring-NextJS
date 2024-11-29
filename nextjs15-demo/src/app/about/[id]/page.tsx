const DynamicAbout = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <div>This is for the id: {id}</div>;
};
export default DynamicAbout;
