import { useQuery } from "react-query"
import { getCategorias } from "../Request/show"
import { useNavigate } from "react-router-dom"

export const useCategoriaList = () => {
    const {data: categoria, isLoading} = useQuery(['getCategorias']. getCategorias)
    const navigate = useNavigate();

    const handleClickDetails = (idTipo) => {
        navigate (`/Categoria/${idTipo}`)
    }
    return{
        isLoading,
        categoria,
        handleClickDetails
    }
}