import Header from "../components/header"
import InputOtp from "../components/inputOtp"
import Text from "../components/Text"
import LigneProgressive from "../components/ligne3"


import CreateAccount from "../components/createButton"

import logo from "../../public/logo.svg"

export default function Otp() {
    return (
        <div className="px-[2rem] pt-[10rem]">
            <Header images={logo} bigText="Verification OTP" smallText="Rentrez vos infos pour vous connecter ." />
            <InputOtp />
            <CreateAccount />
            <Text />
            <div className="flex gap-2  justify-center items-center fixed bottom-4 left-1/2 -translate-x-1/2 p-4 w-screen ">
                <LigneProgressive color='bg-[#FFA273] opacity-[50%]' />
                <LigneProgressive color='bg-[#FFA273]' />
                <LigneProgressive color='bg-[var(--bg-input)]' />
                <LigneProgressive color='bg-[var(--bg-input)]' />
            </div>
        </div>
    )
}