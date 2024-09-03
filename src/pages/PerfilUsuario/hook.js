import { useQuery } from "react-query"
import { getUsers } from "../Request/show"
import { useNavigate } from "react-router-dom"

export const useCategoriaList = () => {
    const {data: user, isLoading} = useQuery(['getUsers']. getUsers)
    const navigate = useNavigate();

    const handleClickDetails = (idUsuarios) => {
        navigate (`/PerfilUsuario/${idUsuarios}`)
    }
    return{
        isLoading,
        user,
        handleClickDetails
    }
}