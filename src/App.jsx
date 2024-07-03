import { useState } from 'react'

import Layout from './components/Layout'

import './App.css'

import {
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
  Route, 
  Navigate
} from "react-router-dom";

//common
import VideoDetailPage from './components/common/videoDetail/videoDetailPage'
``
//Home
import Home from './components/SideNavigation/Home';
import LikedVideos from './components/SideNavigation/LikedVideos';
//import LikedVideos,{Loader as LikedVideosLoader} from './components/SideNavigation/LikedVideos';
//<Route path='/LikedVideos' element={<LikedVideos />} loader={LikedVideosLoader} ></Route>
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
    >
      <Route path='/VideoDetailPage' element={<VideoDetailPage />}/>
      <Route path='/Home' element={<Home />} />
      <Route path='/LikedVideos' element={<LikedVideos />} ></Route>
      <Route path='/History' ></Route>
    </Route>
  )
);

function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={router}/>
  )
}

export default App
//<Route index element={<Index /> } />

//<Route path='/EmptyVideoPage' element={<EmptyVideoPage />} loader={ReposLoader} errorElement={<ErrorPage/>} />

//        <Route path='/Home/Empty' element={<EmptyVideoPage />} />
//<Route path='/Home/CardView' element={<VideoListingPageCards />} />
//<Route path='/Home/ListView' element={<VideoListingPageList />} />
//