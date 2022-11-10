import React from 'react'
import Culture from '../culture/Culture'
import Entertainment from '../entertainment/Entertainment'
import Homepages from '../home/Homepages'
import Politics from '../politics/Politics'
import Sports from '../sports/Sports'
import AddNews from './AddNews'

const Admin = () => {
  return (
    <>
        <AddNews />
        <Homepages />
        <Culture />
        <Entertainment />
        <Politics />
        <Sports />
    </>
  )
}

export default Admin