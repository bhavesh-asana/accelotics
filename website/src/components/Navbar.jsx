import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <div className={'flex gap-2 border border-primary rounded-full px-3 py-2.5 shadow shadow-primary'}>
            <Link to={'/'}>Home</Link>
            <div className={'border-l border-primary'}></div>
            <Link to={'/product-engineering'}>Product Engineering</Link>
            <div className={'border-l border-primary'}></div>
            <Link to={'/about-us'}>About Us</Link>
        </div>

    )
}