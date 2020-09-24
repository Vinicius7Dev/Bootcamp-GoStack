import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

const tempFolder = path.resolve(__dirname, '..', '..', 'tmp');
const uploadsFolder = path.resolve(tempFolder, 'uploads');

export default {
    tempFolder,
    uploadsFolder,

    storage: multer.diskStorage({
        destination: tempFolder,
        filename: (req, file, callback) => {
            const fileHash = crypto.randomBytes(10).toString('hex');
            const filename = `${fileHash}-${file.originalname}`;

            return callback(null, filename);
        }
    }),
};