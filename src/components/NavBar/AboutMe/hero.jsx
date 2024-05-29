import React from "react";
import { getImageUrl } from "../../../ulils";

export const Hero = () => {
    const imageUrl = getImageUrl("IMG_2966.png");
    //console.log(imageUrl); // Check the URL in the console
    return(
        <section>
            <div>
                <h1> hello, i'm Anjile Kasturi </h1>
                <p>I'm an Engerneering student @UWaterloo in Canada. 
                    I love you all </p>
                <a href="mailto: anjilekasturiak@gmail.com">Contact Moi</a>
            </div>
            <img src={imageUrl} alt="Hero image of me"/> 
        </section>
    );
};
