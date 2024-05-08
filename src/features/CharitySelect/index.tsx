import { useState } from 'react';
import { Heading, Text, Container } from '../../components';
import { PhotoCard } from '../../components/CharityCard';

const charityCards = [
    {
        type: 'education',
        title: 'Education',
        photo: '/education.jpg',
        address: 'tb1qkzvk9hr7uvas23hspvsgqfvyc8h4nngeqjqtnj'
    },
    {
        type: 'esg',
        title: 'ESG',
        photo: '/ESG.jpg',
        address: 'tb1qkzvk9hr7uvas23hspvsgqfvyc8h4nngeqjqtnj'
    },
    {
        type: 'medical research',
        title: 'Medical Research',
        photo: '/medical-research.jpg',
        address: 'tb1qkzvk9hr7uvas23hspvsgqfvyc8h4nngeqjqtnj'
    },
    {
        type: 'nutrition',
        title: 'Nutrition',
        photo: '/nutrition.jpg',
        address: 'tb1qkzvk9hr7uvas23hspvsgqfvyc8h4nngeqjqtnj'
    }
]

export function CharitySelect(){
    const [contribution, setContribution] = useState<number>(0);
    const [error, setError] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = parseInt(e.target.value)
        if(input > 0) setError(false)
        setContribution(input)
    }

    return(
        <div className="border-[1px] w-4/5 rounded-md mt-10 p-4 border-font-white">
            <Container>
                <div>
                    <Heading text="Charity Select" />
                    <Text size="sm" text="Select a charity to contribute to a donation to" />
                </div>
                <div>
                    <form>
                        <label className="text-font-white" htmlFor="moneyInput">Contribution Amount:</label>
                        <input
                            className="text-font-white w-[90px] ml-2 pl-2 bg-background-dark border-[1px] border-font-white rounded-md"
                            type="number"
                            id="moneyInput"
                            name="moneyInput"
                            value={contribution}
                            onChange={handleChange}
                            step="1" // Optional: Specify the step for increment/decrement
                            min="0" // Optional: Set minimum value
                            // max="1000" // Optional: Set maximum value
                        />
                    </form>
                    {error ? 
                        <div className="mt-2 ">
                            <Text size="sm" color="red" text="You must select a contribution amount before selecting a charity" />
                        </div>
                     : null}
                </div>
            </Container>
            <Container flex padding={'py-2'}>
                {
                    charityCards.map((card, index) => {
                        return(
                            <PhotoCard setError={setError} key={index} item={card} contribution={contribution} />
                        )
                    })
                }
            </Container>
        </div>
    )
}