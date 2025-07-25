// import React from "react"
// import logo from "../../public/logo.svg"
interface Pros {
    images:string;
    bigText:string;
    smallText:string;
}

export default function Header({images,bigText,smallText}:Pros) {
    return (
        <div className="flex flex-col items-center">
            <img className="w-[2.2rem] h-[2.2rem] mb-[2rem]" src={images} alt="logo" />
            <h1 className="text-[1.5rem] font-[inter] font-semibold">{bigText}</h1>
            <span className="text-[var(--first-text-color)] font-inter text-center text-[1rem]">{smallText}</span>
        </div>
    )
}