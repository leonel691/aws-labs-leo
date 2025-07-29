import logo from "../../public/logo.svg"
import Header from "../components/header"
import CreateAccount from "../components/createButton"
import Text from "../components/Text"
import LigneProgressive from "../components/footerNav"
import welcome from "../../public/welcome.svg"

export default function WelcomePage() {
    return (
        <div className="px-[2rem] sm:px-[4rem] pt-[5rem] sm:pt-[1rem]">
            <Header images={logo} bigText="Bienvenue" smallText="Plus que 3 petites minutes ........" />
            <div className="w-full flex items-center justify-center">
                <img className="mt-8 sm:w-[40rem]" src={welcome} alt="welcome" />
            </div>
            <CreateAccount />
            <Text />
            <div className="flex gap-2 justify-center items-center fixed bottom-1 left-1/2 -translate-x-1/2 px-[2rem] w-screen ">
                <LigneProgressive color='bg-[#FFA273] opacity-[50%]' />
                <LigneProgressive color='bg-[#FFA273]' />
                <LigneProgressive color='bg-custom-gradient' />
                <LigneProgressive color='bg-[var(--primary-color)]' />
            </div>
        </div>
    )
}