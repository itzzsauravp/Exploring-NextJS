const ShopOptionalCatchAllSegment = async ({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) => {
  const { slug } = await params;
  console.log("slug is " + slug);
  return (
    <div className="h-screen flex flex-col items-center justify-center text-2xl font-bold">
      Optinal catch all segment for shop
      <p>
        Accounts for /shop || /shop/electornics || /shop/electronics/mobile and
        so on..
      </p>
    </div>
  );
};

export default ShopOptionalCatchAllSegment;
