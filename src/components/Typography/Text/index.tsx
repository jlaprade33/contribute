import clsx from 'clsx';

interface TextProps {
    text: string;
    size?: 'sm' | 'md' | 'lg';
    align?: 'right' | 'left' | 'center';
    margin?: string;
    width?: string;
    bold?: boolean;
}

export function Text({text, bold = false, align = 'left', width = 'fit', margin = '0', size = 'md'}: TextProps){
    return(
        <p className={clsx(
            `flex text-lg text-font-white text-${align} m-${margin} w-${width} text-${bold}`,
            size === 'sm' ? 'text-[14px]' : size === 'lg' ? 'text-[32px]' : 'text-[24px]'
        )}>
            {text}
        </p>
    )
}