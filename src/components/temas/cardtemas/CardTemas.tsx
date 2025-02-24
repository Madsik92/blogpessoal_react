import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'

interface CardTemasProps{
    tema: Tema
}

function CardTemas({ tema }: CardTemasProps) {
    return (
        <div className='shadow-xl font-sora flex flex-col rounded-2xl overflow-hidden justify-center w-9/10'>
            <header className='py-2 px-6 bg-neutral-100 text-neutral-800 font-medium text-xl'>
                Tema
            </header>
            <p className='p-8 text-xl h-full'>{tema.descricao}</p>
            
            <div className="flex">
                <Link to={`/editartema/${tema.id}`} 
                    className='w-full text-neutral-100 bg-neutral-400 hover:bg-cyan-700 duration-500 flex items-center justify-center py-2'>
                    <button className='uppercase font-medium'>Editar</button>
                </Link>

                <Link to={`/deletartema/${tema.id}`} className='text-neutral-100 bg-neutral-400 hover:bg-pink-700 duration-500 w-full flex items-center justify-center'>
                    <button className='uppercase font-medium'>Deletar</button>
                </Link>
            </div>

        </div>
    )
}
 
export default CardTemas