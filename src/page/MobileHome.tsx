import React from 'react'
import MobileInfo from '../components/mobileinfo/MobileInfo'
import MobileAbout from '../components/mobileabout/MobileAbout'
import MobileContact from '../components/mobilecontact/MobileContact'
import MobileSkill from '../components/mobileskill/MobileSkill'
import MobileProject from '../components/mobileproject/MobileProject'


export default function MobileHome() {
  return (
    <div>
      <MobileInfo/>
      <MobileAbout/>
      <MobileSkill/>
      <MobileProject/>
      <MobileContact/>
    </div>
  )
}
