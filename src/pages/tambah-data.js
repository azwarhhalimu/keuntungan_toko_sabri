import { xeta_api } from "@/Utils/ENV_VARIABEL";
import AppBar from "@/Widget/AppBar";
import { useRouter } from "next/router";
import { useState } from "react";
import { NumericFormat } from "react-number-format";

const Tambah_data = () => {
    const route = useRouter();
    const [tanggal, setTanggal] = useState("");
    const [keuntungan, setKeuntungan] = useState("");
    const [keterangan, setKeterangan] = useState("");
    const [nama, setNama] = useState("nama");
    const _simpan = (e) => {
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: { Authorization: 'Bearer ' + xeta_api, 'Content-Type': 'application/json' },
            body: '{"tanggal":"' + tanggal + '","jumlah":' + keuntungan + ',"keterangan":"' + keterangan + '","nama":"' + nama + '"}'
        };

        fetch('https://azwar-halimu-s-workspace-k5qu0k.us-east-1.xata.sh/db/catatan_keuntngan:main/tables/keuntungan/data?columns=id', options)
            .then(response => response.json())
            .then(response => {
                route.back();
            })
            .catch(err => console.error(err));
    }
    return (<>
        <AppBar title="Tambah Data" leading={true} />
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <form onSubmit={_simpan}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">
                                Tanggal
                            </label>
                            <input
                                onChange={(e) => {
                                    setTanggal(e.target.value);

                                }}
                                required type="date" className="form-control" id="exampleInputEmail1" placeholder="Tanggal hari ini" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">
                                Estimasi Keuntungan

                            </label>
                            <NumericFormat
                                onChange={(e) => {
                                    setKeuntungan(e.target.value.replaceAll(",", "").replace("Rp. ", ""));

                                }}
                                required prefix="Rp. " thousandSeparator={","} className="form-control" id="exampleInputEmail1" placeholder="Estimasi Keuntungan" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">
                                Keterangan
                            </label>
                            <textarea
                                onChange={(e) => {
                                    setKeterangan(e.target.value);

                                }}
                                required className="form-control" placeholder="Keterangan..." />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">
                                Nama Pembeli
                            </label>
                            <input
                                onChange={(e) => {
                                    setNama(e.target.value);

                                }}
                                type="text" className="form-control" placeholder="Nama Pembeli..." />
                        </div>



                        <button type="submit" className="btn btn-block btn-default">Simpan</button>
                    </form>

                </div>
            </div>
        </div>
    </>);
}

export default Tambah_data;