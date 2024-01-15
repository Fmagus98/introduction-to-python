import React from 'react'
import Item from '../Item/Item'

const ItemContainer = ({ item }) => {
        const itemList=item.map(p=><Item key={p.id} item={p}/>)
        return (
                <>
                {itemList}
                </>
        )
}
export default ItemContainer