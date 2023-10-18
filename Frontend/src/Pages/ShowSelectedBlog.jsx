import { useNavigate } from "react-router-dom";


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

        <div className="container">
            <div className="text-center">
                <img src={`${sessionStorage.getItem('imgURL')}`} className="img-thumbnail"/>
            </div>
        </div>

        <br/>

        <div className="card w-100 ">
            <div className="card">
                <div className="card-body">
                    <div className="pre">{sessionStorage.getItem('body')}</div>
                </div>
            </div>
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