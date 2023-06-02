export const formatAccount = (name) => {
  return name?.slice(0, 1);
};
export const handleImageUpload = (image, setImageUrl) => {
  const data = new FormData();
  for (let i = 0; i < image.length; i++) {
    data.append("file", image[i]);
    data.append("upload_preset", "socialmedia");
    data.append("cloud_name", "tantqdev");
    fetch("https://api.cloudinary.com/v1_1/tantqdev/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setImageUrl((prevState) => [...prevState, { url: data?.url }]);
        console.log("data", data?.url);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
