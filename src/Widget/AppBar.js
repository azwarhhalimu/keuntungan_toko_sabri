import Link from "next/link";
import Height from "./Height";
import { NumericFormat } from "react-number-format";
import { useRouter } from "next/router";
const AppBar = ({ title, leading = false, total }) => {
    const route = useRouter();
    return (
        <>
            <div style={{
                padding: "13px",
                width: "100%",
                background: "#FFF",
                border: "1px solid #DFDFDF",
                left: "0",
                top: "0",
                position: "fixed", zIndex: "99",
            }}>
                <table width={"100%"}>
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
                            <td>
                                <NumericFormat displayType="text" value={total} allowLeadingZeros prefix="Total Rp. " thousandSeparator="," />
                            </td>
                            <td style={{ textAlign: "right" }}>
                                <button
                                    onClick={() => {
                                        route.push("/lihat-tanggal");
                                    }}
                                    className="btn">
                                    <i className="glyphicon glyphicon-calendar" />
                                </button>
                            </td>
                        </tr>

                    </tbody>
                </table>

            </div>
            <Height height={70} />
        </>
    );
}

export default AppBar;