import {Router, Request, Response, NextFunction} from 'express';
import { isBase64 } from '../utils/dataCheck';
import { imageInput } from '../types/imageInput';

const router = Router();

router.post('/upload' ,(req : Request,res : Response,next : NextFunction) => {
    const body : imageInput = req.body;
    let checkImageType = isBase64(body.image);
    let errorDescription : string;
    if(!checkImageType) {

    }
    else {
        errorDescription = "Image is not in base64"
        res.send({
            error_code : 'INVALID_DATA',
            error_description : errorDescription
        })
    }

})

router.patch('/confirm' ,(req : Request,res : Response,next : NextFunction) => {

})