import React, { useState } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import ImageAwsStore from '../../../../stores/ImageAwsStore';
import { ImageDetails } from '../../../../models/ProductFamilyTypes';

type Props = {}

type FormData = {
    image: FileList;
};

const ImageForm = (props: Props) => {  
    
    const { handleSubmit, register } = useForm<FormData>();

    const { onChange, ...imageField  } = register('image');

    const { uploadImages } = ImageAwsStore;

    const [uploadedImages, setImages] = useState<ImageDetails[]>([]);

    const onSubmit: SubmitHandler<FormData> = (data) => {
        if(data.image){
            console.log(data); 
            const formData = new FormData();
            formData.append('image', data.image[0]);
        } 
    };

    //make the parent have access to the function, set it as a prop
    const handleOnChange = (event : React.ChangeEvent<HTMLInputElement>) => {

        if(event.target?.files){
            uploadImages(event.target.files, "00023", "0001", "Mens", "Shoes").then( 
                (newImages) => setImages([...uploadedImages, ...newImages])
            );
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="file" {...imageField} multiple onChange={handleOnChange}/>
            <button type="submit">Upload</button>
        </form>
    );
}

export default ImageForm