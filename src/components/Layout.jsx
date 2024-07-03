import { Outlet, NavLink } from 'react-router-dom'
import EmptyVideoPage from './SideNavigation/common/EmptyVideoPage'
import VideoListingPage from './SideNavigation/common/VideoListingPageCards'
import { useEffect } from 'react'
import axios from "axios";
import { axiosInstance } from '../utils/dataLoader';

export default function Layout(){
    useEffect(()=>{
        axios.post("http://localhost:8000/api/v1/users/login",
            {
                "email": "spiderman4@mail.com",
                "password":"spiderman4"
            }
        ).then(function (response){
            const token = response?.data?.data?.accessToken;
            console.log(token)
            axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`
            localStorage.setItem('tokenKey', token)
                console.log(response);
        })
    })

  
    return(<>
        <header class="sticky inset-x-0 top-0 z-50 w-full border-b border-white bg-[#121212] px-4">
            <nav class="mx-auto flex max-w-7xl items-center py-2">
                <div class="mr-4 w-12 shrink-0 sm:w-16"></div>
                <div class="relative mx-auto hidden w-full max-w-md overflow-hidden sm:block">
                    <input class="w-full border bg-transparent py-1 pl-8 pr-3 placeholder-white outline-none sm:py-2" placeholder="Search"/>
                    <span class="absolute left-2.5 top-1/2 inline-block -translate-y-1/2"></span>
                </div>
                <button class="ml-auto sm:hidden"></button>
                <button class="group peer ml-4 flex w-6 shrink-0 flex-wrap gap-y-1.5 sm:hidden">
                    <span class="block h-[2px] w-full bg-white group-hover:bg-[#ae7aff]"></span>
                    <span class="block h-[2px] w-2/3 bg-white group-hover:bg-[#ae7aff]"></span>
                    <span class="block h-[2px] w-full bg-white group-hover:bg-[#ae7aff]"></span>
                </button>
                    <div class="fixed inset-y-0 right-0 flex w-full max-w-xs shrink-0 translate-x-full flex-col border-l border-white bg-[#121212] duration-200 hover:translate-x-0 peer-focus:translate-x-0 sm:static sm:ml-4 sm:w-auto sm:translate-x-0 sm:border-none">
                        <div class="relative flex w-full items-center justify-between border-b border-white px-4 py-2 sm:hidden">
                            <span class="inline-block w-12"></span>
                            <button class="inline-block w-8"></button>
                        </div>
                        <ul class="my-4 flex w-full flex-wrap gap-2 px-4 sm:hidden">

                            <li className="w-full">

                                <NavLink to="/Home"><button  className="flex w-full items-center justify-start gap-x-4 border border-white px-4 py-1.5 text-left hover:bg-[#ae7affd] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black">
                                <span className="inline-block w-full max-w-[20px] group-hover:mr-4 lg:mr-4"></span>
                                <span>Liked Videos</span>
                                </button>
                                </NavLink>
                            </li>
                            
                            <li className="w-full">
                                <NavLink to="/VideoDetailPage"><button  className="flex w-full items-center justify-start gap-x-4 border border-white px-4 py-1.5 text-left hover:bg-[#ae7affd] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black"><span class="inline-block w-full max-w-[20px] group-hover:mr-4 lg:mr-4"></span><span>My Content</span>
                                </button>
                                </NavLink>
                            </li>
                            
                            <li class="w-full">
                                <NavLink to="/tasks"><button  class="flex w-full items-center justify-start gap-x-4 border border-white px-4 py-1.5 text-left hover:bg-[#ae7aff] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black"><span class="inline-block w-full max-w-[20px] group-hover:mr-4 lg:mr-4"></span><span>Support</span>
                                </button>
                                </NavLink>
                            </li>
                            
                            <li class="w-full">
                                <NavLink to="/tasks"><button  class="flex w-full items-center justify-start gap-x-4 border border-white px-4 py-1.5 text-left hover:bg-[#ae7aff] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black"><span class="inline-block w-full max-w-[20px] group-hover:mr-4 lg:mr-4"></span><span>Settings</span>
                                </button>
                                </NavLink>
                            </li>
                            
                        </ul>
                            
                        <div class="mb-8 mt-auto flex w-full flex-wrap gap-4 px-4 sm:mb-0 sm:mt-0 sm:items-center sm:px-0">
                        <button class="w-full bg-[#383737] px-3 py-2 hover:bg-[#4f4e4e] sm:w-auto sm:bg-transparent">Log in</button>
                        <button class="mr-1 w-full bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto">Sign up</button>
                    </div></div></nav></header>
        <div class="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
            <aside class="group fixed inset-x-0 bottom-0 z-40 w-full shrink-0 border-t border-white bg-[#121212] px-2 py-2 sm:absolute sm:inset-y-0 sm:max-w-[70px] sm:border-r sm:border-t-0 sm:py-6 sm:hover:max-w-[250px] lg:sticky lg:max-w-[250px]">
                <ul class="flex justify-around gap-y-2 sm:sticky sm:top-[106px] sm:min-h-[calc(100vh-130px)] sm:flex-col">
                    <li class="">
                        <NavLink to="/Home">
                        <button class="flex flex-col items-center justify-center border-white py-1 focus:text-[#ae7aff] sm:w-full sm:flex-row sm:border sm:p-1.5 sm:hover:bg-[#ae7aff] sm:hover:text-black sm:focus:border-[#ae7aff] sm:focus:bg-[#ae7aff] sm:focus:text-black sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4"><span class="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4"></span><span class="block sm:hidden sm:group-hover:inline lg:inline">Home</span></button>
                        </NavLink>
                        </li>
                    
                    <li class="hidden sm:block">
                    <NavLink to="/LikedVideos">
                        <button class="flex flex-col items-center justify-center border-white py-1 focus:text-[#ae7aff] sm:w-full sm:flex-row sm:border sm:p-1.5 sm:hover:bg-[#ae7aff] sm:hover:text-black sm:focus:border-[#ae7aff] sm:focus:bg-[#ae7aff] sm:focus:text-black sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4"><span class="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4"></span><span class="block sm:hidden sm:group-hover:inline lg:inline">Liked Videos</span></button>
                        </NavLink>
                        </li>
                    
                    <li class="">
                    <NavLink to="/History">
                        <button class="flex flex-col items-center justify-center border-white py-1 focus:text-[#ae7aff] sm:w-full sm:flex-row sm:border sm:p-1.5 sm:hover:bg-[#ae7aff] sm:hover:text-black sm:focus:border-[#ae7aff] sm:focus:bg-[#ae7aff] sm:focus:text-black sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4"><span class="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4"></span><span class="block sm:hidden sm:group-hover:inline lg:inline">History</span></button>
                        </NavLink>
                        </li>

                    <li class="hidden sm:block">
                    <NavLink to="/messages">
                        <button class="flex flex-col items-center justify-center border-white py-1 focus:text-[#ae7aff] sm:w-full sm:flex-row sm:border sm:p-1.5 sm:hover:bg-[#ae7aff] sm:hover:text-black sm:focus:border-[#ae7aff] sm:focus:bg-[#ae7aff] sm:focus:text-black sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4"><span class="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4"></span><span class="block sm:hidden sm:group-hover:inline lg:inline">My Content</span></button>
                        </NavLink>
                        </li>
                    
                    <li class="">
                    <NavLink to="/messages">
                        <button class="flex flex-col items-center justify-center border-white py-1 focus:text-[#ae7aff] sm:w-full sm:flex-row sm:border sm:p-1.5 sm:hover:bg-[#ae7aff] sm:hover:text-black sm:focus:border-[#ae7aff] sm:focus:bg-[#ae7aff] sm:focus:text-black sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4"><span class="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4"></span><span class="block sm:hidden sm:group-hover:inline lg:inline">Collections</span></button>
                        </NavLink>
                        </li>
                    
                    <li class="">
                    <NavLink to="/messages">
                        <button class="flex flex-col items-center justify-center border-white py-1 focus:text-[#ae7aff] sm:w-full sm:flex-row sm:border sm:p-1.5 sm:hover:bg-[#ae7aff] sm:hover:text-black sm:focus:border-[#ae7aff] sm:focus:bg-[#ae7aff] sm:focus:text-black sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4"><span class="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4"></span><span class="block sm:hidden sm:group-hover:inline lg:inline">Subscribers</span></button>
                        </NavLink>
                        </li>
                    
                    <li class="hidden sm:block mt-auto">
                    <NavLink to="/messages">
                        <button class="flex flex-col items-center justify-center border-white py-1 focus:text-[#ae7aff] sm:w-full sm:flex-row sm:border sm:p-1.5 sm:hover:bg-[#ae7aff] sm:hover:text-black sm:focus:border-[#ae7aff] sm:focus:bg-[#ae7aff] sm:focus:text-black sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4"><span class="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4"></span><span class="block sm:hidden sm:group-hover:inline lg:inline">Support</span></button>
                        </NavLink>
                        </li>
                    
                    <li class="hidden sm:block">
                    <NavLink to="/messages">
                        <button class="flex flex-col items-center justify-center border-white py-1 focus:text-[#ae7aff] sm:w-full sm:flex-row sm:border sm:p-1.5 sm:hover:bg-[#ae7aff] sm:hover:text-black sm:focus:border-[#ae7aff] sm:focus:bg-[#ae7aff] sm:focus:text-black sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4"><span class="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4"></span><span class="block sm:hidden sm:group-hover:inline lg:inline">Settings</span></button>
                        </NavLink>
                        </li>
                    
                    </ul></aside>
            <section class="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
                <Outlet/>
            </section>
        </div>
    </>)
}