import React from 'react';
import {Card, Image, Icon} from "semantic-ui-react";

const BookCart = ({title, author, price, image}) => (

      <Card>
        <Image src={image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>
            <span className='date'>{author}</span>
          </Card.Meta>

        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='usd' />
            {price}
          </a>
        </Card.Content>
      </Card>

);

export default BookCart;