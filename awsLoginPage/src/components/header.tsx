// import React from "react"
// import logo from "../../public/logo.svg"
interface Pros {
    images:string;
    bigText:string;
    smallText:string;
}

export default function Header({images,bigText,smallText}:Pros) {
    return (
        <div className="flex mb-[3rem] sm:mt-[2rem] flex-col items-center">
            <img className="w-[2.2rem] sm:w-[3rem] h-[2.2rem] sm:h-[3rem] mb-[2rem]" src={images} alt="logo" />
            <h1 className="text-[1.5rem] sm:text-[1.7rem] font-[inter] font-bold">{bigText}</h1>
            <span className="text-[var(--first-text-color)] font-inter text-center text-[1rem] sm:text-[1.4rem]">{smallText}</span>
        </div>
    )
}