import React from 'react'
import Lightroom from 'react-lightbox-gallery'
import GalleryImg1 from "../../assets/images/gallery/gallary1.png"
import GalleryImg2 from "../../assets/images/gallery/gallary2.png"
import GalleryImg3 from "../../assets/images/gallery/gallary3.png"
import GalleryImg4 from "../../assets/images/gallery/gallary4.png"
import GalleryImg5 from "../../assets/images/gallery/gallary5.png"
import GalleryImg6 from "../../assets/images/gallery/gallary6.png"


const Gallery = () => {

    var images = [
        {
            src: GalleryImg1,
            desc: "Person wearing shoes",
            sub: "Gift Habeshaw"
        },
        {
            src: GalleryImg2,
            desc: "Blonde woman wearing sunglasses smiling at the camera ",
            sub: "Dmitriy Frantsev"
        },
        {
            src: GalleryImg3,
            sub: "Harry Cunningham"
        },
        {
            src: GalleryImg4,
            desc: "Jaipur , Rajasthan India",
            sub: "Liam Baldock"
        },
        {
            src: GalleryImg5,
            sub: "Verne Ho"
        },
        {
            src: GalleryImg6,
            desc: "Rann of kutch , India",
            sub: "Hari Nandakumar"
        },
    ];

    var settings = {
        columnCount: {
            default: 3,
            mobile: 2,
            tab: 3
        },
        mode: "dark",
        enableZoom:false,
    };
    return (
        <Lightroom images={images} settings={settings} />
   );
}

export default Gallery