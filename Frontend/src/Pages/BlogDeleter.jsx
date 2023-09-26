import { useState, useEffect } from "react";
import axios from "axios";
export default function BlogDeleter() {
    const [Blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5050/iut-cse/getblog').then(res => {
            // console.log(res)
            let arr = res.data.map(b => (b.title));
            arr = arr.filter((item, index) => arr.indexOf(item) === index);
            setBlogs(arr);
        })
    }, [Blogs]);

    const DeleteBlog = (b) => {
        const formData = { title: b };
        axios.post('http://localhost:5050/iut-cse/admin/deleteblog', formData).then(res => {
            console.log("Blog deleted");
            console.log(res);
            setBlogs([]);
        })
            .catch((error) => {
                console.error("Could not delete blog");
            })
    }

    let i = 0;
    return (<section id="about" className="about">
        <div className="container">
            <br />
            <h2>Delete Blogs</h2>
            <div className="row">
                {
                    Blogs.map(b => (

                        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" key={i++}>
                            <h3>{b}<button type="button" onClick={() => { DeleteBlog(b) }}>x</button></h3>
                        </div>
                    ))
                }
            </div>
        </div>
        <br /><br />
    </section>);


} 