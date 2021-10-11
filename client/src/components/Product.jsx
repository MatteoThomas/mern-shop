import { ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from "@material-ui/icons"
import styled from "styled-components"
import { Link } from "react-router-dom"


const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #f3d6d6a6;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .5s ease;
    cursor: pointer;
`

const Container = styled.div`
    flex:1;
    margin:5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`

const Image = styled.img`
    height: 85%;
    z-index: 2;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 10px;

    &:hover{
        background-color: aliceblue;
        transform: scale(1.1);
    }
`



const Product = ({item}) => {
    return (
     <Container>

    <Circle/>
    <Image src={item.img}/>
    <Info>
        <Icon>
            <ShoppingCartOutlined/>
        </Icon>
        <Icon>
            <Link to={`/product/${item._id}`}>
            <SearchOutlined/>
            </Link>
        </Icon>
        <Icon>
            <FavoriteBorderOutlined/>
        </Icon>
    </Info>

     </Container>
    )
}

export default Product