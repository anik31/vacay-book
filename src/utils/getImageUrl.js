export async function getImageUrl(file){
    const formdata = new FormData();

    formdata.append("file", file);
    formdata.append("cloud_name", process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);
    formdata.append("upload_preset", process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);
  
    let res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "post",
        mode: "cors",
        body: formdata,
      }
    );
    let json = await res.json();
    return json.secure_url;
  }