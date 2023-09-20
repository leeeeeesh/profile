import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { projectType,projectTypeArray } from '../../model/model';
import styles from './mobileprojectcontents.module.css';


// Props Type 
// props type은 넘길수없어서 이렇게 따로 다시 적어줘야함

interface PropsType{
  info:projectType;   
}


export default function MobileProjectContents({info}:PropsType) {
  const btnActive = [
    {index:0,text:"PC"},
    {index:1,text:"MO"}
  ]

  const [btnClick, setBtnClick] = useState<number>(0);

  return (
    <>
      <li key={info.id}>
        <div id={styles.project_btn_wrap}>
          {
            btnActive.map((item) => (
              <button className={`${btnClick === item.index && styles.selected} ${!info.moImg && styles.delete}`} key={item.index} onClick={() => { 
                  setBtnClick(item.index)
               }}>
                {item.text}
              </button>
            ))
          }

          <Link to={info.path}>VIEW PAGE</Link>
        </div>

        <div id={styles.project_img_wrap}>
          {
            btnClick === 0 ? <img src={info.pcImg} alt="" />:<img src={info.moImg} alt="" />
          }
        </div>

        <div id={styles.project_text_wrap}>
          <p>{info.text}</p>
        </div>
      </li>
    </>
  )
}
