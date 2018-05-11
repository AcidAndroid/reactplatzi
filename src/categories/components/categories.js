import React from 'react'
import Category from './category'

export default Categories = 'Categories';

function Categories (props) {
    return (
        <div>
            {this.props.categories.map((item)=>{
                <Category key={item.id} {...item} />
            })}
        </div>
    )
        
        
    
}