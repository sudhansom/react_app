import React, {useState, useEffect} from 'react'


const useAllCountries = (url) => {
    const [data, setData] = useState([])

    useEffect(()=>{
        const fetchCountries = sync( url ) => {
            const allCountries = await fetch(url)
            const result = await allCountries.json()
            return result
        }
        setData(fetchCountries(url))

    }, [])


}

export default useAllCountries