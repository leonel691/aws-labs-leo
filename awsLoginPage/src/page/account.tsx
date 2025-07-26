// src/page/account.tsx
import logo from "../../public/logo.svg"
import Header from "../components/header"
import Input from "../components/signin" // Assurez-vous que c'est le bon chemin pour votre composant Input
// L'importation de LignePassword n'est plus nécessaire ici si elle n'est utilisée que par Input
// import LignePassword from "../components/ligne1" // <-- SUPPRIMER OU COMMENTER CETTE LIGNE
import Ligne2 from "../components/ligne2"
import Google from "../components/google"
import Github from "../components/github"
import CreateAccount from "../components/createButton"
import Text from "../components/Text"
import LigneProgressive from "../components/ligne3"

export default function Account() {
    // Si vous avez besoin de récupérer les valeurs de l'email et du mot de passe
    // pour la soumission du formulaire, vous pouvez les gérer avec des états ici.
    // L'Input passera la valeur via la prop `onChange` ou `onPasswordChange`.
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    return (
        <div className="px-[2rem] pt-[5rem]">
            <Header images={logo} bigText="Creation de compte" smallText="Rentrez vos infos pour creer votre compte ." />
            
            {/* Input pour l'email - utilisez la prop 'onChange' */}
            <Input 
                type="email" 
                label="Email" 
                placeHolder="abc@example.com" 
                // onChange={(e) => setEmail(e.target.value)} // Décommentez pour gérer l'état de l'email ici
            />
            
            {/* Input pour le mot de passe - il inclut maintenant l'indicateur de force */}
            <Input 
                type="password" 
                label="Password" 
                placeHolder="**************" 
                // onPasswordChange={(e) => setPassword(e.target.value)} // Décommentez pour gérer l'état du mot de passe ici
            />
            
            {/*
                <LignePassword />
                CETTE LIGNE EST LA CAUSE DE L'ERREUR.
                Le composant Input rend déjà LignePassword en interne pour l'input de type "password".
                Laisser cette ligne ici signifie que vous essayez de rendre LignePassword une deuxième fois,
                mais sans lui donner la prop 'strengthScore' requise, d'où l'erreur TypeScript.
                SUPPRIMEZ OU COMMENTEZ CETTE LIGNE.
            */}
            
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
