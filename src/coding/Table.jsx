import { useEffect, useState } from "react";

function Table() {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {

        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };

    }, []);

    const formattedDate =
        `${String(currentDate.getDate()).padStart(2, "0")}-` +
        `${String(currentDate.getMonth() + 1).padStart(2, "0")}-` +
        `${currentDate.getFullYear()} ` +
        `${String(currentDate.getHours()).padStart(2, "0")}:` +
        `${String(currentDate.getMinutes()).padStart(2, "0")}:` +
        `${String(currentDate.getSeconds()).padStart(2, "0")}`;

    return (
        <div>
            Table view:

            <div>
                <table style={{ border: "1px solid white", borderCollapse: "collapse" }}>
                    <thead>
                        <tr>
                            <th style={{ border: "1px solid white", padding: "20px" }}>S.No</th>
                            <th style={{ border: "1px solid white", padding: "20px" }}>Name</th>
                            <th style={{ border: "1px solid white", padding: "20px" }}>Address</th>
                            <th style={{ border: "1px solid white", padding: "20px" }}>Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td style={{ border: "1px solid white", padding: "20px" }}>1</td>
                            <td style={{ border: "1px solid white", padding: "20px" }}>Kali</td>
                            <td style={{ border: "1px solid white", padding: "20px" }}>America</td>
                            <td style={{ border: "1px solid white", padding: "20px" }}>{formattedDate}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;