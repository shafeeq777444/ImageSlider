import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const images=[
  {id:0,value:"https://gaadiwaadi.com/wp-content/uploads/2022/03/Charge-Cars-1967-Ford-Mustang-EV-img1-740x463.jpg",name:"FORD-MASDANG"},
  {id:1,value:"https://images-porsche.imgix.net/-/jssmedia/58D341183DA34596956074F64BEA6AB4_B5E139A9C3884E5A963D44950D2EDB4A_2023-04-19_DSC08616_RGB?w=3520&auto=format",name:"PORCHE"},
  {id:2,value:"https://www.mercedes-benz.co.in/content/india/en/passengercars/models/saloon/mercedes-maybach-s-class/overview/_jcr_content/root/responsivegrid/media_slider/media_slider_item/image.component.damq6.3353605823987.jpg/mercedes-maybach-s-class-z223-teaser-exterior-3302x1858-10-2022.jpg",name:"MERZIDES-BENZ"},
  {id:3,value:"https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/automotive-life/bmwapp-wallpaper/bawp-64-media-high.jpg?imwidth=1440",name:"BMW"}
]
const [slider,setSlider]=useState(images[0])

function handle(index){
  console.log(index);
  setSlider(images[index])
}

  return (
    <>
    <div ><img className='main-img' src={slider.value}/></div>
      {/* {images.map((data,index)=><img key={data.id} src={data.value} onClick={()=>handle(index)} height={50} width={50}/>)} */}       {/* with image tag */}
      <br />
      <div className="buttons"> {images.map((data,ind)=><button onClick={()=>handle(ind)} key={data.id}>{data.name}</button>)}</div>    {/* with button tag */}
     
    </>
  )
}

export default App
