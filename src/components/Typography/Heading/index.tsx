import clsx from 'clsx';

interface HeadingProps {
    text: string;
}

export function Heading({text}: HeadingProps){
    return(
        <h4 className="flex text-xl font-bold text-font-white">
            {text}
        </h4>
    )
}