import clsx from 'clsx';

interface TextProps {
    text: string;
    size?: 'sm' | 'md' | 'lg';
}

export function Text({text, size = 'md'}: TextProps){
    return(
        <p className={clsx(
            "flex text-lg text-font-white",
            size === 'sm' ? 'text-[16px]' : size === 'lg' ? 'text-[32px]' : 'text-[24px]'
        )}>
            {text}
        </p>
    )
}