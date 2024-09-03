import api from "../../services/api"

export const getCategorias = async () => {
    return api.get('/tipoLocal').then(res => res.data)
}

export const getCategoria = async ({queryKey}) => {
    const [, {id}] = queryKey
    return api.get(`/locals/tipoLocal/${id}`).then(res => res.data)
}

export const getLocal = async ({queryKey}) => {
    const [,{id}] = queryKey
    return api.get(`/locals/${id}`).then(res => res.data)
}

export const getUser = async ({queryKey}) => {
    const [,{id}] = queryKey
    return api.get(`users/${id}`).then(res => res.data)
}