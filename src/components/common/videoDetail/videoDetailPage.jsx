import Video from "./video";
import VideoDescription from "./videoDescription";
import Comments from "./comments"
import Suggestion from "./Suggestion";
import { useLoaderData } from "react-router-dom";


export default function VideoDetailPage(){
    const { type, data } = useLoaderData();

    return(
        
            <div class="flex w-full flex-wrap gap-4 p-4 lg:flex-nowrap">
                <div class="col-span-12 w-full">
                    <Video/>
                    <VideoDescription/>
                    <Comments/>
                    
                </div>
                <div class="col-span-12 flex w-full shrink-0 flex-col gap-3 lg:w-[350px] xl:w-[400px]">
                    <Suggestion/>
                </div>
            </div>
    )
}