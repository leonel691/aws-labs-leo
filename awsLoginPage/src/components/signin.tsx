import React, { useState } from 'react';

interface Pros {
    type: string; 
    label: string;
    placeHolder: string;
    onPasswordChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ type, label, placeHolder, onPasswordChange }: Pros) {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };

    return (
        <form id={type} className="mt-[1.5rem]" action="" method="post">
            <label className="font-[700] text-[1rem] sm:text-[1.2rem] font-inter">
                {label}
                <div className="border-[var(--border-color)] mt-[0.5rem] rounded-[0.3rem]  border-[0.1rem] flex items-center">
                    <input
                        className="font-inter text-[1.2rem] w-full bg-[var(--bg-input)] font-[400] text-[var(--first-text-color)] outline-none rounded-[0.3rem] px-3 py-2"
                        placeholder={placeHolder}
                        type={type === 'password' && showPassword ? 'text' : type}
                        name={type}
                        id={type}
                        onChange={type === 'password' ? onPasswordChange : undefined}
                    />

                    {type === 'password' && (
                        <button
                            type="button"
                            onClick={handleTogglePasswordVisibility}
                            className="px-3 py-2 text-[var(--first-text-color)] cursor-pointer"
                            aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                        >
                            {showPassword ? 
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00539C"><path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/></svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00539C"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg> 
                        }
                        </button>
                    )}
                </div>
            </label>
        </form>
    );
}