import AppBar from "@/Widget/AppBar";
import { useEffect, useState } from "react";
import No_data from "@/Widget/No_data";
import { NumericFormat } from "react-number-format";
import { xeta_api } from "@/Utils/ENV_VARIABEL";
import Link from "next/link";
import Height from "@/Widget/Height";
import Loading from "@/Widget/Loading";
const Lihat_tanggal = () => {
    const [loading, setLoading] = useState(false);
    const [tanggal, setTanggal] = useState();
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);
    const _showTanggal = async (value) => {
        setLoading(true)
        const options = {
            method: 'POST',
            headers: { Authorization: 'Bearer ' + xeta_api, 'Content-Type': 'application/json' },
            body: '{ "filter": { "tanggal": { "$contains": "' + value + '" } } }'

        };

        await fetch('https://azwar-halimu-s-workspace-k5qu0k.us-east-1.xata.sh/db/catatan_keuntngan:main/tables/keuntungan/query', options)
            .then(response => response.json())
            .then(response => {
                setLoading(false);
                setData(response.records);

            })
            .catch(err => console.error(err));

    }

    useEffect(() => {
        let a = 0;
        data.map((list, index) => (
            a = a + list["jumlah"]
        ));
        setTotal(a);
    }, [data])
    return (<>
        {loading && <Loading text={"Mengambil data..."} />}
        <AppBar leading={true} title="Berdasarkan Tanggal" />
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    Pilih Tanggal
                    <input
                        onChange={(e) => {

                            _showTanggal(e.target.value);
                        }}
                        type="date" placeholder="Pilih Tanggal" className="form-control" />

                    {data.map((list, index) => (
                        <div key={index + "df"} class="panel panel-default">
                            <div class="panel-heading">{list["nama"]}
                                <span className='pull-right'>
                                    <Link href={"/" + list["id"] + "/edit-data"}>[Edit]</Link>
                                    {" "}&nbsp;
                                    {" "}&nbsp;
                                    <button onClick={() => {
                                        _delete(list["id"]);
                                    }}>[Hapus]</button>
                                </span>

                            </div>
                            <div class="panel-body">
                                {list["keterangan"]}<br />
                                <NumericFormat displayType='text' value={list["jumlah"]} allowLeadingZeros thousandSeparator="," prefix='Rp. ' /><br />

                                {list["tanggal"]}<br />
                            </div>
                        </div>

                    ))}
                    {(data.length == 0 && !loading) && <No_data />}
                </div>
            </div>
        </div>

        <Height height={100} />
        <div style={{
            borderTop: "1px solid #DFDFDF",
            width: "100%",
            background: "#FFF",
            position: "fixed",
            zIndex: "100",
            width: "100%",
            bottom: 0,
            left: 0,
            padding: "15px"
        }}>
            Total : <NumericFormat displayType="text" thousandSeparator={","} value={total} prefix="Rp. " />  | Jumlah Transaksi :  {data.length}
        </div>
    </>);
}

export default Lihat_tanggal;