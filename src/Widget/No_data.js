import Height from "./Height";

const No_data = () => {
    return (

        <div>
            <Height height={100} />
            <center>
                <i style={{ fontSize: "50px" }} className='glyphicon glyphicon-info-sign' />
                <div style={{ fontWeight: "bold" }}>Oppsszzz</div>
                <div>Data masih kosong</div>
            </center>
        </div>

    );
}

export default No_data;