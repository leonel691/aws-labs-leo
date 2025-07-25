interface Pros {
    type:string;
    label:string;
    placeHolder:string;

}
export default function Input({type,label,placeHolder}:Pros){
    return(
        <form id={type} className="mt-[1.5rem]" action="" method="post">
            <label className="font-[700] text-[1rem] font-inter">
                {label}
                <div className="border-[var(--border-color)] mt-[0.5rem] rounded-[0.3rem]  border-[0.1rem] ">
                    <input className="font-inter text-[1.2rem] w-full bg-[var(--bg-input)] font-[400] text-[var(--first-text-color)] outline-none rounded-[0.3rem] px-3" placeholder={placeHolder} type="email" name="" id="" />
                </div>
            </label>
        </form>
    )
}
