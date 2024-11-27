const IndividualItems = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return (
    <div className="h-screen flex items-center justify-center text-2xl font-bold">
      Dynamic Routing - {id}
    </div>
  );
};
export default IndividualItems;
