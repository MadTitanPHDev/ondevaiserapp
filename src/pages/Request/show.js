import api from "../../services/api"

export const getCategoria = async () => {
    return api.get('/tipoLocal').then(res => res.data)
}

export const getCategorias = async ({queryKey}) => {
    const [, {idTipo}] = queryKey
    return api.get(`/categoria/${idTipo}`).then(res => res.data)
}