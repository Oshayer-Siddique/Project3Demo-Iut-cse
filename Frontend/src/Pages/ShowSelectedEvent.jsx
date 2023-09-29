import { useNavigate } from "react-router-dom";


export function ShowSelectedEvent() {
    let navigate = useNavigate();
    return <>
        <div id="main">
            <div className="breadcrumbs">
                <div className="container">
                    <h2>{sessionStorage.getItem('eventtitle')}</h2>
                </div>
            </div>
        </div>
        <div className="container">
                <div className="row">
                    <img src="https://source.unsplash.com/random/?computer" alt="Some Competition Image" className="col-12" />
                </div>
            </div>
        <br />
        <div className="pre">{sessionStorage.getItem('eventbody')}</div>

        <div>
            <a className="get-started-btn" href="#" onClick={() => {
                navigate(-1);
            }}>Go Back</a>
        </div>

    </>
}