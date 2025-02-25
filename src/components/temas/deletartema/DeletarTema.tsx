import { useState, useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import Tema from "../../../models/Tema"
import { buscar, deletar } from "../../../services/Service"
import { RotatingLines } from "react-loader-spinner"
import { ToastAlerta } from "../../../utils/ToastAlerta"

function DeletarTema() {

    const navigate = useNavigate()

    const [tema, setTema] = useState<Tema>({} as Tema)
    const [isLoading, setIsLoading] = useState<boolean>(false)


    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>()

    async function buscarTemasPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: { Authorization: token }
            })

        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado!', 'info')
            navigate('/')
        }
    }, [token])


    useEffect(() => {
        if (id !== undefined) {
            buscarTemasPorId(id)
        }
    }, [id])

    async function deletarTema() {
        setIsLoading(true)

        try {

            await deletar(`/temas/${id}`, {
                headers: { Authorization: token }
            })
            ToastAlerta('Tema foi apagado com sucesso!', 'sucesso')

        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            } else {
                ToastAlerta('Erro ao excluir o tema!', 'erro')
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate('/temas')
    }

    return (
        <div className='container w-1/3 mx-auto font-sora'>
            <h1 className='text-3xl font-medium text-center my-4'>Deletar tema</h1>
            <p className='text-center font-medium mb-4'>
                Você tem certeza de que deseja apagar o tema a seguir?</p>
            <div className='shadow-xl flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header
                    className='py-2 px-6 bg-neutral-400 text-white font-medium text-2xl'>
                    Tema
                </header>
                <p className='p-8 text-xl bg-neutral-100 h-full'>{tema.descricao}</p>
                <div className="flex">
                    <button
                        className='text-neutral-100 bg-neutral-400 hover:bg-pink-700 duration-500 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button
                        className='w-full text-neutral-100 bg-neutral-400 hover:bg-cyan-700 duration-500 flex items-center justify-center'
                        onClick={deletarTema}>
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
 
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarTema