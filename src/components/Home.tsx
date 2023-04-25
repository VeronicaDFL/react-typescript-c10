import {useState} from 'react';
interface homeProp {
    name: string,
    age?: number
}
export default function Home({name, age}: homeProp) {
    const [counter, setCounter]: any = useState<number>(1);
    return (
     <>
     home page {name} {counter}
     </>

    )
}
     