function GreatCoffe() {
    return(
        <section   className="w-full h-[600px] bg-cover bg-center bg-no-repeat flex items-center font-[Winky Sans] text-[#FEFCF7]"
        style={{ backgroundImage: "url('/images/Bitmap (4).jpg')" }}>
            <div className=" max-w-[1440px] mx-auto px-[85px] w-full flex items-center">
                <div className="max-w-[530px]">
                    <h1 className="font-bold pt-[117px] text-[72px] leading-tight w-[532px]">Great coffee made simple.</h1>
                    <p className="font-normal text-base w-[445px] pt-8 text-left">Start your mornings with the world’s best coffees. Try our expertly curated artisan
                     coffees from our best roasters delivered directly to your door, at your schedule.</p>
                     <div className="pt-[56px] pb-[116px]">
                        <button className="w-[217px] h-[56px] bg-[#0E8784] text-[#FEFCF7] font-extrabold text-[18px] rounded-[6px] transition duration-500 hover:bg-[#66D2CF]" type="submit">Create your plan</button>
                     </div>
                </div>
            </div>
        </section>
    )
}
export default GreatCoffe