//import EmptyVideoPage from "./common/EmptyVideoPage";
//import VideoListingPageList from "./common/VideoListingPageList";
import VideoListingPageCards from "./common/VideoListingPageCards";
import axios from "axios";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getData } from "../../utils/dataLoader";

// export const Loader = () => {
//     let fetch_data = getData("http://localhost:8000/api/v1/users/current-user")
//     console.log("loading data");
//     console.log(fetch_data);
//     return fetch_data;
//   };

export default function LikedVideos(){
    const profileData = useLoaderData();
    useEffect(()=>{
        axios.get("http://localhost:8000/api/v1/users/current-user"
        ).then(function (RES){
                console.log(RES.data);
        })
    })

    return(<>

        <VideoListingPageCards/>
        
    </>)
}

//<VideoListingPageList/>
//<EmptyVideoPage/>