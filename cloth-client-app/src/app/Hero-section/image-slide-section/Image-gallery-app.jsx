"use client"

import MainImage from "./Main-image-app";
import ImagesList from "./Image-List-app";
import {useState} from "react";
import ImagesModal from "./Image-modal-app";

const ImagesGallery = () => {
    const [imageId, setImageId] = useState(0)
    const [modalImageId, setModalImageId] = useState(0)
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <>
            <MainImage imageId={imageId} setModalOpen={setModalOpen}/>
            <ImagesList setImageId={setImageId} imageId={imageId} setModalImageId={setModalImageId} setModalOpen={setModalOpen}/>
            <ImagesModal imageId={modalImageId} setImageId={setModalImageId} modalOpen={modalOpen} setModalOpen={setModalOpen}/>Z
        </>
    );
};

export default ImagesGallery;