import { useNavigate } from "react-router-dom";


export default function ShowSelectedBlog() {
    let navigate = useNavigate();
    return <>
        <div id="main">
            <div className="breadcrumbs">
                <div className="container">
                    <h2>{sessionStorage.getItem('eventtitle')}</h2>
                </div>
            </div>
        </div>
        <br />

        <div className="container">
            <div className="text-center">
                <img src={`${sessionStorage.getItem('eventurl')}`} className="img-thumbnail" style={{width: "300px"}}/>
            </div>
        </div>

        <br/>

        <div className="container">
            <div className="text-justify" style={{ whiteSpace: "pre-wrap" }}>{sessionStorage.getItem('eventbody')}</div>
        </div>

        <br />

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