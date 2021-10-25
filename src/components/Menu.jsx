import React from "react";
import {Menu} from 'semantic-ui-react'


 function MenuComponents ({totalPrice, count}) {
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

          <Menu.Item
            name='help'
          >
            Корзина: (<b>{count}</b>)
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  )
}

export default MenuComponents;