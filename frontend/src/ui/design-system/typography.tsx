import clsx from "clsx";

interface Props {
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "Lead" | "body-lg" | "body-base" | "body-sm" | "caption1" | "caption2" | "caption3" | "caption4";
    component?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "p" | "span";
    theme?: "black" | "grey" | "white" | "primary" | "secondary";
    weight?: "regular" | "medium";
    className?: string;
    children: React.ReactNode;
}

export const Typography = ({
    variant = "h3",
    component: Component = "div",
    theme = "black",
    weight = "regular",
    className,
    children
}:Props) => {
    
    let variantStyles: string = "", colorStyles: string;

    switch (variant) {
        case "h1":
            variantStyles = "text-8xl"
            break;
        case "h2":
            variantStyles = "text-7xl"
            break;
        case "h3":
            variantStyles = "text-6xl"
            break;
    }

    switch (theme) {
        case "white":
            colorStyles = "text-white";
            break;
        case "primary":
            colorStyles = "text-primary";
            break;
        case "secondary":
            colorStyles = "text-secondary";
            break;
        }


    return (
        <Component 
            className={clsx(
                variantStyles,
                weight === "medium" && "font-medium",
                className,
            )}>
            {children}
        </Component>
    )
}