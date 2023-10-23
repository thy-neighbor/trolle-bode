import AWS from 'aws-sdk';
import { action, observable, runInAction } from 'mobx';
import { ImageDetails } from '../models/ProductFamilyTypes';
import { StatusEnum } from '../models/StatusEnum';

type FileNameMetaData = {
    order : Number,
    altText : String
};

class ImageAwsStore {

    imageStore : ImageDetails[] = [];

    @observable state : StatusEnum = StatusEnum.READY;

    @action uploadImages = async (fileList : FileList, sku : String, variantSku : String, category : String, type : String, isMain : boolean = false) : Promise<ImageDetails[]> => {
        
        const files = Array.from(fileList);

        let uploadedImages : ImageDetails[] = [];

        if(files.length > 0){

            const s3 = new AWS.S3({
                accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
            });

            this.state = StatusEnum.LOADING;

            const uploadFile = async (file : File) => {

                try{

                    //file name structure "{4 digit Seq #} - {Alt Text Description}.jpeg"
                    const fileNameSplitData : String[] = file.name.split('-').map((element)=> element.trim());

                    if(fileNameSplitData.length !== 2 ){
                        console.log(`Error uploading file ${file.name}: filename is in incorrect format`);
                        return;
                    }

                    if(fileNameSplitData[0].length !== 4 ){
                        console.log(`Error uploading file ${file.name}: filename is in incorrect format`);
                        return;
                    }

                    if(isNaN(Number(fileNameSplitData[0]))){
                        console.log(`Error uploading file ${file.name}: filename is in incorrect format`);
                        return;
                    }

                    const fileNameMetaData : FileNameMetaData = {
                        order: Number(fileNameSplitData[0]),
                        altText: fileNameSplitData[1]
                    }

                    //make sure every image has the proper metadata
                    const params = {
                        Bucket: 'trolleproductbucket',
                        Key: `products/${category}/${type}/${sku}/${variantSku}/${file.name}`,
                        Body: file
                    };

                    const res = await s3.upload(params).promise();

                    runInAction(() => {
                        
                        console.log(`File ${file.name} uploaded successfully!`);

                        let imageDetail : ImageDetails = {
                            id : res.ETag,
                            url: res.Location,
                            name: file.name,
                            altText: fileNameMetaData.altText,
                            isMain: isMain
                        };

                        uploadedImages.push(imageDetail);

                        this.state = StatusEnum.FINISHED;
                    });
                } catch (error) {
                    console.error(`Error uploading file ${file.name}:`, error);
                    runInAction(() => {
                        this.state = StatusEnum.INCOMPLETE;
                    });
                }
            };

            const uploadPromises = files.map(uploadFile);

            return Promise.all(uploadPromises).then(() => uploadedImages);
 
        }else{
            console.log(`Error uploading files: file array is empty size=${files.length}`);
        }

        return uploadedImages;
    }

    @action reset = () : void => {
        this.imageStore = [];
        this.state = StatusEnum.READY;
    }
}

export default new ImageAwsStore();