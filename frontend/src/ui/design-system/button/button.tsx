import clsx from "clsx";

interface Props {
    size?: "small" | "medium" | "large";
    variant?: "basique" | "secondaire" | "cancel" | "disabled" | "ico";
    icon?: any;
    iconTheme?: "basique" | "secondary" | "gray";
    iconPosition?: "left" | "center" | "right";
    disabled?: boolean;
    isLoading?: boolean;
    children?: React.ReactNode;
}

export const Button = ({
    size = "medium",
    variant = "basique",
    icon,
    iconTheme = "basique",
    iconPosition = "center",
    disabled,
    isLoading,
    children
}: Props) => {

    let variantStyles: string = "", sizeStyles: string = "", icoSize: number = 0;

    switch (variant) {
        case "basique": //Default
            variantStyles = "bg-primary hover:bg-primary/70 text-gray rounded";
            break;
        case "secondaire":
            variantStyles = "bg-white hover:bg-stroke border border-primary text-primary rounded"
            break;
        case "cancel":
            variantStyles = "bg-white hover:bg-gray border border-stroke text-dark rounded"
            break;
        case "disabled":
            variantStyles = "bg-gray border border-stroke text-darkgray rounded cursor-not-allowed"
            break;
        case "ico":
            variantStyles = ""
            break;
    }

    switch (size) {
        case "small": //Default
            sizeStyles = "px-[25px] py-[8px]"
            break;
        case "medium":
            sizeStyles = "px-[30px] py-[11px]"
            break;
        case "large":
            sizeStyles = ""
            break;
    }

    return (
        <>
            <button type="button" className={clsx(variantStyles, sizeStyles, icoSize)} onClick={() => console.log('click')} disabled={disabled}>
                {children}
            </button>
        </>
    )
}