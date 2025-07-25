import logo from "../../public/logo.svg"
import Header from "../components/header"
import Input from "../components/signin"
import LignePassword from "../components/ligne1"
import Ligne2 from "../components/ligne2"
import Google from "../components/google"
import Github from "../components/github"
import CreateAccount from "../components/createButton"
import Text from "../components/Text"
import LigneProgressive from "../components/ligne3"

export default function Account() {
    return (
        <div className="px-[2rem] pt-[5rem]">
            <Header images={logo} bigText="Creation de compte" smallText="Rentrez vos infos pour creer votre compte ." />
            <Input type="email" label="Email" placeHolder="abc@example.com" />
            <Input type="password" label="Password" placeHolder="**************" />
            <LignePassword />
            <Ligne2 />
            <Github />
            <Google />
            <CreateAccount />
            <Text />
            <div className="flex gap-2  justify-center items-center fixed bottom-4 left-1/2 -translate-x-1/2 p-4 w-screen ">
                <LigneProgressive color='bg-[#FFA273] opacity-[50%]' />
                <LigneProgressive color='bg-[var(--bg-input)]' />
                <LigneProgressive color='bg-[var(--bg-input)]' />
                <LigneProgressive color='bg-[var(--bg-input)]' />
            </div>

        </div>
    )
}