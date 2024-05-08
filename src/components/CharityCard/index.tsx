import clsx from 'clsx';
import { useState } from 'react';
import { Text } from '../Typography';

interface PhotoProps {
    item: CardItem;
    contribution: number;
    setError: React.Dispatch<React.SetStateAction<boolean>>;
}

interface CardItem {
    type: string;
    title: string;
    photo: string;
    address: string;
}

export function PhotoCard({item, contribution, setError}: PhotoProps){
    const [hovered, setHovered] = useState<boolean>(false);

    const handleClick = () => {
        if(contribution < 1){
            setError(true)
        } else {
            setError(false)
            // @ts-ignore
            if(window.LeatherProvider){
                transferFunds();
            // @ts-ignore
            } else if(!window.LeatherProvider){
                alert('LeatherProvider was not found. Please install the Leather wallet extension to your browser.')
            }
        }
    }

    const transferFunds = async() => {
        try{
            if(item?.address){
                // @ts-ignore
                const response = await window.LeatherProvider.request("sendTransfer", {
                    recipients: [
                    {
                        address: item?.address,
                        amount: contribution,
                    },
                    ],
                    network: "testnet",
                    account: 0,
                });
            console.log('response', response)
            }
        }catch(err){
            console.log('Transfer error:', err)
        }
    }

    return(
        <div 
            onClick={()=>handleClick()}                
            onMouseEnter={()=>setHovered(!hovered)}
            onMouseLeave={()=>setHovered(!hovered)}
            className="relative w-[45%] mx-auto min-w-[200px] hover:opacity-70 cursor-pointer transition-hover duration-500"
        >
            <img className="w-full my-3 object-cover rounded-md h-[140px]" src={item.photo} alt='charity' />
            {hovered ? (
                <div             
                    className="w-full absolute flex top-[40%] justify-center text-font-white"
                >
                    <div className="w-fit p-2 rounded-md bg-background-dark">
                    <Text bold size="md" text={item.title} align="center" width="fit" margin="auto" />
                    </div>
                </div> 
            ) : null}
        </div>
    )
}