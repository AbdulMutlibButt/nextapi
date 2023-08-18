import { Card } from 'antd';
const { Meta } = Card;
import {AiFillDislike, AiFillLike} from 'react-icons/ai';
const Item = ({ text }) => {
  return (
    <div>
      <Card
        hoverable
        style={{
          width: 144,
        }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
       <div style={{display:"flex",justifyContent:"space-between"}}>
        <div>
        <AiFillLike/>
        </div>
        <div>
          <AiFillDislike/>
        </div>
       </div>
      </Card>
      </div>
  )
}

export default Item