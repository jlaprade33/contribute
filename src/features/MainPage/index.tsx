import { useState } from 'react';
import { Text, DollarDisplay, Container } from '../../components';
import leatherByJeff from '../../icons/leatherByJeff.svg';
import charity from '../../icons/charity.svg';
import { CharitySelect } from '../CharitySelect';

export function MainPage(){
    const [showCharity, setShowCharity] = useState<boolean>(false);

    return(
        <div className="w-full py-10 min-h-[100vh] bg-background-dark ">
            <div className="px-10 max-w-[1000px]">
                <img className="w-[160px] flex mb-[90px]" src={leatherByJeff} alt='logo' />
                <Container flex width={'4/5'}>
                    <Container>
                        <Text text="Main Account" />
                        <DollarDisplay value={"987.65"}/>
                    </Container>
                    <div onClick={()=>setShowCharity(!showCharity)}>
                        <Container hover padding={'p-2 rounded-sm'}>
                            <img className="w-[30px] mt-6 mb-1 mx-auto" src={charity} alt='charity' />
                            <Text size="sm" text={"Contribute"} />
                        </Container>
                    </div>
                </Container>
                {showCharity ? <CharitySelect /> : null}
            </div>
        </div>
    )
}