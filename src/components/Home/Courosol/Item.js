import {Paper} from '@mui/material'
import './Item.css'
function Item({item})
{
    return (
        <div  className='paper'>
        <div>
        <h1>Welcome To <span>Fitness-Fiber
        </span></h1>
        <h2>Your only store for all your fitness needs</h2>
        </div><br></br>
        <Paper>
        <img src={item.img} style={{height:"400px",width:"800px",borderRadius:"30px"}}></img>
        </Paper>
        </div> 
     )
}
export default Item