import React from 'react';
import OurWorkCard from "./OurWorkCard";
import TitleSection from "./TitleSection";

import KiddieKreditImg from "../images/kiddiekredit.svg";
import UvVectorImg from "../images/uv_vector.svg";

const fountainBlue = "#68C1BD";
const shuttleGrey = "#576271";
const primaryUV = "#C43077";
const secondaryUV = "#100c07";


export default function OurWorkSection(props){
    return (
        <>
            <TitleSection title="Our Work" backgroundTitle="WORK"/>
            <OurWorkCard projectName="Kiddie Kredit" urlImage={KiddieKreditImg} urlWebSite="https://www.kiddiekredit.com/" 
                         primaryColor={fountainBlue} secondaryColor={shuttleGrey}
                         aboutProject="A mobile app experience teaching financial literacy for all."/>
            <OurWorkCard projectName="UV Latin Dance Online" urlImage={UvVectorImg}  urlWebSite="https://www.uvlatindanceonline.com"
                         direction="right"  primaryColor={primaryUV} secondaryColor={secondaryUV}
                         aboutProject="Learn to dance online."/>
        </>
    );
}

