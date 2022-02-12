import React from 'react'
import request from '../utils/request'

class Content extends React.Component{
  constructor(props){
    super(props)
    this.state={
       value:'',
       redirect:false,
       message:''
    }
  }
  getInputValue = (e)=>{
    console.log('e', e.target.value)
    this.setState({
      value: e.target.value
    })
  }

  handleClick = async()=>{
    let param={
      username: this.state.value
    }
    let result =await request.post('/message',{...param})
    console.log('result', result)
    if(result.data.success){
      this.setState({
        redirect:true,
        message: result.data.results
      })
    }
  }
  render(){
    const {redirect,message} = this.state
    if(!redirect){
      return(
        <>
          <input 
            placeholder='Please enter your name' 
            className='input'
            onChange={this.getInputValue}
          />
          <button className='button' onClick={this.handleClick}>Submit</button>
        </>
      )
    }else{
      return <p style={{color:'white'}}>{message}</p>
    }
  }
}

export default Content