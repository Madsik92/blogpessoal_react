import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { RotatingLines } from "react-loader-spinner"
import { ToastAlerta } from "../../../utils/ToastAlerta"
import Usuario from "../../../models/Usuario"
import { useNavigate } from "react-router-dom"
import { atualizarUsuario } from "../../../services/Service"


function AtualizarPerfil() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [confirmarSenha, setConfirmarSenha] = useState<string>('')

    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
    })

    useEffect(() => {
        if (usuario.id !== 0) {
            retornar()
        }
    }, [usuario])

    function retornar() {
        navigate('/login')
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    async function atualizoUsuario(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
    
        if (confirmarSenha === usuario.senha && usuario.senha.length >= 8) {
            setIsLoading(true);
            try {
                await atualizarUsuario(`/usuarios/atualizar`, usuario, setUsuario);
                ToastAlerta('Usuário atualizado com sucesso!', 'sucesso');
            } catch (erro) {
                ToastAlerta('Erro ao atualizar o usuário!', 'erro');
            } finally {
                setIsLoading(false);
            }
        } else {
            ToastAlerta('Os dados do Usuário estão inconsistentes! Verifique as informações e tente novamente.', 'info');
            setUsuario({ ...usuario, senha: '' });
            setConfirmarSenha('');
        }
        
    }



console.log(JSON.stringify(usuario))
console.log(confirmarSenha)


return (
    <>
        <div className="h-auto place-items-center font-sora font-medium">
            <form className='flex justify-center items-center flex-col w- gap-3 p-5'
                onSubmit={atualizoUsuario}>

                <h2 className='text-neutral-800 text-3xl'>Atualizar usuário</h2>
                
                <div className="flex flex-col w-full">
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Nome"
                        className="border-1 border-neutral-500 rounded-2xl p-2"
                        value={usuario.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="usuario">Usuario</label>
                    <input
                        type="text"
                        id="usuario"
                        name="usuario"
                        placeholder="Usuario"
                        className="border-1 border-neutral-500 rounded-2xl p-2"
                        value={usuario.usuario}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="foto">Foto</label>
                    <input
                        type="text"
                        id="foto"
                        name="foto"
                        placeholder="Foto"
                        className="border-1 border-neutral-500 rounded-2xl p-2"
                        value={usuario.foto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="senha">Senha</label>
                    <input
                        type="password"
                        id="senha"
                        name="senha"
                        placeholder="Senha"
                        className="border-1 border-neutral-500 rounded-2xl p-2"
                        value={usuario.senha}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="confirmarSenha">Confirmar Senha</label>
                    <input
                        type="password"
                        id="confirmarSenha"
                        name="confirmarSenha"
                        placeholder="Confirmar Senha"
                        className="border-1 border-neutral-500 rounded-2xl p-2"
                        value={confirmarSenha}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
                    />
                </div>
                <div className="flex justify-around w-full gap-8">
                    <button type='reset' className='rounded-2xl text-white bg-neutral-400 hover:bg-pink-700 duration-500 w-1/2 py-2'
                        onClick={retornar}>
                        Cancelar
                    </button>
                    <button
                        type='submit'
                        className='rounded-2xl text-white bg-neutral-400 hover:bg-cyan-700 duration-500 w-1/2 py-2 flex justify-center'
                    >
                        {isLoading ? <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                            <span>Atualizar</span>
                        }

                    </button>
                </div>
            </form>
        </div>
    </>
)
}

export default AtualizarPerfil