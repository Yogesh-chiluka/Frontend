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
import EmptyVideoPage from './components/SideNavigation/Home/EmptyVideoPage'
import VideoListingPageCards from './components/SideNavigation/Home/VideoListingPageCards'
import VideoListingPageList from './components/SideNavigation/Home/VideoListingPageList'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
    >
      <Route path='/VideoDetailPage' element={<VideoDetailPage />}/>
      <Route path='/:Home' >
        <Route path='/Home/Empty' element={<EmptyVideoPage />} />
        <Route path='/Home/CardView' element={<VideoListingPageCards />} />
          
        <Route path='/Home/ListView' element={<VideoListingPageList />} />
      </Route>
      <Route path='/:LikedVideos' ></Route>
      <Route path='/:History' ></Route>
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