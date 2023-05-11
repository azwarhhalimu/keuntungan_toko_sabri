const Loading = ({ text }) => {
    return (
        <div style={{
            position: "fixed", width: "100%",
            zIndex: "100", top: "30%"
        }}>
            <div style={{ margin: "auto", color: "red", textAlign: "center" }}>
                <img style={{ width: "30px" }} src={"/loading.gif"} />
                &nbsp;
                {text}
            </div>

        </div>

    );
}

export default Loading;