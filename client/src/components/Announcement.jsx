import styled from 'styled-components'

import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import times from "lodash/times";


    
const Container = styled.div`
height: 30px;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content: flex-end;
font-size: 14px;
font-weight: 500;
overflow: hidden;
`

const Announcement = () => {
    return (
        <Container>
          <Marquee velocity={22} minScale={11.7} resetAfterTries={200}>
    {times(1, Number).map((id) => (
      <Motion
        direction= "clockwise"
        velocity={110}
        radius={0}
      >
        <div
          style={{
            width: "150px",
            height: "150px",
        alignItems: "center",
            textAlign: "center",
            lineHeight: "50px",

          }}
        >
          SUPER DEALS ON ALL PRODUCTS!
        </div>
      </Motion>
    ))}
  </Marquee>
        </Container>
    )
}

export default Announcement
