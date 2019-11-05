import React from 'react';
import styled from 'styled-components';
import Textbox from '../textbox';

const Text = styled.p`
text-align: center;
font-family: Itim;
font-size: 25px;
line-height: 36px;
color: #000000;
`

class About extends React.Component {
    render() {
      return (
        <div className="row">
             <img className="about" src="/background/bg4.png" />
            
            <div className="col-lg-6">
               
                <Text>
                <Textbox data="1.ปลิ้นก้น โดยใช้นิ้วแม่มือซ้ายกดเหนือทวารด้านบนแล้ว ใช้นิ้วหัวแม่มือขวากดปลิ้นทวาร ถ้าเป็นลูกห่านตัวผู้จะเห็นเดือยเล็ก ๆ คล้ายเข็มหมุดโผล่ออกมา ส่วนตัวเมียเมื่อปลิ้นก้นดูไม่มีเดือยเล็ก ๆ โผล่ออกมา 2.ดูปีก ถ้าเป็นลูกห่านตัวผู้ปมจะใหญ่ มีสีดำ ลักษณะยาวรี ไม่มีขนปกคลุม มีขนาดเท่าปลายดินสอ มองเห็นได้ชัดเจน แต่ถ้าเป็นลูกห่านตัวเมียจะไม่มีปมดังกล่าว หรือถ้ามีขนาดจะเล็กมาก และมีขนปกคลุมจนมองไม่เห็น 3.ดูสีขน วิธีนี้ใช้ดูได้ในห่านพันธุ์พิลกริม และพันธุ์เอ็มเด็นเท่านั้น คือ ลูกห่านพันธุ์พิลกริมตัวผู้จะมีสีครามอ่อน ๆ เกือบขาวแต่ลูกห่านตัวเมียจะมีสีเทา ส่วนลูกห่านพันธุ์เอ็มเด็นตัวผู้จะมีสีขาวมากปนกับสีเทาอ่อนเพียงเล็กน้อย ส่วนตัวเมียจะมีสีเทามากปนสีขาวเพียงเล็กน้อย " />
                </Text>
            </div>
            <div className="row">
                <img className="gender" src="/images/dbg.png" />
            </div>
        </div>
        
    )
    }
  }
  
  export default About