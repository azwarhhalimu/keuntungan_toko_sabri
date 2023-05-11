import AppBar from "@/Widget/AppBar";

const Tambah_data = () => {
    return (<>
        <AppBar title="Tambah Data" leading={true} />
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">
                                Tanggal
                            </label>
                            <input required type="date" className="form-control" id="exampleInputEmail1" placeholder="Tanggal hari ini" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">
                                Estimasi Keuntungan
                            </label>
                            <input required type="text" className="form-control" id="exampleInputEmail1" placeholder="Estimasi Keuntungan" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">
                                Keterangan
                            </label>
                            <textarea required className="form-control" placeholder="Keterangan..." />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">
                                Nama Pembeli
                            </label>
                            <input type="text" className="form-control" placeholder="Nama Pembeli..." />
                        </div>



                        <button type="submit" className="btn btn-block btn-default">Simpan</button>
                    </form>

                </div>
            </div>
        </div>
    </>);
}

export default Tambah_data;