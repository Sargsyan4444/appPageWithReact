function HowWork() {
    return(
        <section className="w-full bg-[#FEFCF7] font-winky">
        <div className="howWork__container flex flex-col pt-[350px] pl-[50px] pr[50px] items-start justify-center">
            <h3 className="font-bold text-2xl text-[#83888F] pb-[80px]">How it works</h3>
            <div className="line_part">
                <div className="w-[670px] bg-[#FDD6BA] h-1 relative ">
                    <div className="w-[31px] h-[31px] rounded-[50%] border border-[#0E8784] absolute top-[-15px] right-[-15px] "></div>
                    <div className="w-[31px] h-[31px] rounded-[50%] border border-[#0E8784] absolute top-[-15px] right-[365px] "></div>
                    <div className="w-[31px] h-[31px] rounded-[50%] border border-[#0E8784] absolute top-[-15px] "></div>
                </div>
            </div>
            <div className="pt-[67px] flex justify-center items-center flex-wrap gap-[95px] pb-[64px]">
                <div className="w-[285px] h-[355px] flex justify-center flex-col ">
                    <h4 className="font-black  text-[72px] text-[#FDD6BA] mb-[38px]">01</h4>
                    <h3 className="w-[205px] font-extrabold text-[32px] text-[#333D4B] mb-[42px]">Pick your coffee</h3>
                    <p className="font-normal text-base text-[#333D4B]">Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.</p>
                </div>
                <div className="w-[285px] h-[355px] flex justify-center flex-col ">
                    <h4 className="font-black  text-[72px] text-[#FDD6BA] mb-[38px]">02</h4>
                    <h3 className="w-[205px] font-extrabold text-[32px] text-[#333D4B] mb-[42px]">Choose the frequency</h3>
                    <p className="font-normal text-base text-[#333D4B]">Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.</p>
                </div>
                <div className="w-[285px] h-[355px] flex justify-center flex-col ">
                    <h4 className="font-black  text-[72px] text-[#FDD6BA] mb-[38px]">03</h4>
                    <h3 className="w-[205px] font-extrabold text-[32px] text-[#333D4B] mb-[42px]">Receive and enjoy!</h3>
                    <p className="font-normal text-base text-[#333D4B]">We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.</p>
                </div>
            </div>
            <div className="pt-[56px] pb-[116px]">
                <button type="submit" className="w-[217px] h-[56px] bg-[#0E8784] text-[#FEFCF7] font-extrabold text-[18px] rounded-[6px] transition duration-500 hover:bg-[#66D2CF]">Create your plan</button>
             </div>
        </div>
    </section>
    )
}
export default HowWork