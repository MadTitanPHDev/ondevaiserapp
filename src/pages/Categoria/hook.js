import { useQuery } from "react-query"
import { getCategoria } from "../Request/show"
import { useNavigate } from "react-router-dom"

export const useCategoriaList = () => {
    const {data: categoria, isLoading} = useQuery(['getCategoria']. getCategoria)
    const navigate = useNavigate();

    const handleClickDetails = (idTipo) => {
        navigate (`/categoria/${idTipo}`)
    }
    return{
        isLoading,
        categoria,
        handleClickDetails
    }
}