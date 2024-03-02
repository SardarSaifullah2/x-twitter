import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";
import uniqid from 'uniqid';
export async function POST(req:Request){
    const data = await req.formData() 
    const image = data.get('file') as File
    const randomId = uniqid()
    const ext = image?.type.split('/')[1]
    const newFileName = randomId + '.' + ext

    const region = process.env.AWS_BUCKET_REGION
    const bucketName = process.env.AWS_BUCKET_NAME
    let chunks = []
    const bytes = await image.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const s3 = new S3Client({
        region ,
        credentials:{
            accessKeyId : process.env.AWS_ACESS_KEY as string , 
            secretAccessKey : process.env.AWS_ACCESS_SECRET_KEY as string
        }
    })
    await s3.send(new PutObjectCommand({
        Bucket : bucketName ,
        Key : newFileName ,
        Body : buffer ,
        ContentType : image.type
    }))

    const link = `https://${bucketName}.s3.${region}.amazonaws.com/${newFileName}`


    return NextResponse.json({
        message : true ,
         link
    })
}

