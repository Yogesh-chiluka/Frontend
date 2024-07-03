import axios from "axios";

const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  const axiosInstance = axios.create({
    headers,
  });
export {axiosInstance}

export const dataLoader = async ({ params }) => {

    const { type } = params;
    const typeURL = () =>{
        switch(type){
            case 'Home':
                return  "/api/v1/videos/";
            case 'LikedVideos':
                return "/api/v1/likes/videos";
                break;
            case 'History':
                return  "/api/v1/users/history";
        }
    }



    const response = await fetch(typeURL);
    const data = await response.json();
    return { type, data}
}




export function getData(data) {
    
    return axios.get(data)
      .then(function (response) {
        console.log(response);
        return response.data; // <-- returned to getReasonTypes
      })
      .catch(function (error) {
        console.log(error);
        throw error;
      });
  }
