import { responsiveFontSizes } from "@material-ui/core";
import { RepeatOneSharp } from "@material-ui/icons";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

export default function Views(){
    const [viewInput,setViewInput] = useState({
        text: ''
        })
    const [newAdd, setNewAdd] = useState({})
    const [allViews,setAllViews] = useState([])

    useEffect(() => {
        fetch("/api/getAll")
        .then((response) => response.json())
        .then((data) => setAllViews(data))
    },[newAdd])

    function handleChange(e){
        setViewInput({
            [e.target.name]:e.target.value
        })
    }
    function deleteTest(e){
         const option = {
            method: "DELETE",
            headers : {'Content-Type':'application/json'},
            body: JSON.stringify({id:e.target.value})
        }
        fetch(`api/delete/${e.target.value}`, option)
        .then((response) => response.json())
        .then((data) => setNewAdd(data))
    }
    async function handleSubmit(e){
        e.preventDefault();
        const option = {
            method: "POST",
            headers : {'Content-Type':'application/json'},
            body: JSON.stringify({test:viewInput.text})
        }
        fetch("/api/create", option)
        .then((response) => response.json())
        .then((data) => setNewAdd({data}))
    }

    const testList = allViews.map((data) =>{
        console.log(data)
        return(
            <>
            <h1>{data.test}</h1>
            <button onClick={deleteTest} value={data.id}>Delete</button>
            </>
        )
    })


    return(
        <>
        <h1>Views</h1>
        <Link to="/">
            <button>Home</button>
        </Link>
        <form onSubmit={handleSubmit}>
            <input type="text" name="text" value={viewInput.text} onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>
        {testList}
        </>
    )
}