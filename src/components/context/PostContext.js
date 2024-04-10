import { createContext, useContext, useState } from "react"

const dataSaveInitialUsuario = 
[
    {id: 1, nome: 'Marisa', nick: 'Marisa', cpf: '00000000000', email: 'marisa@gmail.com', senha: '123456', telefone: '18999999999'},
    {id: 2, nome: 'Eloisa', nick: 'EloisaSalomão', cpf: '00000000000', email: 'eloisasalomao@gmail.com', senha: '123456', telefone: '18999999999'}
]

const dataSaveInitialLocal = 
[
    {id: 1, nomeLocal: 'Marisa', endereco: 'Rua Antonio Silva', cep: '19000000', valor: '1350', carac: 'piscina, estacionamento, ar condicionado, churrascaria, freezer, geladeria, fogao', descr: 'Chácara para final de semana e temporadas.'},
    {id: 2, nomeLocal: 'Eloisa', endereco: 'Rua dos Ipes', cep: '19000000', valor: '3000', carac: 'garagem, freezer, fogao, churrasqueira, piscina, internet wifi, mesas e cadeiras', descr: 'Ideal para uma semana de Home-Office enquanto a família se diverte. Cidade rodeada por Cachoeiras e Montanhas. Fácil acesso saindo de São Paulo.'}
]

const initialUsuario = 
{
    id: 0,
    nome: '',
    nick: '',
    cpf: '',
    email: '',
    senha: '',
    telefone: ''
}

const initialLocal = 
{
    id: 0,
    nomeLocal: '',
    endereco: '',
    cep: '',
    valor: '',
    carac: '',
    descr: ''
}

const InfoContext = createContext(undefined);

const InfoProvider = ({ children }) => 
{
    const [users, setUsers] = useState(dataSaveInitialUsuario);
    const [local, setLocal] = useState(dataSaveInitialLocal);

    const addUser = (infoU) => {
        setUsers([...users, infoU]);
    }
    const addLocal = (infoL) => {
        setLocal([...local, infoL]);
    }

    const removeUser = (id) => {
        const index = users.findIndex(infoU => infoU?.id === id);
        if(index !== -1) {
            setUsers([
                ...users.slice(0, index),
                ...users.slice(index+1, users.length)
            ])
        }
    }
    const removeLocal = (id) => {
        const index = local.findIndex(infoL => infoL?.id === id);
        if(index !== -1) {
            setLocal([
                ...local.slice(0, index),
                ...local.slice(index+1, local.length)
            ])
        }
    }
    
    return <InfoContext.Provider value={{users, addUser, removeUser, local, addLocal, removeLocal}}>
        {children}
    </InfoContext.Provider>;
}

const useInfoContext = () => 
{
    const context = useContext(InfoContext);

    if(!context) {
        throw new Error('useInfoContext deve ser usado dentro de um InfoProvider')
    }

    return context;
}

export 
{
    initialUsuario,
    initialLocal,
    InfoProvider,
    useInfoContext
}