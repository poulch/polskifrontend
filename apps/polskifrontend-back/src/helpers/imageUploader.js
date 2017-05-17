import cloudinary from 'cloudinary';

export default function imageUpload(imageUrl) {
  return new Promise((resolve) => {
    cloudinary.uploader.upload(imageUrl, result => {
      resolve(result);
    }, {
      public_id: 'favicon',
      secure: true,
      width: 40,
      height: 40,
      crop: 'limit'
    });
  });
}
