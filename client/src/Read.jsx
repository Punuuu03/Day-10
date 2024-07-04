import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './App.css'

function Read() {
    const { id } = useParams();
    const [student, setStudent] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8081/read/' + id)
            .then(res => {
                console.log(res);
                setStudent(res.data[0]);
            })
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div className="Rcontainer">
            <div className="Rdetails">
                <h2>Student Detail</h2>
                <p>ID: {student.ID}</p>
                <p>Name: {student.Name}</p>
                <p>Email: {student.Email}</p>
            </div>
            <Link to="/" className="Rbtn">Back</Link>
            <Link to={`/edit/${student.ID}`} className="Rbtn-edit">Edit</Link>
        </div>
    );
}

export default Read;
