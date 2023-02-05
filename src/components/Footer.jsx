import { Facebook, Instagram, Twitter, Room, Phone, EmailOutlined } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
    display: flex;

`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`

`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

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
    cursor: pointer;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 100%;
`;


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>AK.</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem maiores qui, neque, corporis esse facere quis sunt corrupti, voluptas exercitationem iste optio architecto totam ad dicta facilis culpa sequi labore?</Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Children</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}} />
                Gaya, Bihar, 824217
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}} /> +91-8102910716
            </ContactItem>
            <ContactItem>
                <EmailOutlined style={{marginRight:"10px"}} /> contact@ankit.in
            </ContactItem>
            <Payment src="https://d33v4339jhl8k0.cloudfront.net/docs/assets/55d20ae1e4b089486cadc329/images/56b226dac69791436156504d/file-tHlBk2a147.png" />
        </Right>
    </Container>
  )
}

export default Footer
