
'use client'

import Image from "next/image";
import { images } from "./images";

const MainImage = ({imageId, setModalOpen}) => {
    const handelOpenModal = () => {
        setModalOpen(true)
    }

    return (
        <div className='flex justify-center' onClick={handelOpenModal}>
            <Image src={images[imageId].url} alt={"Image"} width={1000} height={1000} className="w-[70rem]"/>
        </div>
    );
};

export default MainImage;