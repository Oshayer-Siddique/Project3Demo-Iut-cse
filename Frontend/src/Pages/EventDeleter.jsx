import { useState, useEffect } from "react";
import axios from "axios";
export default function EventDeleter() {
    const [Events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5050/iut-cse/getEvent').then(res => {
            // console.log(res)
            let arr = res.data.map(b => (b.title));
            arr = arr.filter((item, index) => arr.indexOf(item) === index);
            setEvents(arr);
        })
    }, [Events]);

    const DeleteEvent = (event) => {
        const formData = { title: event };
        axios.post('http://localhost:5050/iut-cse/admin/deleteevent', formData).then(res => {
            console.log("Event deleted");
            console.log(res);
            setEvents([]);
        })
            .catch((error) => {
                console.error("Could not delete Event");
            })
    }

    let i = 0;
    return (<section id="about" className="about">
        <div className="container">
            <br />
            <h2>Delete Events</h2>
            <div className="row">
                {
                    Events.map(event => (

                        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" key={i++}>
                            <h3>{event}<button type="button" onClick={() => { DeleteEvent(event) }}>x</button></h3>
                        </div>
                    ))
                }
            </div>
        </div>
        <br /><br />
    </section>);


} 