import { useNavigate } from "react-router-dom";
import "../BlogWriter.css";

export function ShowSelectedBlog() {
    let navigate = useNavigate();
    return <>
        <div id="main">
            <div className="breadcrumbs">
                <div className="container">
                    <h2>{sessionStorage.getItem('title')}</h2>
                </div>
            </div>
        </div>
        <br />
        <div className="pre">{sessionStorage.getItem('body')}</div>

        <div>
            <a className="get-started-btn" href="#" onClick={() => {
                navigate(-1);
            }}>Go Back</a>
        </div>

    </>
}