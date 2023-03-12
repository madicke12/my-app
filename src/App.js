import React from "react";
import { ReactDOM } from "react-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Contact from "./components/Contacts";
import  img1 from "./profil.png"

const App=()=>{
    ///<Navbar/>
    //<Hero/>
    //<Card/>
    return(
        <div className="main-container">
            <div className="contacts">
                <Contact
                    img={img1}
                    name= "Mr. cisse"
                    phone ="(221) 76-583-61-93"
                    email="cissemadicke8@gmail.com"
                />
                <Contact
                    name ="Mr. wade"
                />
                <Contact
                    name=" Mr Diene"
                />
                <Contact
                    name="Mr yade"
                />
            </div>
        </div>
    )
}
export default App;