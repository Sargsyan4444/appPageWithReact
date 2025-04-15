
function Choose() {
  return (
    <section className="bg-[#22262c] w-full font-winky relative">
      <div className="flex items-center justify-center flex-col">
        <h2 className="font-black text-[40px] text-[#FEFCF7] pt-[100px] pb-[32px]">Why choose us?</h2>
        <p className="text-base font-normal text-[#FEFCF7] pb-[272px] w-[540px] text-center ">
          A large part of our role is choosing which particular coffees will be featured in our range.
          This means working closely with the best coffee growers to give you a more impactful experience on every level.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-[30px] absolute top-[300px] ">
          <div className="w-[350px] h-[380px] bg-[#0E8784] rounded-lg flex justify-center items-center flex-col">
            <img src="/images/choose/coffee-bean (1).svg" alt="" className="w-[72px] h-[72px] object-contain mt-[72px] mb-[56px]" />
            <div className="chooseCardInfo text-center">
              <h3 className="font-bold text-2xl text-[#FEFCF7] pb-[24px]">Best quality</h3>
              <p className="font-normal text-base text-[#FEFCF7] w-[255px] mb-[48px]">
                Discover an endless variety of the world’s best artisan coffee from each of our roasters.
              </p>
            </div>
          </div>

          <div className="w-[350px] h-[380px] bg-[#0E8784] rounded-lg flex justify-center items-center flex-col">
            <img src="/images/choose/Combined Shape (5).svg" alt="" className="w-[72px] h-[72px] object-contain mt-[72px] mb-[56px]" />
            <div className="chooseCardInfo text-center">
              <h3 className="font-bold text-2xl text-[#FEFCF7] pb-[24px]">Exclusive benefits</h3>
              <p className="font-normal text-base text-[#FEFCF7] w-[255px] mb-[48px]">
                Special offers and swag when you subscribe, including 30% off your first shipment.
              </p>
            </div>
          </div>

          <div className="w-[350px] h-[380px] bg-[#0E8784] rounded-lg flex justify-center items-center flex-col">
            <img src="/images/choose/Combined Shape (6).svg" alt="" className="w-[72px] h-[72px] object-contain mt-[72px] mb-[56px]" />
            <div className="chooseCardInfo text-center">
              <h3 className="font-bold text-2xl text-[#FEFCF7] pb-[24px]">Free shipping</h3>
              <p className="font-normal text-base text-[#FEFCF7] w-[255px] mb-[48px]">
                We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Choose;
