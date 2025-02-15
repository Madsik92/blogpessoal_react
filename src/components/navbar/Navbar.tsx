import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center px-4 py-4  border-b-neutral-300 border-b-1 bg-neutral-200 text-neutral-800'>

                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-xl font-bold">Coffee Break Loading</Link>

                    <div className='flex gap-3'>

                        <Link to='' className="focus:text-cyan-700 hover:text-pink-700">Postagens</Link>
                        <Link to='' className="focus:text-cyan-700 hover:text-pink-700">Temas</Link>
                        <Link to='' className="focus:text-cyan-700 hover:text-pink-700">Cadastrar tema</Link>
                        <Link to='' className="focus:text-cyan-700 hover:text-pink-700">Perfil</Link>
                        <Link to='/login' 
                        className="rounded-2xl bg-neutral-400 px-4 text-stone-50 font-bold hover:bg-cyan-700">
                            Sair
                        </Link>

                    </div>
                </div>
            </div>
        </>




    )
}

export default Navbar