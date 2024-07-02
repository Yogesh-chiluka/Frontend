

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