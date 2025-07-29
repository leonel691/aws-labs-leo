export default function Text() {
    return (
        <div className="flex items-center justify-center mt-[3rem]">
            <span className="font-inter text-center font-semibold text-[var(--first-text-color)] sm:text-[1.2rem]">
                By clicking continue, you agree to our <br />
                <a className="underline" href="#">Terms of Service</a> and <a className="underline" href="#">Privacy Policy.</a>
            </span>
        </div>
    )
}