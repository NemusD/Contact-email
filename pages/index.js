/* eslint-disable react/no-unknown-property */
/* eslint-disable react/react-in-jsx-scope */
import { 
    Button,
    Container, 
    FormControl, 
    FormErrorMessage, 
    FormLabel, 
    Heading, 
    // eslint-disable-next-line no-unused-vars
    Input,
    useToast, 
} from "@chakra-ui/react";

import { useState } from "react";
import { sendContactForm } from "../lib/api";
//import { sendContactForm } from "../lib/api"

const initValues = { name: "", email: "", subject: "", message: "", attachment: ""};

const initState = {values: initValues}
export default function Home() {
    const toast = useToast()
    // eslint-disable-next-line no-undef
    const [state, setState] = useState(initState);
    const [touched, setTouched] = useState({});

    const { values, isLoading, error } = state;

    const onBlur = ({target}) => setTouched((prev) => ({...prev,
        [target.name]: true
    }))

    const handleChange = ({target}) => setState((prev) => ({
        ...prev,
        values: {
            ...prev.values,
            [target.name] : target.value,
        },
    }));

    const onSubmit = async () => {
        setState((prev) => ({
            ...prev,
            isLoading:true
        }));
        try {
            await sendContactForm(values);
            setTouched({})
            setState(initState);
            toast({
                title: "Message sent.",
                status: "success",
                duration: 2000,
                position: "top"
            });
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error.message,
            }));
        }

       
    };


    return (
    <Container maxW="450px" mt={12}>
        <Heading>Contact</Heading>
        {
            error && (
                <Text color = "red.300" my={4} fontSize='xl'>
                    {error}
                </Text>
            )
        }
        <FormControl isRequired isInvalid = {touched.name && !values.name} mb={5}>
            <FormLabel>Name</FormLabel>
            <input 
                type='text'
                name='name'
                errorBorderColor = "red.300"
                value={values.name}
                onChange={handleChange}
                onBlur={onBlur}></input>
            <FormErrorMessage>Required</FormErrorMessage>
            
        </FormControl>

        <FormControl isRequired isInvalid = {touched.email && !values.email} mb={5}>
            <FormLabel>Email</FormLabel>
            <input 
                type='email'
                name='email'
                errorBorderColor = "red.300"
                value={values.email}
                onChange={handleChange}
                onBlur={onBlur}></input>
                <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid = {touched.subject && !values.subject} mb={5}>
            <FormLabel>Subject</FormLabel>
            <input 
                type='text'
                name='subject'
                errorBorderColor = "red.300"
                value={values.subject}
                onChange={handleChange}
                onBlur={onBlur}></input>
                <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid = {touched.message && !values.message} mb={5}>
            <FormLabel>Message</FormLabel>
            <textarea 
                type='text'
                name='message'
                errorBorderColor = "red.300"
                rows={4}
                value={values.message}
                onChange={handleChange}
                onBlur={onBlur}/>
                <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid = {touched.attachment && !values.attachment} mb={5}>
            <FormLabel>Attachments</FormLabel>
            <input 
                type='file'
                name='attachment'
                errorBorderColor = "red.300"
                value={values.attachment}
                onChange={handleChange}
                onBlur={onBlur}></input>
                <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <Button
            variant="outline"
            colorScheme="blue"
            isLoading={isLoading}
            disabled={!values.name || !values.email || !values.subject || !values.message || !values.attachment}
            onClick={onSubmit}
        >Submit</Button>
    </Container>
    );
}

