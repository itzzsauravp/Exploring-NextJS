const PostDynamic = async({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return (
    <div className="h-screen flex items-center justify-center text-2xl font-bold">
      This is a Dynamic Route : {slug}
    </div>
  );
};

export default PostDynamic;
