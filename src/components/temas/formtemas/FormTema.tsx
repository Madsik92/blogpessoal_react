import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Tema from "../../../models/Tema";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";

function FormTema() {

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
            ToastAlerta('Você precisa estar logado!')
            navigate('/')
        }
    }, [token])


    useEffect(() => {
        if (id !== undefined) {
            buscarTemasPorId(id)
        }
    }, [id])


    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/temas")
    }

    async function gerarNovoTema(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar("/temas", tema, setTema, {
                    headers: { Authorization: token },
                })

                ToastAlerta("O Tema foi Atualizado com sucesso!")
            } catch (error: any) {
                if (error.toString().includes("401")) {
                    handleLogout()
                } else {
                    ToastAlerta("Erro ao atualizar o tema!")
                }
            }
        } else {
            try {
                await cadastrar("/temas", tema, setTema, {
                    headers: { Authorization: token }
                })

                ToastAlerta("O Tema foi Cadastrado com sucesso!")
            } catch (error: any) {
                if (error.toString().includes("401")) {
                    handleLogout();
                } else {
                    ToastAlerta("Erro ao cadastrar o tema!")
                }
            }
        }

        setIsLoading(false)
        retornar()

    }

    return (

        <>
            <div className="w-full font-sora flex flex-col min-h-screen bg-neutral-100  items-center">
                <h1 className="text-3xl font-medium text-center my-8">
                    {id === undefined ? 'Cadastrar Tema' : 'Editar Tema'}
                </h1>

                <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoTema} >
                    <div className="flex flex-col gap-2">
                        <label htmlFor="descricao" className="text-lg">Descrição do Tema</label>
                        <input
                            type="text"
                            placeholder="Descreva aqui seu tema"
                            name='descricao'
                            className="border-1 border-neutral-500 rounded-2xl p-2"
                            value={tema.descricao}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <button
                        className="rounded-2xl uppercase font-medium text-slate-100 bg-neutral-400 hover:bg-cyan-700 duration-500 w-1/2 py-2 mx-auto flex justify-center"
                        type="submit">

                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>

                        }
                    </button>
                </form>
            </div>
        </>

    );
}

export default FormTema;