import logo from "../../public/logo.svg"
import Header from "../components/header"
import Input from "../components/signin"
import CreateAccount from "../components/createButton"
import Text from "../components/Text"
import LigneProgressive from "../components/footerNav"


export default function Finalisation() {
    return (
        <div className="px-[2rem] lg:px-[10rem] sm:px-[4rem] pt-[1rem]">
            <Header images={logo} bigText="Finalisation" smallText="Inviter 04 amis pour finaliser l’inscription ." />
            <Input type="text" label="Numeros de Télephone" placeHolder="Numero whatsapp" />
            <Input type="text" label="" placeHolder="Numero whatsapp" />
            <Input type="text" label="" placeHolder="Numero whatsapp" />
            <Input type="text" label="" placeHolder="Numero whatsapp" />
            <CreateAccount />
            <Text />
            <div className="mb-12"></div>
            <div className="flex gap-2  justify-center items-center fixed bottom-1 left-1/2 -translate-x-1/2 px-[2rem] w-full ">
                <LigneProgressive color='bg-[#FFA273] opacity-[50%]' />
                <LigneProgressive color='bg-[#FFA273]' />
                <LigneProgressive color='bg-custom-gradient' />
                <LigneProgressive color='bg-[var(--bg-input)]' />
            </div>
        </div>
    )
} 