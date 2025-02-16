import { useState } from "react";
import { Link } from "react-router-dom"

function Navbar() {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <div className='w-screen flex justify-center px-4 py-2 bg-neutral-200 border-b-neutral-300 border-b-1 shadow-lg text-neutral-800 lg:px-20'>
            <div className="container flex justify-between items-center">
                <Link to='/home' className="antialiased text-xl font-fira font-bold">Coffee Break Loading</Link>

                <div className="font-sora flex items-center uppercase">
                    {/* Menu em telas maiores */}
                    <div className="hidden md:flex gap-3 text-base">
                        <Link to='' className="focus:text-cyan-700 hover:text-pink-700">Postagens</Link>
                        <Link to='' className="focus:text-cyan-700 hover:text-pink-700">Temas</Link>
                        <Link to='' className="focus:text-cyan-700 hover:text-pink-700">Cadastrar tema</Link>
                        <Link to='' className="focus:text-cyan-700 hover:text-pink-700">Perfil</Link>
                    </div>

                    {/* Botão hamburguer - aparece em telas menores */}
                    <button
                        onClick={() => setMenuAberto(!menuAberto)}
                        type="button"
                        className="md:hidden p-2 w-8 h-8 text-sm text-neutral-400 rounded-2xl hover:bg-neutral-100 focus:outline-none "
                    >
                        <span className="sr-only">Abrir menu</span>
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 4 20 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                    {/* Menu hamburguer em telas menores */}
                    {menuAberto && (
                        <div className="absolute top-12  text-xs font-medium bg-neutral-100 shadow-lg flex flex-col md:hidden">
                            <Link to='' onClick={() => setMenuAberto(false)}  className="hover:text-pink-700 hover:bg-white p-4">Postagens</Link>
                            <Link to='' onClick={() => setMenuAberto(false)}  className="hover:text-pink-700 hover:bg-white p-4">Temas</Link>
                            <Link to='' onClick={() => setMenuAberto(false)}  className="hover:text-pink-700 hover:bg-white p-4">Cadastrar tema</Link>
                            <Link to='' onClick={() => setMenuAberto(false)}  className="hover:text-pink-700 hover:bg-white p-4">Perfil</Link>
                        </div>
                    )}

                    {/* Botão Sair */}
                <div className="ml-2 lg:ml-10">
                        <Link to='/login' className="text-xs rounded-2xl bg-neutral-400 px-4 py-2 text-stone-50 font-bold hover:bg-cyan-700">
                            Sair
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;