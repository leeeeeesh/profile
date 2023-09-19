import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './mobileskill.module.css';
import './mobileskillslide.css';

import { skillType, skillTypeArray } from '../../model/model';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';



export default function MobileSkill() {
  
  const [allSkill, setAllSkill] = useState<skillTypeArray>([]) //skillTypeArray라는 배열 사용자타입을 만들어줬음

  useEffect(()=>{
    axios.get('./data/skill.json').then((res)=>{
      setAllSkill(res.data)
    })
  },[])

  const settings = {
    spaceBetween: 20,// px 단위 간격
    slidesPerView: 1.2,
  };

  return (
    <div id={styles.skill_wrap} className='skill_wrap'>
      <section id={styles.skill}>
        <h2 className='title_name'>Skill</h2>
        
        <div id={styles.skill_slide_wrap} className='skill_slide_wrap'>
          {/* {
            allSkill.map((item)=>(
              <p key={item.id}>{item.title}</p>
            ))
          } */}

          <Swiper {...settings}
          className="skillSwiper">
            {
              allSkill.map((item)=>(
                <SwiperSlide key={item.id}>
                  <div id={styles.skill_slide}>
                    <p>{item.title}</p>
                    <p>{item.text}</p>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </section>
    </div>
  )
}
