import Image from "next/image";
import { images } from "./images";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

const ModalMainImage = ({imageId, setImageId, haneler}) => {
    const handelBackwardImage = () => {
        if (imageId > 0) {setImageId(imageId - 1)}
        haneler(imageId - 1)
    }
    const handelForwardImage = () => {
        if (imageId < images.length - 1) {setImageId(imageId + 1)}
        haneler(imageId + 1)
    }

    return (
        <div className='w-full overflow-hidden flex items-center justify-between relative rtl shadow'>
            <span className='absolute bg-white flex items-center justify-center p-[20px] text-[26px] text-[#666] rounded-r-2xl cursor-pointer left-0 shadow-2xl max-sm:p-[10px] max-sm:text-[13px] max-sm:rounded-r-lg hover:bg-gray-100' onClick={handelBackwardImage}> <IoIosArrowBack/> </span>
            <span className='w-auto h-auto min-w-full min-h-full flex items-center justify-center max-sm:m-0'>
                <Image src={images[imageId].url} alt={"Image"} width={1000} height={1000} className="w-full h-full rounded-lg shadow"/>
            </span>
            <span className='absolute bg-white flex items-center justify-center p-[20px] text-[26px] text-[#666] rounded-l-2xl cursor-pointer right-0 shadow-2xl max-sm:p-[10px] max-sm:text-[13px] max-sm:rounded-l-lg hover:bg-gray-100' onClick={handelForwardImage}> <IoIosArrowForward/> </span>
        </div>
    );
};

export default ModalMainImage;