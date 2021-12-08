import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { logout } from "../redux/apiCalls"

const Container = styled.div`
height: 60px;
${mobile({ height: "50px"})}
`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: center;
${mobile({ padding: "10px 0px "})}
`;

const Left = styled.div`
flex:1;
display: flex;
align-items: center;
`

const SearchContainer = styled.div`
border: 1px solid lightgrey;
display: flex;
justify-content: space-space-around;
align-items: center;
margin-left: 25px;
padding: 5px;
`

const Input = styled.input`
border:none;
${mobile({ width: "50px"})}
`

const Center = styled.div`
flex:1;
text-align: center;
justify-content: center;
`

const Logo = styled.h1`
font-size: 40px;
font-weight: 800;
${mobile({ fontSize: "24px", paddingLeft: "25px"})}
`

const Right = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({ flex: "2", justifyContent: "center"})}
`

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${mobile({ fontSize: "12px", marginLeft: "10px"})}
`

const Navbar = () => {
    // const user = false
    const user = useSelector((state) => state.user.currentUser)
    const quantity = useSelector(state => state.cart.quantity)
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        logout( dispatch, { user });
      };
     
    return (
        <Container>
          <Wrapper>
              
              <Left>
                  {/* FUTURE DEVELOPMENT */}
                <SearchContainer>
                 <Input placeholder="Search"/>
                    <Search style={{color: "grey", fontSize:16}}/>
                </SearchContainer>
              </Left> 

              <Center>
                  <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                  <Logo>MERN Store</Logo>
                  </Link>
              </Center>
                
            <Right>
                  {/* IF USER THEN RENDER LOG OUT LINK */}
              <Link to="/login" onClick={handleClick} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {user ? <MenuItem>LOG OUT</MenuItem> : ""}
              </Link>

                  {/* IF USER THEN DONT RENDER REGISTER LINK */}
              <Link to="/register" style={{ color: 'inherit', textDecoration: 'none' }}>
                  {user ? "" : <MenuItem>REGISTER</MenuItem>}
              </Link>

                  {/* IF USER THEN DONT RENDER SIGN IN LINK */}
              <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>
                  {user ? "" : <MenuItem>SIGN IN</MenuItem>}
              </Link>
              
              <Link to="/cart">
                <MenuItem>
                    <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartOutlined/>
                    </Badge>
                </MenuItem>
              </Link>
            </Right>
            
          </Wrapper>
        </Container>
        
    )
}

export default Navbar
