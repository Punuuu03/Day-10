import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './App.css'

function Update() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: '',
        email: ''
    });

    useEffect(() => {
        axios.get('http://localhost:8081/read/' + id)
            .then(res => {
                console.log(res);
                setValues({ name: res.data[0].Name, email: res.data[0].Email });
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('http://localhost:8081/update/' + id, values)
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="Ccontainer">
            <form onSubmit={handleUpdate} className="Cform">
                <h2>Update Student</h2>
                <div className="Cform-group">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder="Enter Name" value={values.name}
                        onChange={e => setValues({ ...values, name: e.target.value })} />
                </div>
                <div className="Cform-group">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Enter Email" value={values.email}
                        onChange={e => setValues({ ...values, email: e.target.value })} />
                </div>
                <button className="Cbtn">Update</button>
            </form>
        </div>
    );
}

export default Update;
