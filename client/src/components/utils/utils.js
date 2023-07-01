export const formatAccount = (name) => {
<<<<<<< HEAD
  return name?.slice(0, 1);
=======
  const words = name?.split(" ");
  const firstLetter = words && words.length > 0 ? words[0]?.charAt(0) : "";
  const lastWord = words && words.length > 0 ? words[words.length - 1] : "";
  const lastLetter = lastWord?.charAt(0);
  return `${firstLetter}${lastLetter}`.toUpperCase();
>>>>>>> origin/update-source-v2
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
