import axios from "axios";

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const res = await axios.post(
      "http://localhost:8000/api/upload",
      formData
    );
    return res.data;
  } catch (err) {
    throw err.response?.data || err.message || err;
  }
};
