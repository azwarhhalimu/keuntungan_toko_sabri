import Height from "./Height";

const AppBar = ({ title }) => {
    return (
        <>
            <div style={{
                padding: "10px",
                width: "100%",
                background: "#FFF",
                border: "1px solid #DFDFDF",
                left: "0",
                top: "0",
                position: "fixed", zIndex: "99",
            }}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <div style={{ fontWeight: "bold" }}>{title}</div>
                            </td>
                        </tr>

                    </tbody>
                </table>

            </div>
            <Height height={50} />
        </>
    );
}

export default AppBar;