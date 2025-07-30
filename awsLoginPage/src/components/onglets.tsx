interface OngletPros {
    bigText: string;
    smallText: string;
    icons: string;
    textColor: string; // This prop will hold a Tailwind CSS text color class, e.g., "text-red-500"
}

export default function Onglets ({bigText,smallText,icons,textColor}:OngletPros) {
    return (
        <div className=" flex gap-8 pl-12 items-center">
            <div id="Icons" className="w-[4rem] h-[3rem] bg-[#FAFAFA] border-[0.1rem] border-[#00000033] rounded-2xl flex items-center justify-center overflow-hidden">
                <div dangerouslySetInnerHTML={{ __html: icons }} />
            </div>
            <div className="flex flex-col">
                <span className={`text-[#8080808C] ${textColor}`}>
                    {bigText}
                </span>
                <span className="text-[#8080808C]">
                    {smallText}
                </span>
            </div>
        </div>
    )
}