
import { xeta_api } from '@/Utils/ENV_VARIABEL';
import AppBar from '@/Widget/AppBar';
import Loading from '@/Widget/Loading';
import No_data from '@/Widget/No_data';
import { Inter } from 'next/font/google'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';

export default function Home() {
  const [data, setData] = useState([]);
  const route = useRouter();
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(0);
  const _delete = (id) => {
    const options = {
      method: 'DELETE',
      headers: { Authorization: 'Bearer ' + xeta_api, 'Content-Type': 'application/json' },

    };

    const a = window.confirm("Apakah anda ingin hapus data ini?");
    if (a)

      fetch('https://azwar-halimu-s-workspace-k5qu0k.us-east-1.xata.sh/db/catatan_keuntngan:main/tables/keuntungan/data/' + id + '?columns=id', options)
        .then(response => response.json())
        .then(response => {
          setReload(reload + 1);
        })
        .catch(err => console.error(err));
  }

  const _getData = async () => {

    let today = new Date();

    let year = today.getFullYear();
    let month = String(today.getMonth() + 1).padStart(2, '0');
    let day = String(today.getDate()).padStart(2, '0');

    let formattedDate = `${year}-${month}-${day}`;
    setLoading(true)
    const options = {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + xeta_api, 'Content-Type': 'application/json' },
      body: '{ "filter": { "tanggal": { "$contains": "' + formattedDate + '" } } }'

    };

    await fetch('https://azwar-halimu-s-workspace-k5qu0k.us-east-1.xata.sh/db/catatan_keuntngan:main/tables/keuntungan/query', options)
      .then(response => response.json())
      .then(response => {
        setLoading(false);
        setData(response.records);

      })
      .catch(err => console.error(err));




  }
  const _ab = () => {
    let a = 0;
    data.map((list, index) => (
      a = a + list["jumlah"]
    ));
    setTotal(a);
  }
  useEffect(() => {
    _ab();
  }, [data]);
  useEffect(() => {

    _getData();


  }, [reload])
  return (
    <>
      {loading && <Loading text="Loading..." />}
      <AppBar total={total} title={"Catatan Keuntungan"} />
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
