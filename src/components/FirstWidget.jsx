import React, { useState } from 'react'
import Question from "../assets/question.svg"
import Box from "../assets/box.svg"
import gsap from 'gsap';

const FirstWidget = () => {

    const [isActive, setIsActive] = useState("aboutme");

    const clicked = (e, active) => {
        // gsap.kill(e.currentTarget);
        setIsActive(active);
    }

    // const mouseEnter = (e, active) => {
    //     if (isActive !== active) {
    //         gsap.to(e.currentTarget, {
    //             borderRadius: '12px',
    //             backgroundColor: '#28292F',
    //             duration: 1,
    //         });
    //     }
    // }

    // const mouseLeave = (e, active) => {
    //     if (isActive !== active) {
    //         gsap.to(e.currentTarget, {
    //             duration: 1,
    //             background: 'none',
    //         });
    //     }
    // }

    return (
        <div className="h-[50%] w-[100%] bg-[#363c43] rounded-[27px] shadow-lg shadow-black">
            {/* first half */}
            <div className="p-4 flex gap-4">
                <div>
                    <img src={Question} className="" alt="" />
                </div>
                <div className="h-[56px] bg-black rounded-2xl flex justify-evenly items-center font-semibold text-[12px]">
                    <div
                        onClick={(e) => clicked(e, "aboutme")}
                        className={`rounded-xl px-[55px] h-[40px]  ${isActive === "aboutme" ? 'bg-[#28292F] text-white shadow-[5px_23px_38px_4px_black]' : 'text-[#b4aeae]'} 
                        flex justify-center items-center ml-2 hover:cursor-pointer 
                        ${isActive !== "aboutme" && 'hover:rounded-xl hover:bg-[#28292F] hover:duration-500 hover:ease-in-out'}`}
                    // onMouseEnter={(e) => mouseEnter(e, "aboutme")}
                    // onMouseLeave={(e) => mouseLeave(e, "aboutme")}
                    >
                        About Me
                    </div>
                    <div
                        onClick={(e) => clicked(e, "exp")}
                        className={`rounded-xl px-[54px] h-[40px] ${isActive === "exp" ? 'bg-[#28292F] text-white shadow-[5px_23px_38px_4px_black]' : 'text-[#b4aeae]'} 
                        flex justify-center items-center ml-2 hover:cursor-pointer   
                        ${isActive !== "exp" && 'hover:rounded-xl hover:bg-[#28292F] hover:duration-500 hover:ease-in-out'}`}
                    // onMouseEnter={(e) => mouseEnter(e, "exp")}
                    // onMouseLeave={(e) => mouseLeave(e, "exp")}
                    >
                        Experiences
                    </div>
                    <div
                        onClick={(e) => clicked(e, "rec")}
                        className={`rounded-xl px-[48px] h-[40px] ${isActive === "rec" ? 'bg-[#28292F] text-white shadow-[5px_23px_38px_4px_black]' : 'text-[#b4aeae]'}
                        flex justify-center items-center ml-2 mr-2 hover:cursor-pointer
                        ${isActive !== "rec" && 'hover:rounded-xl hover:bg-[#28292F] hover:duration-500 hover:ease-in-out'}`}
                    // onMouseEnter={(e) => mouseEnter(e, "rec")}
                    // onMouseLeave={(e) => mouseLeave(e, "rec")}
                    >
                        Recommended
                    </div>
                </div>
            </div>
            {/* second half */}
            <div className="flex gap-4 p-2 ml-2.5">
                <div className="mt-5">
                    <img src={Box} alt="" />
                </div>
                <div className="">
                    <p className="text-[#969696]">
                        I'm K Amith, a web developer skilled in Next.js and the MERN stack.
                        I've built projects like A-Expense Tracker and A-Chat, showcasing my expertise in full-stack development.
                        Currently in my final year of BTech, I'm eager to combine web development and cybersecurity in my next project.
                    </p>
                </div>
                <div className="">
                    <div className="h-[48px] w-[6px] bg-gradient-to-t from-[#4A4E54] to-[#888989] rounded-full shadow-[2px_2px_3px_1px_#23222299] "></div>
                </div>
            </div>
        </div>
    )
}

export default FirstWidget
