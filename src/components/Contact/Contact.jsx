import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container, Header, SubContainer, Button } from "../../GlobalStyle";
import { Form, FormControl, Footer, SbContainer, FormMessage, Connect, ContactMe, ContactIMG } from "../Style/Contact";
import { image } from '../constants';
import { AppWrap } from '../../HOC';

const initMessage = {
    name: '',
    email: '',
    subject: '',
    message: ''
}

const Contact = () => {

    const [sendData, setSendData] = useState(initMessage);


    const handleSubmit = (e) => {
        e.preventDefault();

        const errMessage = document.querySelector('.error');
        const errMessage1 = document.querySelector('.error01');
        const errMessage2 = document.querySelector('.error02');

        if (sendData.name === '' || (sendData.email === '' || sendData.email === /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) || sendData.subject === '') {

            if (sendData.name === '') {
                errMessage.style.display = 'block'
            } else {
                errMessage.style.display = 'none';
            }

            if (sendData.email === '' || !sendData.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {

                errMessage1.innerHTML = 'Please enter the valid email'
                errMessage1.style.display = 'block'

            } else {

                errMessage1.style.display = 'none';
            }
            if (sendData.subject === '') {
                errMessage2.style.display = 'block'
            } else {
                errMessage2.style.display = 'none';
            }
        } else {
            errMessage.style.display = 'none';
            errMessage1.style.display = 'none';
            errMessage2.style.display = 'none';
            alert('thank you')
        }
        console.log(sendData)
        setSendData(initMessage);
    };

    return (
        <Container>
            <Header fs='18' mx='1' text={props => props.theme.bg}>Get In Touch</Header>

            <Header text={props => props.theme.bg} mx='2' my='1'>CONTACT</Header>

            <SbContainer className="contact" flex='flex' justify='space-between' px='2'>

                <Connect flex='flex' fd='column' style={{ marginRight: '2rem' }}>

                    <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.7 }}>
                        <ContactMe href="tel:09123456">
                            <ContactIMG>
                                <img src={image.email01} alt="" />
                            </ContactIMG>

                            <p style={{ marginLeft: '10px' }}>abcdef@gmail.com</p>
                        </ContactMe>
                    </motion.div>

                    <motion.div whileInView={{ y: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.7, delay: 0.5 }}>
                        <ContactMe href="tel:09123456" my='3'>
                            <ContactIMG>
                                <img src={image.mobile} alt="" />
                            </ContactIMG>

                            <p style={{ marginLeft: '10px' }}>0911223344</p>
                        </ContactMe>
                    </motion.div>

                </Connect>

                <Form p='1' onSubmit={handleSubmit}>

                    <motion.div initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 1000,
                            damping: 60
                        }}>
                        <FormControl className="form-control">
                            <input type="text" name="name" id="" placeholder="Name"
                                value={sendData.name}
                                onChange={(e) => setSendData({ ...sendData, name: e.target.value })}
                            />
                        </FormControl>
                        <p className="error" style={{ color: 'red', display: 'none' }}>**this field is required**</p>
                    </motion.div>

                    <motion.div initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{
                            delay: 0.1,
                            type: "spring",
                            stiffness: 600,
                            damping: 60,
                        }}>
                        <FormControl className="form-control">
                            <input type="text" name="email" id="" placeholder="Email"
                                value={sendData.email} onChange={(e) => setSendData({ ...sendData, email: e.target.value })} />
                        </FormControl>
                        <p className="error01" style={{ color: 'red', display: 'none' }}>**this field is required**</p>
                    </motion.div>

                    <motion.div initial={{ x: 40 }}
                        whileInView={{ x: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.2,
                        }}>
                        <FormControl>
                            <input
                                type="text" name="subject"
                                id="" placeholder="Subject"
                                value={sendData.subject} onChange={(e) => setSendData({ ...sendData, subject: e.target.value })}
                            />
                        </FormControl>
                        <p className="error02" style={{ color: 'red', display: 'none' }}>**this field is required**</p>
                    </motion.div>

                    <motion.div initial={{ y: -60, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.3,
                        }}>
                        <FormMessage placeholder="Message" value={sendData.message} onChange={(e) => setSendData({ ...sendData, message: e.target.value })}>
                        </FormMessage>
                    </motion.div>


                    <Button bg='#3d71ff' py='10' px='15' type="submit">Send Message</Button>

                </Form>
            </SbContainer>

        </Container >
    )
}
export default AppWrap(Contact, 'contact');