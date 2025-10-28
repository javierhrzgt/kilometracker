export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-gray-100 py-4 pr-4 pl-4 text-base leading-normal font-normal placeholder:text-lg placeholder:opacity-50 focus:border-sky-700 focus:ring-0 focus:outline-0"
            {... props}
        />
    )
}