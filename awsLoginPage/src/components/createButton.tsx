interface CreateAccountProps {
    href: string;
}

export default function CreateAccount({ href }: CreateAccountProps) {
    return (
        <a href={href}>
            <input className="bg-[var(--primary-color)] text-white mt-[2rem] font-inter font-semibold w-full text-center rounded-[0.3rem] py-[0.2rem] sm:py-2 sm:font-[800] " type="button" value="Creer le compte" />
        </a>
    )

}
