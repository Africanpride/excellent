/* eslint-disable @next/next/no-img-element */
// React arrow component with tailwind css:
import React from 'react'

const Heading = ({title = 'Hello', breadcrumbs = 'World' }) => {


    
    return (
        <>
            <div className="relative p-5 bg-blue-100 shadow  h-[70vh] py-[100px] ">

                <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                    className="h-full w-full object-cover overflow-hidden bg-no-repeat bg-cover" 
                    src="/static/beach.jpg" 
                    alt=""/>

                    <div className="absolute inset-0 bg-blue-900 opacity-30"></div>

                <div className="absolute bottom-0 left-0 w-full  h-10 flex justify-start items-center">

                    <div className="text-xl bg-gray-400 w-fit h-10 text-white flex justify-center items-center px-5  ">
                        toLocaleDateString
                    </div>
                    <div className="text-xl bg-navy-900 w-fit h-10  text-white flex justify-center items-center px-5">
                        toLocaleDateString
                    </div>

                </div>
                </div>



                

            {/* <div className="hidden md:inline-block absolute z-0 bottom-0 right-5">
                <svg width={266} height={150} viewBox="0 0 266 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.7459 149.159L21.1953 149.035C27.3348 121.732 42.7639 96.9379 64.6404 79.2208C81.1798 65.8469 100.851 56.9023 121.801 53.2293C142.752 49.5564 164.292 51.2758 184.395 58.2258C204.497 65.1758 222.5 77.1276 236.709 92.9559C250.917 108.784 260.863 127.968 265.611 148.702L265.061 148.827C252.064 91.7633 202.053 51.9093 143.441 51.9093C85.5972 51.9093 34.4171 92.8086 21.7459 149.159Z" fill="#3F3D56" />
                <path d="M69.4789 50.0713H66.9666V149.308H69.4789V50.0713Z" fill="#3F3D56" />
                <path d="M92.6648 62.7179C92.8247 97.4185 68.411 125.662 68.411 125.662C68.411 125.662 43.738 97.6448 43.578 62.9442C43.4181 28.2435 67.8318 0 67.8318 0C67.8318 0 92.5048 28.0173 92.6648 62.7179Z" fill="#2d6bcf" />
                <path d="M244.29 108.224H49.8536V149.425H244.29V108.224Z" fill="#F2F2F2" />
                <path d="M43.6452 112.739L64.8102 68.4336H233.848L249.652 112.739H43.6452Z" fill="#3F3D56" />
                <path d="M174.868 71.2556H96.4167V97.2181H174.868V71.2556Z" fill="#F2F2F2" />
                <path d="M101.496 50.0907L89.0795 76.0531H182.206L174.868 50.0907H101.496Z" fill="#3F3D56" />
                <path d="M165.274 116.408H103.331V149.425H165.274V116.408Z" fill="#CCCCCC" />
                <path d="M90.4905 117.537H57.473V149.425H90.4905V117.537Z" fill="#CCCCCC" />
                <path d="M193.07 119.512H175.997V149.425H193.07V119.512Z" fill="#3F3D56" />
                <path d="M38.6445 83.8302H36.9866V149.316H38.6445V83.8302Z" fill="#3F3D56" />
                <path d="M53.9447 92.1755C54.0503 115.074 37.9398 133.712 37.9398 133.712C37.9398 133.712 21.6583 115.224 21.5527 92.3248C21.4472 69.4262 37.5576 50.7885 37.5576 50.7885C37.5576 50.7885 53.8392 69.2769 53.9447 92.1755Z" fill="#2d6bcf" />
                <path opacity="0.1" d="M53.9447 92.1755C54.0503 115.074 37.9398 133.712 37.9398 133.712C37.9398 133.712 21.6583 115.224 21.5527 92.3248C21.4472 69.4262 37.5576 50.7885 37.5576 50.7885C37.5576 50.7885 53.8392 69.2769 53.9447 92.1755Z" fill="black" />
                <path d="M17.0923 83.8302H15.4344V149.316H17.0923V83.8302Z" fill="#3F3D56" />
                <path d="M32.3925 92.1755C32.498 115.074 16.3876 133.712 16.3876 133.712C16.3876 133.712 0.106042 115.224 0.000516156 92.3248C-0.10501 69.4262 16.0054 50.7885 16.0054 50.7885C16.0054 50.7885 32.287 69.2769 32.3925 92.1755Z" fill="#2d6bcf" />
                <path d="M219.879 121.205H211.554V128.966H219.879V121.205Z" fill="#3F3D56" />
                <path d="M231.026 121.205H222.701V128.966H231.026V121.205Z" fill="#3F3D56" />
                <path d="M219.879 131.788H211.554V139.83H219.879V131.788Z" fill="#3F3D56" />
                <path d="M231.026 131.788H222.701V139.83H231.026V131.788Z" fill="#3F3D56" />
                <path d="M110.128 78.3597H103.613V84.4332H110.128V78.3597Z" fill="#3F3D56" />
                <path d="M118.852 78.3597H112.336V84.4332H118.852V78.3597Z" fill="#3F3D56" />
                <path d="M110.128 86.6417H103.613V92.936H110.128V86.6417Z" fill="#3F3D56" />
                <path d="M118.852 86.6417H112.336V92.936H118.852V86.6417Z" fill="#3F3D56" />
                <path d="M158.949 78.3597H152.433V84.4332H158.949V78.3597Z" fill="#3F3D56" />
                <path d="M167.672 78.3597H161.157V84.4332H167.672V78.3597Z" fill="#3F3D56" />
                <path d="M158.949 86.6417H152.433V92.936H158.949V86.6417Z" fill="#3F3D56" />
                <path d="M167.672 86.6417H161.157V92.936H167.672V86.6417Z" fill="#3F3D56" />
                <path d="M134.679 78.3597H128.164V84.4332H134.679V78.3597Z" fill="#3F3D56" />
                <path d="M143.403 78.3597H136.888V84.4332H143.403V78.3597Z" fill="#3F3D56" />
                <path d="M134.679 86.6417H128.164V92.936H134.679V86.6417Z" fill="#3F3D56" />
                <path d="M143.403 86.6417H136.888V92.936H143.403V86.6417Z" fill="#3F3D56" />
                <path d="M183.909 122.543H179.807V126.367H183.909V122.543Z" fill="#F2F2F2" />
                <path d="M189.402 122.543H185.3V126.367H189.402V122.543Z" fill="#F2F2F2" />
                <path d="M183.909 127.757H179.807V131.72H183.909V127.757Z" fill="#F2F2F2" />
                <path d="M189.402 127.757H185.3V131.72H189.402V127.757Z" fill="#F2F2F2" />
                <path d="M190.813 137.714C191.436 137.714 191.942 137.209 191.942 136.585C191.942 135.962 191.436 135.456 190.813 135.456C190.189 135.456 189.684 135.962 189.684 136.585C189.684 137.209 190.189 137.714 190.813 137.714Z" fill="#F2F2F2" />
                <path d="M165.415 119.935H103.331V120.5H165.415V119.935Z" fill="#F2F2F2" />
                <path d="M165.415 122.475H103.331V123.039H165.415V122.475Z" fill="#F2F2F2" />
                <path d="M165.415 125.015H103.331V125.579H165.415V125.015Z" fill="#F2F2F2" />
                <path d="M165.415 127.555H103.331V128.119H165.415V127.555Z" fill="#F2F2F2" />
                <path d="M165.415 130.094H103.331V130.659H165.415V130.094Z" fill="#F2F2F2" />
                <path d="M165.415 132.634H103.331V133.199H165.415V132.634Z" fill="#F2F2F2" />
                <path d="M165.415 135.174H103.331V135.738H165.415V135.174Z" fill="#F2F2F2" />
                <path d="M165.415 137.714H103.331V138.278H165.415V137.714Z" fill="#F2F2F2" />
                <path d="M165.415 140.254H103.331V140.818H165.415V140.254Z" fill="#F2F2F2" />
                <path d="M165.415 142.793H103.331V143.358H165.415V142.793Z" fill="#F2F2F2" />
                <path d="M165.415 145.333H103.331V145.898H165.415V145.333Z" fill="#F2F2F2" />
                <path d="M90.4905 119.935H57.473V120.5H90.4905V119.935Z" fill="#F2F2F2" />
                <path d="M90.4905 122.475H57.473V123.039H90.4905V122.475Z" fill="#F2F2F2" />
                <path d="M90.4905 125.015H57.473V125.579H90.4905V125.015Z" fill="#F2F2F2" />
                <path d="M90.4905 127.555H57.473V128.119H90.4905V127.555Z" fill="#F2F2F2" />
                <path d="M90.4905 130.094H57.473V130.659H90.4905V130.094Z" fill="#F2F2F2" />
                <path d="M90.4905 132.634H57.473V133.199H90.4905V132.634Z" fill="#F2F2F2" />
                <path d="M90.4905 135.174H57.473V135.738H90.4905V135.174Z" fill="#F2F2F2" />
                <path d="M90.4905 137.714H57.473V138.278H90.4905V137.714Z" fill="#F2F2F2" />
                <path d="M90.4905 140.254H57.473V140.818H90.4905V140.254Z" fill="#F2F2F2" />
                <path d="M90.4905 142.793H57.473V143.358H90.4905V142.793Z" fill="#F2F2F2" />
                <path d="M90.4905 145.333H57.473V145.898H90.4905V145.333Z" fill="#F2F2F2" />
                <path d="M233.707 91.1508C246.331 91.1508 256.565 80.9168 256.565 68.2926C256.565 55.6683 246.331 45.4343 233.707 45.4343C221.083 45.4343 210.849 55.6683 210.849 68.2926C210.849 80.9168 221.083 91.1508 233.707 91.1508Z" fill="#2d6bcf" />
                <path d="M248.099 66.035H235.965V53.9004H231.45V66.035H219.315V70.5502H231.45V82.6848H235.965V70.5502H248.099V66.035Z" fill="white" />
                </svg>
            </div> */}
            </div>


        </>
    )
    }
    export default Heading

