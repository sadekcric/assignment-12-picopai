import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const image_api_key = import.meta.env.VITE_IMAGE_API_KEY;
const image_api_url = `https://api.imgbb.com/1/upload?key=${image_api_key}`;

const useUploadImage = () => {
  const axiosPublic = useAxiosPublic();
  const { setLoader } = useAuth();

  const uploadImage = async (data) => {
    setLoader(true);
    const image = await axiosPublic.post(image_api_url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    setLoader(false);
    return image;
  };

  return uploadImage;
};

export default useUploadImage;
