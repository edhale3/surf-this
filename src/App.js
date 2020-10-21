import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const[response, getResponse] = useState('')

  // useEffect(()=> {
  //   async function getData(){
  //     console.log("here")
  //     let data = await fetch('http://api.worldweatheronline.com/premium/v1/marine.ashx?key=b4b46448891a430199415852202010&format=json&q=35.1288636,-90.25097',{
  //       method:'GET',
  //       mode:'cors',
  //       cache:'no-cache',
  //       headers: {
  //         'Content-Type':'application/json'
  //       }
  //     })
  //     let response = await data.json()
  //     console.log(response)
  //     return getResponse(response)
  //   }
  //   getResponse(getData())
  // },[])


  useEffect(()=> {
    async function getData(){
      console.log("here")
      let data = await fetch('http://api.surfline.com/v1/forecasts/5540?resources=surf,wind,tide,weather&days=1',{
        method:'GET',
        mode:'cors',
        cache:'no-cache'
      })
      console.log(data)
      let response = await data.json()
      console.log(response)
      return getResponse(response)
    }
    getResponse(getData())
  },[])

  

  return (
    <div>
      {response.data ? console.log(response) : null}
    </div>
  )
}

export default App;
