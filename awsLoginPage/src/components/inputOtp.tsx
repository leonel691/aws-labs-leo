
import React, { useState, useRef, useEffect } from 'react';
import type { KeyboardEvent, ClipboardEvent } from 'react';

interface OTPInputProps {
  onComplete: (otp: string) => void;
  onValueChange?: (otp: string) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ onComplete, onValueChange }) => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value && !/^\d$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    const otpString = newOtp.join('');
    onValueChange?.(otpString);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    if (otpString.length === 4) {
      onComplete(otpString);
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      if (!otp[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text/plain');
    const digits = pasteData.replace(/\D/g, '').slice(0, 4);
    
    if (digits.length > 0) {
      const newOtp = ['', '', '', ''];
      for (let i = 0; i < digits.length; i++) {
        newOtp[i] = digits[i];
      }
      setOtp(newOtp);
      
      const otpString = newOtp.join('');
      onValueChange?.(otpString);
      
      if (otpString.length === 4) {
        onComplete(otpString);
      }
    }
  };

  return (
    <div className="flex justify-center gap-[1.3rem] mt-[2rem]">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          className="w-[3rem] sm:w-[5rem]  h-[3rem] sm:h-[5rem] mb-[2rem] sm:mb-[1rem] sm:mt-[2rem] sm:text-[2rem] text-center text-lg font-semibold border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
        />
      ))}
    </div>
  );
};

export default OTPInput;