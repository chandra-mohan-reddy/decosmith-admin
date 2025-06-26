import { masterClient } from './httpClient';
const handleImages3 = async (e) => {
  console.log('triggered');
  let formData = new FormData();
  formData.append('file', e.target.files[0]);
  try {
    let res = await masterClient.post('awss3/upload-file', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log('s3 res', res);

    return { clientStatus: true, data: res.data };
    // if (res?.data?.status) {
    //   handleImagesState(e, res?.data?.original_image_url);
    // }
  } catch (error) {
    return { clientStatus: false, data: error };
    // alert('error uploading Image');
  }
};

export { handleImages3 };
