import React from "react";
import { Link } from "react-router-dom";
import {
    Button,
  } from "semantic-ui-react";

export default function Home(){
    return(
        <>
        <h1>Home</h1>
        <Link to="/views">
        <Button>Views</Button>
        </Link>
        </>
    )
}