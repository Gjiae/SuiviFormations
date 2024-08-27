import clsx from "clsx";

interface Props {
    size?: "small" | "medium" | "large";
    variant?: "basique" | "secondaire" | "disabled" | "ico";
    icon?: any;
    iconTheme?: "accent" | "secondary" | "gray";
    iconPosition?: "left" | "center" | "right";
    disabled?: boolean;
    isLoading?: boolean;
    children?: React.ReactNode;
}

export const Button = ({
    size = "medium",
    variant = "basique",
    icon,
    iconTheme = "accent",
    iconPosition = "center",
    disabled,
    isLoading,
    children
}: Props) => {

    let variantStyles: string = "", sizeStyles: string = "", icoSize: number = 0;

    switch (variant) {
        case "basique": //Default
            variantStyles = "bg-secondary hover:bg-secondary/70 text-white rounded";
            break;
        case "secondaire":
            variantStyles = "bg-secondary/30 hover:bg-secondary/60 text-primary rounded"
            break;
        case "disabled":
            variantStyles = "bg-gray-400 border border-gray-500 text-gray-600 rounded cursor-not-allowed"
            break;
        case "ico":
            variantStyles = ""
            break;
    }

    switch (size) {
        case "small": //Default
            sizeStyles = ""
            break;
        case "medium":
            sizeStyles = ""
            break;
        case "large":
            sizeStyles = ""
            break;
    }

    return (
        <>
            <button type="button" className={clsx(variantStyles, icoSize)} onClick={() => console.log('click')} disabled={disabled}>
                {children}
            </button>
        </>
    )
}