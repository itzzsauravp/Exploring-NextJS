const ShopCatchAllSegment = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-2xl font-bold">
      <p>This is a catch all segment for shop</p>
      <p>
        /shop/electronics || /shop/electronics/mobile ||
        /shop/electornics/mobile/iPhone
      </p>
      <p>
        But this wont match the /shop route for that we have optional catch all
        segment[[...slug]]
      </p>
    </div>
  );
};
export default ShopCatchAllSegment;
