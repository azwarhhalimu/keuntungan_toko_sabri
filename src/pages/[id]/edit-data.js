import { xeta_api } from "@/Utils/ENV_VARIABEL";
import AppBar from "@/Widget/AppBar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Edit_data = () => {
    const route = useRouter();
    const [tanggal, setTanggal] = useState("");
    const [keuntungan, setKeuntungan] = useState("");
    const [keterangan, setKeterangan] = useState("");
    const [nama, setNama] = useState("nama");

    const _simpan = (e) => {
        e.preventDefault();
        const options = {
            method: 'PATCH',
            headers: { Authorization: 'Bearer ' + xeta_api, 'Content-Type': 'application/json' },
            body: '{"tanggal":"' + tanggal + '","jumlah":' + keuntungan + ',"keterangan":"' + keterangan + '","nama":"' + nama + '"}'
        };

        fetch("https://azwar-halimu-s-workspace-k5qu0k.us-east-1.xata.sh/db/catatan_keuntngan:main/tables/keuntungan/data/" + getId, options)
            .then(response => response.json())
            .then(response => {
                route.back();
            })
            .catch(err => console.error(err));
    }
    const getId = typeof window !== "undefined" && window.location.pathname.split("/")[1];

    function _getData() {

        const options = {
            method: 'POST',
            headers: { Authorization: 'Bearer ' + xeta_api, 'Content-Type': 'application/json' },
            body: '{"filter": { "id": "' + getId + '"}}'
        };

        fetch('https://azwar-halimu-s-workspace-k5qu0k.us-east-1.xata.sh/db/catatan_keuntngan:main/tables/keuntungan/query?id=rec_che3dfhe0mklna6me44g', options)
            .then(response => response.json())
            .then(response => {
                setTanggal(response.records[0].tanggal);
                setNama(response.records[0].nama);
                setKeterangan(response.records[0].keterangan);
                setKeuntungan(response.records[0].jumlah);
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        _getData();
    }, [])
    return (<>
        <AppBar title="Edit Data" leading={true} />
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <form onSubmit={_simpan}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">
                                Tanggal
                            </label>
                            <input
                                value={tanggal}
                                onChange={(e) => {
                                    setTanggal(e.target.value);

                                }}

                                required type="date" className="form-control" id="exampleInputEmail1" placeholder="Tanggal hari ini" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">
                                Estimasi Keuntungan
                            </label>
                            <input
                                value={keuntungan}
                                onChange={(e) => {
                                    setKeuntungan(e.target.value);

                                }}
                                required type="text" className="form-control" id="exampleInputEmail1" placeholder="Estimasi Keuntungan" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">
                                Keterangan
                            </label>
                            <textarea
                                value={keterangan}
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
                                value={nama}
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

export default Edit_data;