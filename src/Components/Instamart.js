
//This is not in function in yet!!!!!!!!


import { useState } from "react";

const Section = ({title, description, isVisible, setIsVisible}) => {

    return (
        <div className="insta-section">
            <h2>{title}</h2>

            {isVisible? <button className="hide-button" onClick={() => {setIsVisible(false)}}>Hide Description</button>
            : <button className="show-button" onClick={() => {setIsVisible(true)}}>Show Description</button>
            }

            {isVisible && <p>{description}</p>}
        </div>
    );
};


const Instamart = () => {

    const [visibleSection, setIsVisibleSection] = useState("About");

    return (
        <div className="instamart-main">
            <h1>Instamart</h1>

            <Section
            title={"About"}
            description = {"Swiggy has been synonymous with the on-demand delivery of food from your favorite restaurants. Launched in August 2020, Swiggy Instamart was an extension of Swiggy’s mission to enable unparalleled convenience, just the way we have with food. Swiggy Instamart was born in the middle of the pandemic, in August 2020 and has led the way in creating this category in the country. Today, Instamart is present in 28 cities and counting.  "}
            isVisible = {visibleSection === "about"}
            setIsVisible = {() => setIsVisibleSection("about")}
            /> 
        

            <Section 
            title={"Team"}
            description = {"Swiggy has been synonymous with the on-demand delivery of food from your favorite restaurants. Launched in August 2020, Swiggy Instamart was an extension of Swiggy’s mission to enable unparalleled convenience, just the way we have with food. Swiggy Instamart was born in the middle of the pandemic, in August 2020 and has led the way in creating this category in the country. Today, Instamart is present in 28 cities and counting."}
            isVisible = {visibleSection === "Team"}
            setIsVisible = {() => setIsVisibleSection("Team")}
            />

            <Section 
            title={"Careers"}
            description = {"Swiggy has been synonymous with the on-demand delivery of food from your favorite restaurants. Launched in August 2020, Swiggy Instamart was an extension of Swiggy’s mission to enable unparalleled convenience, just the way we have with food. Swiggy Instamart was born in the middle of the pandemic, in August 2020 and has led the way in creating this category in the country. Today, Instamart is present in 28 cities and counting."}
            isVisible = {visibleSection === "Careers"}
            setIsVisible = {() => setIsVisibleSection("Careers")}
            />
        

        </div>
    );
};

export default Instamart;