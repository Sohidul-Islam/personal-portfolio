import { Alert, Box, Snackbar, TextField } from '@mui/material';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import Responsive from '../../Utilities/Responsive';
import EmailJSConfig from '../../Config/email.config';
// import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const [size, device, device2] = Responsive;
    const [open, setOpen] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const emailConfig = EmailJSConfig;
    const [email, setEmail] = useState({});
    const form = useRef();
    const FormContainer = styled(Box)`
    width: 100%;
    border-radius: 16px;
    background: linear-gradient(145deg, #e2e8ec, #ffffff);
    box-shadow: 5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff;
    padding: 30px;
    height: 100%;
    `;
    const FormContent = styled(Box)`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    margin: auto 0;
    `;
    const FormContentInner = styled(Box)`
    margin: 2%;
    width: 96%;
    `;
    const FormContentInnerHalf = styled(Box)`
    widht: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    `;
    const InputFieldColOne = styled(TextField)`
        width: 100%;
    `;
    const InputFieldColTwo = styled(TextField)`
        width: 46%;
        @media ${device2.mobileL}{
        width: 100%;
        margin: 8px 0px !important;
        }
    `;
    const Button = styled.button`
    width: 100%;
    padding: 16px 40px;
    background: linear-gradient(145deg, #e2e8ec, #ffffff);
    box-shadow: 5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff;
    border: none;
    font-size: 18px;
    font-weight: 400;
    transition: all 0.4s ease-in-out;
    border-radius: 6px;
    &:hover{
        background-image: linear-gradient(145deg, #6a67ce,#fc636b) !important;
        transform: translateY(-3px);
        color: #fff;
        font-weight: 600;
    }
    `;

    const emailSender = () => {
        emailjs.sendForm(emailConfig.service_id, emailConfig.template_id, form.current, emailConfig.public_key)
            .then((result) => {
                setSuccess(true);
                setOpen(true);
                console.log("Successfull: ", result.text);
            }, (error) => {
                setSuccess(false);
                setOpen(true);
                console.log("error: ", error.text);
            });
    }

    const sendEmail = (e) => {
        e.preventDefault();

        console.log("email: ", email?.name.length);

        if (email?.name?.length > 0 && email?.phone?.length > 0 && email?.email?.length > 0 && email?.subject?.length > 0 && email?.message?.length > 0) {

            if (/([+]?\d{1,2}[.-\s]?)?(\d{3}[.-]?){2}\d{4}/g.test(email?.phone)) {
                // console.log("phone Passed");
                setErrorMessage("");
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email?.email)) {
                    // console.log("phone if email Passed");
                    setErrorMessage("");
                    emailSender();
                }
                else {
                    // console.log("email Failed");
                    setErrorMessage("invalid email ex: sample@abc.xyz");
                }
            }
            else {
                // console.log("phone Failed");
                setErrorMessage("invalid phone number ex: 01854107699");
            }
        }
        else {
            setErrorMessage("Fill the form properly")
            console.log("error");
        }

    };

    const onBlurHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        let oldValue = email;
        oldValue[name] = value;
        setEmail(oldValue);

        console.log("env: ", process.env);
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const AlertMessage = () => {
        return <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            {
                success ?
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Successfully Sent!
                    </Alert>
                    :
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        Something went wrong (not Sent) !
                    </Alert>
            }
        </Snackbar>
    }



    return (
        < >

            <AlertMessage />
            <FormContainer
                component="form"
                onSubmit={sendEmail}
                ref={form}
                noValidate
                autoComplete="on"
            >

                <FormContent>

                    <FormContentInner>
                        {errorMessage.length > 0 && < Alert sx={{ my: 2 }} variant="outlined" severity="error">{errorMessage}</Alert>}
                        <FormContentInnerHalf>
                            <InputFieldColTwo onBlur={onBlurHandler} required name="name" type={"text"} id="input-name" label="Your Name" variant="outlined" />
                            <InputFieldColTwo onBlur={onBlurHandler} required name="phone" type={"tel"} id="input-number" label="Phone Number" variant="outlined" />
                        </FormContentInnerHalf>
                    </FormContentInner>
                    <FormContentInner>
                        <InputFieldColOne onBlur={onBlurHandler} required name="email" type={"email"} id="input-email" label="Your email" variant="outlined" />
                    </FormContentInner>
                    <FormContentInner>
                        <InputFieldColOne onBlur={onBlurHandler} required name="subject" type={"text"} id="input-subject" label="Subject" variant="outlined" />
                    </FormContentInner>
                    <FormContentInner>
                        <InputFieldColOne onBlur={onBlurHandler} required name="message" type={"text"} id="outlined-basic" label="Message" variant="outlined" multiline
                            minRows={16} />
                    </FormContentInner>
                    <FormContentInner>
                        <Button type="submit" >SEND MESSAGE</Button>
                    </FormContentInner>
                </FormContent>
            </FormContainer>
        </>

    )
}

export default ContactForm;