import { useEffect, useRef, useState } from "react"

function Debounce(){
    const [search, setSearch] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');

    let currentTimer = useRef(null);

    // with useeffect
    useEffect(() => {
        console.log("useefect")
        if(search){
        console.log("search")

            currentTimer.current = setTimeout(() => {
                setDebouncedSearch(search)
            }, 1000);
        }

        return () => {
            console.log("updated")
            clearTimeout(currentTimer.current);}
    },[search])


    const handleChange = (event) =>{
        setSearch(event.target.value)
    }

    // without useeffect

    // console.log("currentTimer.current", currentTimer.current)
    // const handleChange = (event) =>{
    //     setSearch(event.target.value);

    //     clearTimeout(currentTimer.current);

    //     currentTimer.current = setTimeout(() =>{
    //         setDebouncedSearch(event.target.value);
    //     }, 1000)
    // }

    // console.log("search", search)
    
    return (
        <div>
            <input type="text" value={search} placeholder="Please type anything" onChange={handleChange}/>

            {debouncedSearch}
        </div>
    )
}

export default Debounce;