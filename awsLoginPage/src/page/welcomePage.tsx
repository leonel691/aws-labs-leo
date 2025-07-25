import logo from "../../public/logo.svg"
import Header from "../components/header"
import CreateAccount from "../components/createButton"
import Text from "../components/Text"
import LigneProgressive from "../components/ligne3"
import welcome from "../../public/welcome.svg"

export default function WelcomePage() {
    return (
        <div className="px-[2rem] pt-[5rem]">
            <Header images={logo} bigText="Bienvenue" smallText="Plus que 3 petites minutes ........" />
            <div className="w-full flex items-center justify-center">
                <img className="mt-8" src={welcome} alt="welcome" />
            </div>
            <CreateAccount />
            <Text />
            <div className="flex gap-2  justify-center items-center fixed bottom-4 left-1/2 -translate-x-1/2 p-4 w-screen ">
                <LigneProgressive color='bg-[#FFA273] opacity-[50%]' />
                <LigneProgressive color='bg-[#FFA273]' />
                <LigneProgressive color='bg-custom-gradient' />
                <LigneProgressive color='bg-[var(--primary-color)]' />
            </div>
        </div>
    )
}