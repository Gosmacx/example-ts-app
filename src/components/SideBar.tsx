import { NavLink } from 'react-router-dom'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logo5.png'
import logo6 from '../assets/logo6.png'

function App() {

    const setClass = ({ isActive }: { isActive: boolean }) => {
        if (isActive) return 'nav-link active-link'
        else return 'nav-link'
    }

    return (
        <nav className='h-full bg-gray-800 w-72 flex flex-col items-center ' >

            <div className='w-full bg-[#31363b] self-start text-white flex items-center justify-center h-14 ' >
                <span className='font-semibold text-3xl text-gray-400 ' >sociality.io</span>
            </div>

            <div className='grow w-full h-full flex items-center ' >

                <div className='w-16 h-full bg-[#2a2f33] pt-3 gap-3 flex items-center flex-col ' >

                    <div className='client-link' >
                        <div className='rod' ></div>
                        <div className='logo' >
                            <img src={logo1} />
                        </div>
                    </div>

                    <div className='client-link' >
                        <div className='rod' ></div>
                        <div className='logo' >
                            <img src={logo2} />
                        </div>
                    </div>

                    <div className='client-link' >
                        <div className='rod' ></div>
                        <div className='logo' >
                            <img src={logo3} />
                        </div>
                    </div>

                    <div className='client-link active-client ' >
                        <div className='rod' ></div>
                        <div className='logo' >
                            <img src={logo4} />
                        </div>
                    </div>

                    <div className='client-link' >
                        <div className='rod' ></div>
                        <div className='logo' >
                            <img src={logo5} />
                        </div>
                    </div>

                    <div className='client-link' >
                        <div className='rod' ></div>
                        <div className='logo' >
                            <img src={logo6} />
                        </div>
                    </div>



                </div>

                <div className='grow h-full bg-[#393d42] ' >

                    <NavLink to='notifications' className={setClass} >
                        <div className='link' >
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" className='svg-icon' ><path d="M2 10q0-2.2.888-4.162.887-1.963 2.537-3.388l1.425 1.4Q5.5 5.025 4.75 6.612 4 8.2 4 10Zm18 0q0-1.8-.75-3.388-.75-1.587-2.1-2.762l1.425-1.4q1.65 1.425 2.538 3.388Q22 7.8 22 10ZM4 19v-2h2v-7q0-2.075 1.25-3.688Q8.5 4.7 10.5 4.2v-.7q0-.625.438-1.062Q11.375 2 12 2t1.062.438q.438.437.438 1.062v.7q2 .5 3.25 2.112Q18 7.925 18 10v7h2v2Zm8-7.5ZM12 22q-.825 0-1.412-.587Q10 20.825 10 20h4q0 .825-.587 1.413Q12.825 22 12 22Zm-4-5h8v-7q0-1.65-1.175-2.825Q13.65 6 12 6q-1.65 0-2.825 1.175Q8 8.35 8 10Z" /></svg>
                            <span className='text-white grow ' >NOTIFICATIONS</span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" className='fill-black' ><path d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6Z" /></svg>
                            <div className='notch' style={{ borderColor: '#f55661 transparent transparent transparent' }} ></div>
                        </div>

                        <div className='sub-menu' >
                            <div className='sub-link' >
                                <span>•</span>
                                <span>Compose</span>
                            </div>
                            <div className='sub-link' >
                                <span>•</span>
                                <span>Feed</span>
                            </div>
                        </div>
                    </NavLink>

                    <NavLink to='summary' className={setClass} >
                        <div className='link' >
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" className='svg-icon' ><path d="M3 21v-2l2-2v4Zm4 0v-6l2-2v8Zm4 0v-8l2 2.025V21Zm4 0v-5.975l2-2V21Zm4 0V11l2-2v12ZM3 15.825V13l7-7 4 4 7-7v2.825l-7 7-4-4Z" /></svg>
                            <span className='text-white grow ' >SUMMARY</span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" className='fill-black' ><path d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6Z" /></svg>
                            <div className='notch' style={{ borderColor: '#f55661 transparent transparent transparent' }} ></div>
                        </div>

                        <div className='sub-menu' >
                            <div className='sub-link' >
                                <span>•</span>
                                <span>Compose</span>
                            </div>
                            <div className='sub-link' >
                                <span>•</span>
                                <span>Feed</span>
                            </div>
                        </div>
                    </NavLink>

                    <NavLink to='/' className={setClass}>
                        <div className='link' >
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" className='svg-icon' ><path d="M5.625 22.7q-.7 0-1.162-.463Q4 21.775 4 21.075V8.325q0-.7.463-1.163.462-.462 1.162-.462h8.15l-1 1h-7.15q-.25 0-.437.187Q5 8.075 5 8.325v12.75q0 .25.188.437.187.188.437.188h12.75q.25 0 .437-.188.188-.187.188-.437v-7.15l1-1v8.15q0 .7-.462 1.162-.463.463-1.163.463Zm6.375-8Zm4.875-7.725.75.7-6.625 6.6V15.7h1.4l6.675-6.625.675.7-6.9 6.925H10v-2.85Zm2.875 2.8-2.875-2.8 2.1-2.075q.45-.475 1.138-.475.687 0 1.137.475l.55.55q.475.475.475 1.138 0 .662-.475 1.137Z" /></svg>
                            <span className='text-white grow ' >PUBLISH</span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" className='fill-black' ><path d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6Z" /></svg>
                            <div className='notch' style={{ borderColor: '#f55661 transparent transparent transparent' }} ></div>
                        </div>

                        <div className='sub-menu' >
                            <div className='sub-link' >
                                <span>•</span>
                                <span>Compose</span>
                            </div>
                            <div className='sub-link' >
                                <span>•</span>
                                <span>Feed</span>
                            </div>
                        </div>
                    </NavLink>

                    <NavLink to='engage' className={setClass} >
                        <div className='link' >
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" className='svg-icon'><path d="M3.375 15.55V3.775q0-.325.225-.55Q3.825 3 4.15 3h11.925q.325 0 .55.225.225.225.225.55V11.7q0 .325-.225.537-.225.213-.55.213H6.45Zm3.85.675q-.325 0-.55-.213-.225-.212-.225-.562v-1H18.2l.65.65V6h1q.325 0 .55.225.225.225.225.55V19.3l-3.075-3.075ZM15.85 4H4.375v9.125L6.05 11.45h9.8ZM4.375 4v9.125Z" /></svg>
                            <span className='text-white grow ' >ENGAGE</span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" className='fill-black' ><path d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6Z" /></svg>
                            <div className='notch' style={{ borderColor: '#f55661 transparent transparent transparent' }} ></div>
                        </div>

                        <div className='sub-menu' >
                            <div className='sub-link' >
                                <span>•</span>
                                <span>Compose</span>
                            </div>
                            <div className='sub-link' >
                                <span>•</span>
                                <span>Feed</span>
                            </div>
                        </div>
                    </NavLink>

                    <NavLink to='listen' className={setClass}>
                        <div className='link' >
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" className='svg-icon' ><path d="M7.5 17.5v-11h1v11Zm4 4v-19h1v19Zm-8-8v-3h1v3Zm12 4v-11h1v11Zm4-4v-3h1v3Z" /></svg>
                            <span className='text-white grow ' >LISTEN</span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" className='fill-black' ><path d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6Z" /></svg>
                            <div className='notch' style={{ borderColor: '#f55661 transparent transparent transparent' }} ></div>
                        </div>

                        <div className='sub-menu' >
                            <div className='sub-link' >
                                <span>•</span>
                                <span>Compose</span>
                            </div>
                            <div className='sub-link' >
                                <span>•</span>
                                <span>Feed</span>
                            </div>
                        </div>
                    </NavLink>

                    <NavLink to='report' className={setClass}>
                        <div className='link' >
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" className='svg-icon'><path d="m3.3 17.5-.7-.7 6.7-6.775 4 4L19.725 7.7H16.4v-1h5v5h-1V8.4l-7.1 7.1-4-4Z" /></svg>
                            <span className='text-white grow ' >REPORT</span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" className='fill-black' ><path d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6Z" /></svg>
                            <div className='notch' style={{ borderColor: '#f55661 transparent transparent transparent' }} ></div>
                        </div>

                        <div className='sub-menu' >
                            <div className='sub-link' >
                                <span>•</span>
                                <span>Compose</span>
                            </div>
                            <div className='sub-link' >
                                <span>•</span>
                                <span>Feed</span>
                            </div>
                        </div>
                    </NavLink>


                </div>
            </div>

        </nav>
    )
}

export default App