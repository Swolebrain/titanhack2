import React from 'react';
import OurWorkCard from "./ourworkcard";
import KiddieKreditImg from "../images/kiddiekredit.svg";
import UvVectorImg from "../images/uv_vector.svg";

export default function OurWorkSection(props){
    return (
        <>
            <h1>Our Work</h1>
            <OurWorkCard projectName="Kiddie Kredit" urlImage={KiddieKreditImg}
                         aboutProject="A mobile app experience teaching financial literacy for all."/>
            <OurWorkCard projectName="UV Vector" urlImage={UvVectorImg}
                         aboutProject="A entertaiment app experience looking to dance."/>
        </>
    );
}

