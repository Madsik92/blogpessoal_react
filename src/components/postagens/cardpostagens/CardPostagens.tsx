import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'

interface CardPostagensProps {
    postagem: Postagem
}

function CardPostagens({ postagem }: CardPostagensProps) {
    return (
        <div className='shadow-xl flex flex-col rounded-2xl overflow-hidden justify-between'>

            <div>
                <div className="flex w-full bg-neutral-100 py-2 px-4 items-center gap-4">
                    <img
                        src={postagem.usuario?.foto}
                        className='h-12 rounded-full'
                        alt={postagem.usuario?.nome} />
                    <h3 className='text-lg font-bold text-center uppercase'>
                        {postagem.usuario?.nome}
                    </h3>
                </div>
                <div className='p-4 '>
                    <h4 className='text-lg font-semibold'>{postagem.titulo}</h4>
                    <p className='capitalize'>{postagem.texto}</p>
                    <p>{postagem.tema?.descricao} </p>
                    <p>{new Intl.DateTimeFormat(undefined, {
                        dateStyle: 'full',
                        timeStyle: 'medium',
                    }).format(new Date(postagem.data))}</p>
                </div>
            </div>
            <div className="flex ">
                <Link to={`/editarpostagem/${postagem.id}`} className=' w-full text-white bg-neutral-400 hover:bg-cyan-700 duration-500 flex items-center justify-center py-2'>
                    <button className='uppercase'>Editar</button>
                </Link>
                <Link to={`/deletarpostagem/${postagem.id}`} className='text-white bg-neutral-400 hover:bg-pink-700 duration-500 w-full flex items-center justify-center'>
                    <button className='uppercase'>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardPostagens