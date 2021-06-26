import * as React from "react";
import "../styles/index.scss";
import NavBar from "../components/header.jsx"

const IndexPage = () => {
  return (
    <main className="maindiv">
        <div className="aboutmediv">
            <div className="titlediv">
                <h1>Hi, I'm Naveen</h1>
                <img src="images/syrusdark.png" alt="syrusdark"/> 
                <h2>This is a WIP page.</h2>
            </div>
        </div>
    </main>
  )
}

export default IndexPage
