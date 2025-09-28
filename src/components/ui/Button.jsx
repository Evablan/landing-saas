export default function Button({ as: Tag = "button", className = "", ...props }) {
    return (
        <Tag
            className={
                "inline-flex items-center justify-center rounded-lg px-4 py-2 border " +
                "bg-black text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 " +
                className
            }
            {...props}
        />
    );
}
