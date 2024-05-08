import clsx from 'clsx';

interface ContainerProps {
    children: any;
    flex?: boolean;
    hover?: boolean;
    width?: string;
    padding?: string;
}

export function Container({
    children, 
    width = "fit", 
    flex = false, 
    hover = false,
    padding = '0'
}: ContainerProps){
    return(
        <div className={clsx(
            `w-${width} ${padding} flex-wrap`,
            flex ? "flex justify-between" : 'block',
            hover ? "hover:bg-background-gray transition transition-500 cursor-pointer" : null
        )}>
           {children}
        </div>
    )
}