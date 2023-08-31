import {IoClose} from "react-icons/io5";
import { images } from "./images";
import ModalImagesListItem from "./Modal-image-listitem-app";
import ModalMainImage from "./Modal-MainImage-app";
import {useRef} from "react";

const ImagesModal = ({imageId, setImageId, modalOpen, setModalOpen}) => {
    const yScrollContainer = useRef(null)
    const xScrollContainer = useRef(null)
    const imageSelectHandel = (id) => {
        xScrollContainer.current.scrollLeft = id * 195
        yScrollContainer.current.scrollTop = Math.floor(id / (Math.floor(1 / Math.round(yScrollContainer.current.scrollHeight / 1500)) + 1)) * 170
    }
    const imagesList = images.map(e => <ModalImagesListItem url={e.url} key={e.id} id={e.id} imageId={imageId} setImageId={setImageId} handeler={imageSelectHandel}/>)
    const handelModalClose = () => {
        setModalOpen(false)
    }

    return (
        <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-[#444444cc] max-sm:items-end ${modalOpen ? 'opacity-100 z-10' : 'opacity-0 -z-10'} duration-500 transition-all transform`}>
            <div className={`w-[80vw] h-[80vh] bg-white rounded-3xl rounded-bl-none shadow flex flex-row justify-start max-sm:flex-col-reverse max-sm:relative max-sm:w-full max-sm:min-h-[90vh] max-sm:h-max max-sm:rounded-t-3xl ${modalOpen ? 'sm:scale-100' : 'sm:scale-0'} duration-500 transition-transform transform ${modalOpen ? 'max-sm:translate-y-0' : 'max-sm:translate-y-full'}`}>
                <div className='bg-[#f6f6f6] p-[20px] pr-[10px] rounded-tl-3xl max-sm:p-[15px] max-sm:rounded-none'>
                    <span className='flex flex-row-reverse items-center justify-between pb-[10px] pt-[1px] pl-[5px] text-[18px] font-bold text-[#666] max-sm:absolute max-sm:w-[95%] max-sm:top-[15px]'>
                        <span className="text-right"> Images </span>
                        <span className='text-[24px] cursor-pointer' onClick={handelModalClose}><IoClose/></span>
                    </span>
                    <div ref={xScrollContainer} className='overflow-hidden h-[93%] max-sm:w-[95%] max-sm:overflow-x-scroll max-sm:m-auto'>
                        <div ref={yScrollContainer} className='w-[400px] grid grid-cols-2 h-full overflow-y-scroll rtl pl-[5px] mt-[5px] max-xl:grid-cols-1 max-xl:w-max max-sm:w-max max-sm:flex max-sm:flex-row max-sm:gap-[15px] max-sm:pb-[10px] max-sm:overflow-y-hidden'>
                            {imagesList}
                        </div>
                    </div>
                </div>
                <div className='w-full h-[calc(100%-40px] rounded-lg overflow-hidden m-[20px] flex items-center justify-center max-sm:w-[90%] max-sm:pt-[50px] max-sm:pb-[20px] max-sm:items-center max-sm:justify-center max-sm:mx-auto max-sm:h-[calc(90vh-300px)]'>
                    <ModalMainImage imageId={imageId} setImageId={setImageId} haneler={imageSelectHandel}/>
                </div>
            </div>
        </div>
    );
};

export default ImagesModal;