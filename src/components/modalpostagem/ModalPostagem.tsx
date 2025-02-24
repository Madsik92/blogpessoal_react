import Popup from 'reactjs-popup';
import FormPostagem from '../postagens/formpostagens/FormPostagens';

import 'reactjs-popup/dist/index.css';
import './ModalPostagem.css'

function ModalPostagem() {
    return (
        <>
            <Popup
                trigger={
                    <button className="bg-neutral-400 rounded-2xl px-6 py-2 uppercase text-stone-50 text-base hover:bg-cyan-700 duration-500 cursor-pointer">
                        Nova Postagem
                    </button>
                }
                modal
            >
                <FormPostagem />
            </Popup>
        </>
    );
}

export default ModalPostagem;