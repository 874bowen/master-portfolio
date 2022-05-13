// src/components/Testimonials.js

import React, {useState, useEffect} from "react";


export default function Testimonials() {

    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);

    useEffect(() => {
        if(images.length < 1) return;
            const newImageURLs = [];
            images.forEach(image => newImageURLs.push(URL.createObjectURL(image)));
            setImageURLs(newImageURLs);
        }, [images]
    );

    function onImageChange(e){
        setImages([...e.target.files]);
    }

    return (
        <section id="testimonials">
        <div className="container px-5 py-10 text-center">
            {/* <UsersIcon className="w-10 inline-block mb-4" /> */}
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-12">
            Client Testimonials
            </h1>
            <input type='file' accept='image/*' onChange={onImageChange}/>
            <div className="row">
                <div id="original" className="col-md-6">
                    <h2>Plain Image:</h2>
                    { imageURLs.map(imageSrc => <img width="100%" src={imageSrc}/>)}
                </div>
                <div id="original" className="col-md-6">
                    <h2>Encoded Image:</h2>
                    { imageURLs.map(imageSrc => <img width="100%" src={imageSrc}/>)}
                </div>
            </div>
        </div>
        </section>
  );
}