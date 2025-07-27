
interface Pros {
    type: string; 
    label: string;
    placeHolder: string;
}

export default function InputEmail({ type, label, placeHolder }: Pros) {



    return (
        <form className="mt-[1.5rem] mb-3" action="" method="post">
            <label className="font-[700] text-[1rem] font-inter">
                {label}
                <div className="border-[var(--border-color)] mt-[0.5rem] rounded-[0.3rem]  border-[0.1rem] flex items-center">
                    <input
                        type={type}              
                        placeholder={placeHolder}
                        className="font-inter text-[1.2rem] w-full bg-[var(--bg-input)] font-[400] text-[var(--first-text-color)] outline-none rounded-[0.3rem] px-3 py-2"
                    />
                </div>
            </label>
        </form>
    );
}