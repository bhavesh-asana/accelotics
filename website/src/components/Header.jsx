import Navbar from "./Navbar.jsx";

export default function Header() {
    return (
        <div>
            <header className={'px-20 py-20 flex justify-between'}>
                <a href={'/'} className={'flex items-center gap-1'}>
                    {/*TODO: Add company logo*/}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                    <span className={'font-bold text-xl text-primary'}>Accelotics</span>
                </a>
                <div>
                    <Navbar/>
                </div>
            </header>
        </div>
    )
}