import Popup from 'reactjs-popup';
import { Pencil } from '@phosphor-icons/react';
import AtualizarPerfil from '../atualizarperfil/AtualizarPerfil';

function ModalPerfil() {
    return (
        <>
            <Popup
                trigger={
                    <button className="">
                        <Pencil size={30} weight='light'/>
                    </button>
                }
                modal
            >
                <AtualizarPerfil/>
            </Popup>
        </>
    );
}

export default ModalPerfil;