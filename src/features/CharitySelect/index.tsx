import { Heading, Text } from '../../components';

export function CharitySelect(){
    return(
        <div className="border-[1px] w-4/5 rounded-md mt-10 p-4 border-font-white">
            <Heading text="Charity Select" />
            <Text size="sm" text="Select a charity to contribute to a donation to" />
        </div>
    )
}