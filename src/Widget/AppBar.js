import Link from "next/link";
import Height from "./Height";

const AppBar = ({ title, leading = false }) => {
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
                            {leading &&
                                <>
                                    <td>
                                        <Link href="/"><i className="glyphicon glyphicon-chevron-left" />Back</Link>
                                    </td>
                                    <td width={"20px"}></td>
                                </>
                            }
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