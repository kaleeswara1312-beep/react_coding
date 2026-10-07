import { useEffect } from "react";

function InfiniteScrollbar(){

    useEffect(() => {
        const scrollEle = document.getElementById("scroll");

        const handleScrollbar = () =>{
            // Window based scrolling
            // const scrollHeight = document.documentElement.scrollHeight;
            // const scrollTop = window.scrollY;
            // const clientHeight = window.innerHeight;

            // if (scrollTop + clientHeight >= scrollHeight - 10) {
            //     console.log("Reached bottom");
            // }

            // div container based scrolling
            const scrollHeight = scrollEle.scrollHeight;
            const scrollTop = scrollEle.scrollTop;
            const clientHeight = scrollEle.clientHeight;


            if(scrollTop + clientHeight >= scrollHeight - 10){
                console.log('scroll')
            }
        }

        scrollEle.addEventListener("scroll", handleScrollbar)

        return () => scrollEle.removeEventListener("scroll" , handleScrollbar)
    }, [])
    
    return (
        <div
            id="scroll"
            style={{
                height: "500px",
                overflowY: "auto"
            }}
        >
            <div style={{ height: "3000px" }}>
                Infinitescrollbar
            </div>
        </div>
    )
}

export default InfiniteScrollbar;