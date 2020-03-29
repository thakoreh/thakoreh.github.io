import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody
} from 'reactstrap';

const CardSection = (props) => {
  return (
    <CardColumns style={{display:"flex",width:'40%',height:'10%',padding:'30px',gap:'20px',textAlign:"justify",justifyContent:'space-around'}}>
      <Card style={{marginRight:'10px'}} >
        <CardImg top width="50%" height="35%" src="https://media.licdn.com/media-proxy/ext?w=512&h=288&f=n&hash=uGjbNksAUB5re1B3kBRozJ1qeuw%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6plxVUzgUv5K_PrkC9q0RIUJDPBy-gXi2s_NOfYXLhf8HZZLSiol4Tfi4GlgU3eOyhQzDkEY69LcLmY4Yx3A" alt="Card image cap" />
        <CardBody>
          <CardTitle>
            Front End Skills
          </CardTitle>
          <CardSubtitle>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</CardSubtitle>
          <CardText></CardText>
          <Button>See here</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="50%" height="35%" src="https://lh3.googleusercontent.com/proxy/L9rvfmz3dXl07rPB-MbOlBVG1t7b7FVaMC10NhlfdFzJHl2sQL140n-ayQH-fMoGG_tWtI1nU49dNqgLtVjGKNjhSjaeFr2ww9RwQzpw7VK7oxNBk039ptnJgXfdg89S8kdbEQ" alt="Card image cap" />
        <CardBody>
          <CardTitle>
            Back End Skills
          </CardTitle>
          <CardSubtitle>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</CardSubtitle>
          <CardText></CardText>
          <Button>See here</Button>
        </CardBody>
      </Card>
      
    </CardColumns>);}

export default CardSection;