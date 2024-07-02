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

import EmptyVideoPage from './components/EmptyVideoPage'
import VideoListingPageCards from './components/VideoListingPageCards'
import VideoListingPageList from './components/VideoListingPageList'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
    >
      <Route path='/Home' element={<EmptyVideoPage />} >
        <Route path='/Home/Empty' element={<EmptyVideoPage />} />
        <Route path='/Home/VideoCards' element={<VideoListingPageCards />} />
        <Route path='/Home/VideoList' element={<VideoListingPageList />} />
      </Route>
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