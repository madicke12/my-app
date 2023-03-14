import React from "react";
import { ReactDOM } from "react-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Contact from "./components/Contacts";
//import  img1 from "./profil.png"

const App=()=>{
    
    //   <Contact
      //              img={img1}
        //            name= "Mr. cisse"
          //          phone ="(221) 76-583-61-93"
            //        email="cissemadicke8@gmail.com"
              //  />
    ///
    //
    /*
Challenge: Pass props to the Card component and display that data

- img (img1)
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/
    return(
        <div className="main-container">

            <Navbar/>
            <Hero/>
            <Card
                img ="../../public/image/profil.png"
                rating = {5.0}
                reviewCount={6}
                country = "Senegal"
                price={136}
            />

            
        </div>
    )
}
export default App;