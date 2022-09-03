import * as React from 'react';

interface ModalProps {
    children: React.ReactNode,
    title: string,
    onClose: () => void
}

function Modal({children, title, onClose}: ModalProps) {
    return ( 
        <>
            <div className='fixed bg-black/50 top-0 right-0 left-0 bottom-0' onClick={onClose}
            />

            <div className='fixed w-[500px] p-5 rounded bg-white top-10 left-1/2 -translate-x-1/2'>
                <h1 className='px-2 py-2 text-2xl'>{ title }</h1>
                { children }
            </div>
        </>
    );
}

export default Modal;

