import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <div className={'flex gap-10'}>
            <div className={'flex gap-2 border border-primary rounded-full px-3 py-2 shadow shadow-primary'}>
                <Link to={'/'}>Home</Link>
                <div className={'border-l border-primary'}></div>
                <Link to={'/product-engineering'}>Product Engineering</Link>
                <div className={'border-l border-primary'}></div>
                <Link to={'/about-us'}>About Us</Link>
            </div>

            <div className={'flex  gap-2 border border-primary rounded-full px-2 py-2 bg-primary text-black'}>
                <Link to={'log-in'}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="2 2 20 20" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                    </svg>
                </Link>
            </div>
        </div>


    )
}