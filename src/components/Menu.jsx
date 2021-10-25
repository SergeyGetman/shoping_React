import React from "react";
import {Menu, Popup, List, Button, Image, Card} from 'semantic-ui-react'


const CartComponent = ({title, id, image, removeFromCart}) => (
  <List selection divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <Button onClick={removeFromCart.bind(this, id)} color="red">Remove</Button>
      </List.Content>
      <Image avatar src={image} />
      <List.Content>{title}</List.Content>
    </List.Item>
  </List>
)

 function MenuComponents ({totalPrice, count, items}) {
  return (
    <div>
      <Menu>
        <Menu.Item
          name='browse'
        >
        Магазин
        </Menu.Item>

        <Menu.Item
          name='submit'
        >
          ПРО НАС
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item
            name='signup'
          >
            ИТОГО : {totalPrice} грн
          </Menu.Item>


          <Popup
            trigger={
              <Menu.Item name="help">
                Корзина (<b>{count}</b>)
              </Menu.Item>
            }
            content={items.map(book => <CartComponent {...book}/>)}
            on="click"
            hideOnScroll
          />

        </Menu.Menu>
      </Menu>
    </div>
  )
}

export default MenuComponents;