function Header() {
    return(
        <header className="w-full bg-[white]">
        <div className="header__container flex justify-between py-10 px-9 items-center">
        <a href="index.html"><img src="/images/Group 5 (1).svg" alt="Logo" className="w-[230px] h-[25px]  object-contain" /></a>
            <nav>
                <ul className="menu flex gap-[33px]">
                    <li className="menu_list list-none"><a href="index.html" className="menu_link font-bold text-xs text-[#83888F] font-barlow">HOME</a></li>
                    <li className="menu_list list-none"><a href="about.html" className="menu_link font-bold text-xs text-[#83888F] font-barlow">ABOUT US</a></li>
                    <li className="menu_list list-none"><a href="create.html" className="menu_link font-bold text-xs text-[#83888F] font-barlow">Create your plan</a></li>
                </ul>
            </nav>
        </div>
    </header>
    )
}

export default Header