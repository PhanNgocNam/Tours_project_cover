import { createContext, useState, useEffect } from "react";

export const tours_context = createContext()

function Tours_provider({ children }) {
    const [toursData, setToursData] = useState([])

    const callData = async () => {
        const response = await fetch('https://course-api.com/react-tours-project')
        const tours_data = await response.json()
        setToursData(tours_data)
    }

    useEffect(() => {
        callData()
    }, [])

    return (
        <tours_context.Provider value={toursData}>
            {children}
        </tours_context.Provider>
    );
}

export default Tours_provider;