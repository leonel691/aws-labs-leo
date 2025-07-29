import logo from "../../public/logo.svg"
import Header from "../components/header"
import InputPassword from "../components/inputPassword"
import Ligne2 from "../components/ouAvec"
import Google from "../components/google"
import Github from "../components/github"
import CreateAccount from "../components/createButton"
import Text from "../components/Text"
import LigneProgressive from "../components/footerNav"
import InputEmail from "../components/inputEmail"

export default function Account() {
    return (
        <div className="px-[2rem] lg:px-[10rem] sm:px-[4rem] pt-[1rem]">
            <Header images={logo} bigText="Creation de compte" smallText="Rentrez vos infos pour creer votre compte ." />
            <InputEmail type="email" label="Email" placeHolder="abc@example.com" />
            <InputPassword />
            <Ligne2 />
            <Github />
            <Google />
            <CreateAccount />
            <Text />
            <div className="mb-12"></div>
            <div className="flex gap-2  justify-center items-center fixed bottom-1 left-1/2 -translate-x-1/2 px-[2rem] w-full ">
                <LigneProgressive color='bg-[#FFA273] opacity-[50%]' />
                <LigneProgressive color='bg-[var(--bg-input)]' />
                <LigneProgressive color='bg-[var(--bg-input)]' />
                <LigneProgressive color='bg-[var(--bg-input)]' />
            </div>
        </div>
    )
}