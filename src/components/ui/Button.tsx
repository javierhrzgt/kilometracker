export default function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className="flex h-14 min-w-[84px] flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-blue-500 px-5 text-base font-bold leading-normal tracking-[0.015rem] text-gray-100 hover:bg-sky-500" {... props}>
        </button>
    )
}
