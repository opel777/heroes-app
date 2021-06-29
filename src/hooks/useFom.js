import {useState} from 'React'

export const useForm =( initialState ={}) => {
    const [ values,setValues] = useState(initialState);
    const reset = () =>{
        setValues(initialState);
    }

    const handleIputChange = ({target})=>{

        setValues({
            ...values,
            [target.name]:target.value
        });
    }
    return [values, handleIputChange, reset];
}