import React, { useEffect } from 'react'
import { useRef, useState } from 'react'
import heroBanner from "../assets/hero_banner.png";
import copysvg from "../assets/copy.svg"
import Footer from './Footer.jsx'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const eye = useRef();
    const passwordRef = useRef();
    const [form,setForm] = useState({site: '', username: '', password: ''});
    const [passwordArray, setPasswordArray] = useState([]);

    useEffect(() => {   //foremost extracts all passwords from local storage if existing already
        let passwords = localStorage.getItem("passwords");
        if(passwords){
            setPasswordArray(JSON.parse(passwords));
        }
        /* console.log(JSON.parse(passwords)); */
    }, [])

    const showPassword = ()=>{
        if(eye.current.state === "blink"){
            eye.current.state = "hover-cross";
            passwordRef.current.type = "password";
        }
        else{
            passwordRef.current.type = "text";
            eye.current.state = "blink";
        }
    }

    const savePassword = () => {
        if(form.site.length != 0 && form.username.length != 0 && form.password.length != 0){
            /* console.log(form); */
            // passwordArray.push(form);    // DON'T DO THIS
            setPasswordArray([...passwordArray, {...form, id: uuidv4()}]);     // USE THIS
            localStorage.setItem("passwords", JSON.stringify([...passwordArray,{...form, id: uuidv4()}]));  // I didn't directly passed passwordArray because due to async natuer of JS the just above line to update passwordArray may not have been executed successfully
            /* console.log([...passwordArray,form]); */

            setForm({site: '', username: '', password: ''});    //clear the input fields

            toast.success('Password saved successfully!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else{
            toast.error('Invalid inputs!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    const deletePassword = (id)=>{
        /* console.log(`deleting ${id}`); */
        if(confirm("Are you sure to your delete password?")){
            setPasswordArray(passwordArray.filter(item => item.id != id));
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id != id)));

            toast.success('Password deleted successfully!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        }
    }

    const editPassword = (id)=>{
        setForm(passwordArray.filter(item => item.id === id)[0]);   //since it return an array hence we should use index 0

        //DELETE THE ITEM SO THAT FRESHLY EDITED ITEM CAN BE APPENDED
        /* deletePassword(id); */   //This also invoked confirm popup
        setPasswordArray(passwordArray.filter(item => item.id != id));  //first setForm then delete
        localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id != id)));
    }

    const handleFormChange = (event)=>{
        setForm({...form,[event.target.name]: event.target.value}); //when key is dynamic (comes from a variable), we use [];  since here 'name' is variable
    }

    const copyText = (text)=>{
        toast.success('Copied to clipboard!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        navigator.clipboard.writeText(text);
    }

  return (
    <div>
        <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
        <main className='min-h-screen relative z-10'>
            <div className='max-md:flex max-md:flex-wrap'>
                <div className='flex w-full items-center max-md:ml-5 md:justify-center justify-start gap-3 mb-5'>
                    <label htmlFor="siteName" className="block mb-2.5 text-sm w-15 font-medium text-heading">Website</label>
                    <div className="relative max-md:w-[70vw] md:w-1/2">
                        <div className="absolute flex items-center pointer-events-none">
                            <lord-icon
                                src="https://cdn.lordicon.com/rpviwvwn.json"
                                trigger="loop"
                                style={{width:"40px", height:"40px"}}>
                            </lord-icon>
                        </div>
                        <input value={form.site} onChange={handleFormChange} name='site' type="text" id="siteName" className="rounded-xl block w-full ps-11 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="https://www.website.com"/>
                    </div>
                </div>

                <div className='max-md:flex-wrap gap-5 flex m-auto'>
                    <div className='flex w-full items-center max-md:ml-5 md:justify-center justify-start gap-3'>
                        <label htmlFor="username" className="block mb-2.5 text-sm max-md:w-15 font-medium text-heading">Username</label>
                        <div className="relative max-md:w-[70vw] md:w-1/2">
                            <div className="absolute flex items-center pointer-events-none">
                                <lord-icon
                                    src="https://cdn.lordicon.com/kdduutaw.json"
                                    trigger="loop"
                                    style={{width:"38px", height:"38px"}}>
                                </lord-icon>
                            </div>
                            <input value={form.username} onChange={handleFormChange} name='username' type="text" id="username" className="rounded-xl block w-full ps-11 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="shubh_rana01"/>
                        </div>
                    </div>

                    <div className='flex w-full items-center md:justify-center justify-tart gap-3'>
                        <label htmlFor="pswd" className="block max-md:ml-5 mb-2.5 text-sm w-15 font-medium text-heading">Password</label>
                        <div className="relative max-md:w-[70vw] md:w-1/2">
                            <span className="absolute flex items-center pointer-events-none">
                                <lord-icon
                                    src="https://cdn.lordicon.com/exymduqj.json"
                                    trigger="loop"
                                    style={{width:"35px", height:"40px"}}>
                                </lord-icon>
                            </span>
                            <input ref={passwordRef} value={form.password} onChange={handleFormChange} name='password' type="password" id="pswd" className="rounded-xl block w-full ps-11 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="*************"/>
                            <span className='absolute top-0 right-3 cursor-pointer flex items-center justify-center' onClick={showPassword}>
                                <lord-icon
                                    ref={eye}
                                    src="https://cdn.lordicon.com/dicvhxpz.json"
                                    trigger="hover"
                                    state="hover-cross"
                                    style={{width:"33px", height:"40px"}}>
                                </lord-icon>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-center my-5'>
                <button className="cursor-pointer shadow ml-2 inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:border-blue-700 transition duration-150 ease-in-out" onClick={savePassword}>
                    <lord-icon
                        src="https://cdn.lordicon.com/vjgknpfx.json"
                        trigger="loop"
                        colors="primary:#ffffff,secondary:#ffffff"
                        style={{marginRight: "10px"}}>
                    </lord-icon>
                    Save Password
                </button>
            </div>

            <div>
                {
                    passwordArray.length === 0 && <div>
                        <div className="mt-10 slogan w-4/5 m-auto flex items-center flex-col gap-5">
                            <div className="text-3xl text-center font-medium">
                            You could just <span className="text-blue-500">forget</span> your{" "}
                            <span className="text-blue-500">password</span>{" "}
                            <span className="text-gray-500">anytime.</span>{" "}
                            </div>
                            <div className="text-3xl text-center font-medium">
                            Save it{" "}
                            <span className="text-blue-500">NOW !!!</span>
                            </div>
                        </div>               
                    </div>
                }

                {
                passwordArray.length != 0 && 
                <table className=' md:w-5/6 mx-auto table-fixed w-full'>
                    <thead>
                        <tr>
                            <th className='text-center rounded-md p-1.5 w-1/3 bg-blue-400'>Website</th>
                            <th className='text-center rounded-md p-1.5 w-1/3 bg-blue-400'>Username</th>
                            <th className='text-center rounded-md p-1.5 w-1/3 bg-blue-400'>Password</th>
                            <th className='text-center rounded-md p-1.5 w-20 bg-blue-400'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            passwordArray.map((item, index)=>{
                                return <tr key={index} className='bg-blue-200 h-[5vh] border-y-1 border-solid border-white'>
                                            <td className='text-center rounded-md p-1.5'>
                                                <div className='flex justify-between items-center'>
                                                    <a className='break-words whitespace-normal min-w-0 text-left' href={item.site} target='_blank'>{item.site}</a>
                                                    <img style={{width:"15px", height:"26px"}} className='md:mr-5 cursor-pointer' src={copysvg} alt="copy" onClick={() => copyText(item.site)} />
                                                </div>
                                            </td>
                                            <td className='text-center rounded-md p-1.5'>
                                                <div className='flex justify-between items-center'>
                                                    <p className='break-words whitespace-normal min-w-0 text-left'>{item.username}</p>
                                                    <img style={{width:"15px", height:"26px"}} className='md:mr-5 cursor-pointer' src={copysvg} alt="copy" onClick={() => copyText(item.username)} />
                                                </div>
                                            </td>
                                            <td className='text-center rounded-md p-1.5'>
                                                <div className='flex justify-between items-center'>
                                                    <p className='break-words whitespace-normal min-w-0 text-left'>{item.password}</p>
                                                    <img style={{width:"15px", height:"15px"}} className='md:mr-5 cursor-pointer' src={copysvg} alt="copy" onClick={() => copyText(item.password)} />
                                                </div>                                               
                                            </td>
                                            <td className='text-center rounded-md p-1.5'>
                                                <div className='flex justify-between items-center'>
                                                    <lord-icon
                                                        className="cursor-pointer"
                                                        src="https://cdn.lordicon.com/exymduqj.json"
                                                        trigger="hover"
                                                        style={{width:"26px", height:"26px"}}
                                                        onClick={() => editPassword(item.id)}>
                                                    </lord-icon>
                                                    <lord-icon
                                                        className="cursor-pointer"
                                                        src="https://cdn.lordicon.com/egqwwrlq.json"
                                                        trigger="hover"
                                                        colors="primary:#ffffff,secondary:#242424,tertiary:#ffffff,quaternary:#eeaa66"
                                                        style={{width:"25px", height:"25px"}}
                                                        onClick={() => deletePassword(item.id)}>
                                                    </lord-icon>
                                                </div>                                               
                                            </td>
                                        </tr>
                            })
                        }
                    </tbody>
                </table>
                }
            </div>
        </main>
        <div
            className="absolute mt-10 inset-0 opacity-15 bg-cover bg-center pointer-events-none"
            style={{ backgroundImage: `url(${heroBanner})` }}
        ></div>
        <Footer />
    </div>
  )
}

export default Manager