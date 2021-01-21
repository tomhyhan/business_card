class Cloudinary {
  uploadImage = async (file) => {
    const formdata = new FormData();
    formdata.append('file', file);
    formdata.append('upload_preset', 'wavyistt');

    const requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    const result = await fetch(
      'https://api.cloudinary.com/v1_1/dqxbx0voh/image/upload',
      requestOptions
    );
    return await result.json();
  };
}

export default Cloudinary;
