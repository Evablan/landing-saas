export default function Container({ className = "", ...props }) {
    return <div className={"mx-auto max-w-full px-4 " + className} {...props} />;
}
