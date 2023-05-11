
import { xeta_api } from '@/Utils/ENV_VARIABEL';
import AppBar from '@/Widget/AppBar';
import { Inter } from 'next/font/google'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);
  const route = useRouter();
  const [loading, setLoading] = useState(false);
  const _getData = async () => {
    const options = {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + xeta_api, 'Content-Type': 'application/json' },
      body: '{"page":{"size":15}}'
    };

    fetch('https://azwar-halimu-s-workspace-k5qu0k.us-east-1.xata.sh/db/catatan_keuntngan:main/tables/keuntungan/query', options)
      .then(response => response.json())
      .then(response => {
        setData(response.records);
      })
      .catch(err => console.error(err));
  }
  useEffect(() => {

    _getData();
  }, [])
  return (
    <>
      <AppBar title={"Catatan Keuntungan"} />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            {data.map((list, index) => (
              <div key={index + "df"} class="panel panel-default">
                <div class="panel-heading">{list["nama"]}
                  <span className='pull-right'>
                    <Link href={"/" + list["id"] + "/edit-data"}>[Edit]</Link>
                    {" "}&nbsp;
                    {" "}&nbsp;
                    <Link href={"/" + list["id"] + "/edi-data"}>[Hapus]</Link>
                  </span>

                </div>
                <div class="panel-body">
                  {list["keterangan"]}<br />
                  {list["jumlah"]}<br />
                  {list["tanggal"]}<br />
                </div>
              </div>

            ))}
          </div>
        </div>
      </div>
      <div style={{ position: "fixed", width: "100%", padding: "5px", zIndex: "100", bottom: "0px" }}>
        <button
          onClick={() => {
            route.push("/tambah-data");
          }}
          className='btn btn-block btn-primary'><i className='glyphicon glyphicon-plus' /> Tambah Catatan</button>
      </div>

    </>
  )
}
