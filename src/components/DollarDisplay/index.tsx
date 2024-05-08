
interface DollarProps {
    value: string;
}

export function DollarDisplay({value}: DollarProps){
    return(
        <div className="font-bold text-[32px] text-font-white">
            ${value}
        </div>
    )
}