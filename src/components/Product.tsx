import React from 'react';
import { IProduct } from '../models';

interface ProductProps {
    product: IProduct
}

export function Product({ product }: ProductProps) {
    const [detalis, setDetalis] = React.useState(false);

    const bntBgClassName = detalis ? 'bg-yellow-400' : 'bg-blue-400';
    const btnClasses = ['py-2 px-4 border bg-yellow-400', bntBgClassName];

    return (
        <div
            className='border py-2 px-4 rounded flex flex-col items-center mb-2'
        >
            <img src={product.image} className="w-1/6" alt={product.title} />
            <p>{ product.title }</p>
            <span className="font-bold">{ product.price }</span> 
            <button
                className={btnClasses.join(' ')}
                onClick={() => setDetalis(prev => !prev)}
            >
                { detalis ? 'Hide details' : 'Show Details' }
            </button>

            {detalis && <div>
               <p>{ product.description }</p> 
               <p>Rate: <span style={{ fontWeight: 'bold' }}>{product?.rating?.rate}</span></p>
            </div>}
        </div>
    )
}