import logo from "/logo.svg"
import Header from "../components/header"
import CreateAccount from "../components/createButton"
import Text from "../components/Text"
import LigneProgressive from "../components/footerNav"
import welcome from "/welcome.svg"
import Onglets from "../components/onglets"

export default function WelcomePage() {
    return (
        <div className="xl:grid xl:grid-cols-[40%_60%]">
            <div className="hidden xl:flex w-full h-full">
                <div className="w-full h-screen grid grid-rows-[15%_75%_10%] bg-[#00539C0A]">
                    <div className="w-full flex items-center justify-start pl-12">
                        <img src="bigLogo.svg" alt="logo" />
                    </div>
                    <div className="">
                        <Onglets textColor="text-[#8080808C]" icons='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#8080808C"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" /></svg>' bigText="Inscription" smallText="Entrez vos informations personnelles." />
                        <hr className="rotate-90 w-[4rem] my-[2rem] ml-[3rem] " />
                        <Onglets textColor="text-[#8080808C]" icons='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#8080808C"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg>' bigText="Validation OTP" smallText="Confirmez votre adresse e-mail." />
                        <hr className="rotate-90 w-[4rem] my-[2rem] ml-[3rem] " />
                        <Onglets textColor="text-[#8080808C]" icons='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#8080808C"><path d="M500-482q29-32 44.5-73t15.5-85q0-44-15.5-85T500-798q60 8 100 53t40 105q0 60-40 105t-100 53Zm220 322v-120q0-36-16-68.5T662-406q51 18 94.5 46.5T800-280v120h-80Zm80-280v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Zm-480-40q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM0-160v-112q0-34 17.5-62.5T64-378q62-31 126-46.5T320-440q66 0 130 15.5T576-378q29 15 46.5 43.5T640-272v112H0Zm320-400q33 0 56.5-23.5T400-640q0-33-23.5-56.5T320-720q-33 0-56.5 23.5T240-640q0 33 23.5 56.5T320-560ZM80-240h480v-32q0-11-5.5-20T540-306q-54-27-109-40.5T320-360q-56 0-111 13.5T100-306q-9 5-14.5 14T80-272v32Zm240-400Zm0 400Z" /></svg>' bigText="Invitez vos amis " smallText="Envoyez des invitations à vos amis." />
                        <hr className="rotate-90 w-[4rem] my-[2rem] ml-[3rem] " />
                        <Onglets textColor="text-[black]" icons='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="m226-559 78 33q14-28 29-54t33-52l-56-11-84 84Zm142 83 114 113q42-16 90-49t90-75q70-70 109.5-155.5T806-800q-72-5-158 34.5T492-656q-42 42-75 90t-49 90Zm178-65q-23-23-23-56.5t23-56.5q23-23 57-23t57 23q23 23 23 56.5T660-541q-23 23-57 23t-57-23Zm19 321 84-84-11-56q-26 18-52 32.5T532-299l33 79Zm313-653q19 121-23.5 235.5T708-419l20 99q4 20-2 39t-20 33L538-80l-84-197-171-171-197-84 167-168q14-14 33.5-20t39.5-2l99 20q104-104 218-147t235-24ZM157-321q35-35 85.5-35.5T328-322q35 35 34.5 85.5T327-151q-25 25-83.5 43T82-76q14-103 32-161.5t43-83.5Zm57 56q-10 10-20 36.5T180-175q27-4 53.5-13.5T270-208q12-12 13-29t-11-29q-12-12-29-11.5T214-265Z" /></svg>' bigText="Bienvenu à worketyamo" smallText="Votre inscription est terminée." />
                    </div>
                    <div className="flex justify-between px-12">
                        <div className="flex flex-row-reverse items-center cursor-pointer justify-center">
                            <span className="font-bold text-[var(--primary-color)]">
                                Vos details
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--primary-color)"><path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z" /></svg>
                        </div>
                        <span className="font-bold cursor-pointer flex items-center text-[var(--primary-color)]">
                            SignIn
                        </span>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="px-[2rem] lg:mb-[2rem] lg:px-[10rem] sm:px-[4rem] pt-[5rem] sm:pt-[1rem]">
                    <Header images={logo} bigText="Bienvenue" smallText="Plus que 3 petites minutes ........" />
                    <div className="w-full flex items-center justify-center">
                        <img className="mt-8 sm:w-[40rem] lg:w-[50rem]" src={welcome} alt="welcome" />
                    </div>
                    <CreateAccount href= "/"/>
                    <Text />
                    <div className="flex gap-2 justify-center items-center fixed bottom-1 left-1/2 -translate-x-1/2 px-[2rem] w-screen ">
                        <LigneProgressive color='bg-[#FFA273] opacity-[50%]' />
                        <LigneProgressive color='bg-[#FFA273]' />
                        <LigneProgressive color='bg-custom-gradient' />
                        <LigneProgressive color='bg-[var(--primary-color)]' />
                    </div>
                </div>
            </div>
        </div>

    )
}