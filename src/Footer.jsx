function Footer() {
    return(
        <footer className="w-full bg-[#2C343E]">
        <div className=" footer__container flex items-center justify-between flex-wrap gap-[30px] py-[45px] px-[85px]">
        <img src="/images/footer/footer-logo.png" alt="" className="w-[235px] h-[25px] object-contain" />
            <nav>
                <ul className="menu flex gap-[33px]">
                    <li className="menu_list list-none"><a href="" className="menu_link menu_link_footer hover:text-[#FEFCF7] font-bold text-xs text-[#83888F] font-barlow">HOME</a></li>
                    <li className="menu_list list-none"><a href="" className="menu_link menu_link_footer hover:text-[#FEFCF7] font-bold text-xs text-[#83888F] font-barlow">ABOUT US</a></li>
                    <li className="menu_list list-none"><a href="" className="menu_link menu_link_footer hover:text-[#FEFCF7]  font-bold text-xs text-[#83888F] font-barlow">Create your plan</a></li>
                </ul>
            </nav>
            <div className="flex gap-[24px] items-center">
                <a href="" className=""><img src="/images/footer/Path (2).svg" alt=""  className="w-[24px] h-[24px] object-contain"/></a>
                <a href="" className=""><img src="/images/footer/Path (3).svg" alt="" className="w-[24px] h-[24px] object-contain" /></a>
                <a href="" className=""><img src="/images/footer/Shape (1).svg" alt="" className="w-[24px] h-[24px] object-contain" /></a>
            </div>
        </div>
    </footer>
    )
}

export default Footer