import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../../categories/components/categories';

export default class Home extends Component {
    constructor(props){
        super(props) 
        console.log('Props de constructor home')  
        console.log(props)       
    }
  render() {
    
    console.log(props.data)
    return (
      <div>
        <HomeLayout>
            <Categories />
        </HomeLayout>
      </div>
    )
  }
}
