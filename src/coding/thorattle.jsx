import { useEffect, useRef, useState } from "react";

function Throttle(){
    const [count, setCount] = useState(0);
    const lastTimeRef = useRef(Date.now());

    // with useeffect
    useEffect(() => {
        const scrollEle = document.getElementById("scroll");

        const handleScrollbar = () =>{
            const now = Date.now();
            if(now - lastTimeRef.current >= 1000){
                lastTimeRef.current = now;
                setCount((prev) => prev + 1000);
                console.log("scroll", new Date(now).toUTCString())
            }
        }
        scrollEle.addEventListener('scroll', handleScrollbar)

        return () => scrollEle.removeEventListener('scroll', handleScrollbar);
    },[])

    // with useeffect and throattle function
    // const thorattle = (fn, delay) => {
    //     let time = Date.now();

    //     return (...args) => {
    //         const now = Date.now();
    //         if(now - time >= delay){
    //             time = now;
    //             fn(...args);
    //             console.log("scroll", new Date(now).toUTCString())
    //         }
    //     }
    // }
    // useEffect(() => {
    //     const scrollEle = document.getElementById("scroll");

    //     const handleScrollbar = thorattle(() =>{
    //         setCount((prev) => prev + 1000);
    //     }, 3000);

    //     scrollEle.addEventListener('scroll', handleScrollbar)

    //     return () => scrollEle.removeEventListener('scroll', handleScrollbar);
    // },[])

    return(
        <div
            id="scroll"
            style={{
                height: "500px",
                overflowY: "auto"
            }}
        >
            <div style={{ height: "3000px" }}>
                Thorattle Scrollbar: {count}
            </div>
        </div>
    )
}

export default Throttle;