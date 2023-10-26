import { useNavigate } from "react-router-dom";


export function ShowSelectedBlog() {
    let navigate = useNavigate();
    return <>
        <div id="main">
            <div className="container">
                <h2 className="text-center">{sessionStorage.getItem('title')}</h2>
            </div>
        </div>
        <br />

        <div className="container">
            <div className="text-center">
                <img src={`${sessionStorage.getItem('imgURL')}`} className="img-thumbnail" style={{ width: "300px" }} />
            </div>
        </div>

        <br />

        <div className="container">
            <div className="text-justify" style={{ whiteSpace: "pre-wrap" }}>{sessionStorage.getItem('body')}</div>
        </div>

        <br />



        <div>
            <div className="text-center">
                <a className="get-started-btn " href="#" onClick={() => {
                    navigate(-1);
                }}>Go Back</a>
            </div>
        </div>

    </>
}