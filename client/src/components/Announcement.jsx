import styled from 'styled-components'

import Marquee, { Motion } from "react-marquee-slider";
import times from "lodash/times";


    
const Container = styled.div`
height: 25px;
background-color: #1f1f1e;
color: white;
display: flex;
align-items: center;
font-size: 14px;
font-weight: 800;
overflow: hidden;
`

const MotionDiv = styled.div`
  width:1500px;      
`

const Announcement = () => {
    return (
        <Container>
          <Marquee velocity={72} minScale={51.7} resetAfterTries={200}>
            {times(1, Number).map((id) => (
              <Motion
                direction= "clockwise"
                velocity={0}
                radius={0}
               >
                <MotionDiv>
                   SUPER DEALS ON ALL PRODUCTS!
               </MotionDiv>
             </Motion>
    ))}
          </Marquee>
        </Container>
    )
}

export default Announcement
