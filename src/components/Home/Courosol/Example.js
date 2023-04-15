import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Courosol from './Courosol';
import Item from './Item';
function Example(props)
{
    return (
        <Carousel>
            {
                Courosol.map( (item, id) => <Item key={id} item={item} /> )
            }
        </Carousel>
    )
}

export default Example