import { useQuery } from "react-query"
import { getLocal } from "../Request/show"
import { useNavigate } from "react-router-dom"

export const useLocalList = () => {
    const {data: local, isLoading} = useQuery(['getLocal']. getLocal)
    const navigate = useNavigate();

    const handleClickDetails = (idLocal) => {
        navigate (`/Locals/${idLocal}`)
    }

    
    return{
        isLoading,
        local,
        handleClickDetails
    }
}