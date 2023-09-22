import React, { useCallback, useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './mobileproject.module.css';
import { projectType ,projectTypeArray } from '../../model/model';
import MobileProjectContents from '../mobileprojectcontents/MobileProjectContents';

export default function MobileProject() {
  const btnActive = [
    {index:0,text:"PC"},
    {index:1,text:"MO"}
  ]

  const [allProject, setAllProject] = useState<projectTypeArray>([]);
  const [btnClick, setBtnClick] = useState<number>(0);
  // console.log(allProject)

  useEffect(()=>{
    axios.get('./data/project.json').then((res)=>{
      setAllProject(res.data)
    })
  },[])


  return (
    <div id={styles.project_wrap}>
      <section id={styles.project}>
        <h2 className='title_name'>Project</h2>

        <ul id={styles.project_cont_wrap}>
          
          {
            allProject.map((item)=>(
              <MobileProjectContents info={item} key={item.id}/>
            ))
          }

        </ul>
      </section>
    </div>
  )
}
