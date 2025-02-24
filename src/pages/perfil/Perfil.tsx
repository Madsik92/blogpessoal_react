import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'
import ModalPerfil from './modalperfil/ModalPerfil'
import { ToastAlerta } from '../../utils/ToastAlerta'

function Perfil() {

    const navigate = useNavigate()

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            ToastAlerta('Você precisa estar logado', 'info')
            navigate("/")
        }
    }, [usuario.token])

    return (
        <>
            <div className='font-sora container mx-auto m-4 rounded-2xl overflow-hidden'>

                <div className='w-full h-72 object-cover border-b-8 border-white bg-gradient-to-r bg-pink-700 to-cyan-700 opacity-40'>
                    
                </div>

                <img
                    className='rounded-full w-55 mx-auto mt-[-8rem] border-8 border-white relative z-1'
                    src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} />

                <div
                    className="relative mt-[-6rem] h-72 flex flex-col bg-neutral-200 text-neutral-800 text-xl items-center justify-center"
                >
                    <div className='absolute top-4 right-4 xl:right-50 cursor-pointer'>
                        <ModalPerfil/>
                    </div>

                    <p>Nome: {usuario.nome} </p>
                    <p>Email: {usuario.usuario}</p>
                </div>

            </div>
        </>

    )
}

export default Perfil