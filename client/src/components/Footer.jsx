import { Facebook, Pinterest, Instagram, Twitter, Room, Phone, MailOutline } from "@material-ui/icons"
import styled from "styled-components"
import {mobile} from "../responsive"

const Container = styled.div`
display: flex;
${mobile({ flexDirection: "column"})}
`
    
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`

const Logo= styled.h1`

`
const Desc = styled.p`
margin: 20px 0px;
`
const SocialContainer = styled.div`
display: flex;
`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`

const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({ backgroundColor: "aliceblue"})}
`

const Title = styled.h3`
margin-bottom: 30px;
${mobile({ marginBottom: "15px"})}
`

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;

`
    
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`

const Right = styled.div`
flex: 1;
padding: 20px;
`
const ContactItem = styled.div`
margin-bottom: 15px;
display: flex;
align-items: center;
`
const Payment = styled.img`
width: 50%;
`


const Footer = () => {
    return (
  <Container>
<Left>
    <Logo>MERN</Logo>
    <Desc>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti doloremque architecto laborum obcaecati quod provident. Saepe, ullam! Incidunt suscipit accusantium numquam. Fuga ipsa vitae dolorem adipisci accusamus unde blanditiis aliquam?
    </Desc>
    <SocialContainer>
        <SocialIcon color="3B5999">
            <Facebook/>
        </SocialIcon>
        <SocialIcon color="E4405F">
            <Twitter/>
        </SocialIcon>
        <SocialIcon color="55ACEE">
            <Instagram/>
        </SocialIcon>
        <SocialIcon color="E60023">
            <Pinterest/>
        </SocialIcon>
    </SocialContainer>
</Left>
<Center>
    <Title>Links</Title>
    <List>
        <ListItem>Home</ListItem>
        <ListItem>Cart</ListItem>
        <ListItem>Mens Fashion</ListItem>
        <ListItem>Womans Fashion</ListItem>
        <ListItem>Accessories</ListItem>
        <ListItem>My Account</ListItem>
        <ListItem>Order Tracking</ListItem>
        <ListItem>Wishlist</ListItem>
        <ListItem>Terms</ListItem>
    </List>
</Center>
<Right>
    <Title>Contact</Title>
    <ContactItem><Room style={{marginRight:"10px"}}/>422 Bliss Way, Denver, CO</ContactItem>
    <ContactItem><Phone style={{marginRight:"10px"}}/>+1 345 533 35</ContactItem>
    <ContactItem><MailOutline style={{marginRight:"10px"}}/>owner@MERN.com</ContactItem>
    <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
</Right>
  </Container>
    )
}

export default Footer
