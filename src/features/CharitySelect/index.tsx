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
    return(
        <div className="border-[1px] w-4/5 rounded-md mt-10 p-4 border-font-white">
            <Heading text="Charity Select" />
            <Text size="sm" text="Select a charity to contribute to a donation to" />
            <Container flex padding={'py-2'}>
                {
                    charityCards.map((card, index) => {
                        return(
                            <PhotoCard key={index} item={card} />
                        )
                    })
                }
            </Container>
        </div>
    )
}