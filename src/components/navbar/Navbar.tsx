
import { List, X } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router-dom"

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <div className='w-screen px-5 py-3 md:flex md:justify-between md:items-center bg-neutral-200 border-b-neutral-300 border-b-1 text-neutral-800 lg:px-20'>
                <div className="flex justify-between items-center">
                    <div>
                        <Link to='/home' className="text-xl font-fira font-bold">Console.blog(🚧)</Link>
                    </div>

                    <div className=" cursor-pointer mx-2 md:hidden block" onClick={toggleMenu}>
                        {menuOpen ? <X size={30} weight='regular' /> : <List size={30} weight='regular' />}
                    </div>
                </div>

                <div
                    className={`
                        font-sora text-base uppercase font-medium md:normal-case md:flex md:items-center absolute md:static bg-neutral-200 w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 transition-all duration-500
                        ${menuOpen ? 'top-13 opacity-90' : 'top-[-400px] opacity-0'} 
                        md:opacity-100 md:top-auto
                    `}
                >
                    <div className="mx-5 my-4 md:my-0">
                        <Link to='' className="focus:text-cyan-700 hover:text-pink-700 duration-500" onClick={closeMenu}>Postagens</Link>
                    </div>

                    <div className="mx-5 my-4 md:my-0">
                        <Link to='' className="focus:text-cyan-700 hover:text-pink-700 duration-500" onClick={closeMenu}>Temas</Link>
                    </div>

                    <div className="mx-5 my-4 md:my-0">
                        <Link to='' className="focus:text-cyan-700 hover:text-pink-700 duration-500" onClick={closeMenu}>Cadastrar tema</Link>
                    </div>

                    <div className="mx-5 my-4 md:my-0">
                        <Link to='' className="focus:text-cyan-700 hover:text-pink-700 duration-500" onClick={closeMenu}>Perfil</Link>
                    </div>

                    <div className="mx-5 my-4 md:my-0">
                        <Link to='/login' className="lg:ml-10 uppercase text-base rounded-2xl bg-neutral-400 px-4 py-2 text-stone-50 font-medium hover:bg-cyan-700 duration-500" onClick={closeMenu}>Sair</Link>
                    </div>

                </div>
            </div>
        </>

    );
}

export default Navbar;