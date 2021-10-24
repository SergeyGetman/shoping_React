import React from "react";
import {Menu} from 'semantic-ui-react'


 function MenuComponents () {
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
            ИТОГО : 0 грн
          </Menu.Item>

          <Menu.Item
            name='help'
          >
            Корзина: (<b>0</b>)
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  )
}

export default MenuComponents;