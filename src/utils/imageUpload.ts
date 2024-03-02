import axios from 'axios';
import toast from 'react-hot-toast';

export function ImageUpload(file :File) {
    const data = new FormData();
    data.set('file', file);

    const resPromise : Promise<string> = new Promise(async (resolve, reject) => {
        try {
            const response = await axios.post('/api/image', data).then(res => res.data);
            if (response.message === true) {
                resolve(response.link as string);
            } else {
                reject(response);
            }
        } catch (error) {
            reject(error);
        }
    });

    toast.promise(
        resPromise,
        {
            loading: 'Uploading...',
            success: 'Image Upload',
            error: '<b>Could not upload.</b>',
        }
    );

    return resPromise;
}
