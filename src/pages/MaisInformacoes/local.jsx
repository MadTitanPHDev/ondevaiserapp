import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const Categoria = () => {
    const { idTipo } = useParams();
    const { data: categoria, isLoading } = useQuery(['getCategoria', { idTipo }], getCategoria, {
        enable: !!idTipo
    })

    if (isLoading) {
        return <div>carregando...</div>
    }
    return (
        <>
            <div className='flex'>
                <span>{categoria?.idTipo}</span>
                <span>{categoria?.nomeLocal}</span>
            </div>
        </>
    )
}

export default Categoria