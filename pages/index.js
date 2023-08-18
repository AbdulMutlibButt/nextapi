import Mutlib from './users/mutlib'
import Greet from '@/components/greet/Greet'
import List from '@/components/list/List'
import { useState } from 'react'
import Button from '@/components/button/Button'

export default function Home() {
  const [arr,setArr]=useState(["helllo","hi"])
  const addItem =()=>{
    setArr([...arr,"new item"])
  }
  return (
    <div>
    <Greet text="WELCOMESS" />
    <Mutlib/>
    <List txt={arr}/>
    <Button add={addItem} />  
    </div>
  )
}
