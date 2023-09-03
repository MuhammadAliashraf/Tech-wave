import React from 'react'
import styles from './Icons.module.css'
import Fade from 'react-reveal'

function Icons({data}) {
  console.log(data)
  return (
    <Fade bottom>
      <div className={styles.icontop}>
        {
          data.map((e,i)=>{
            return(
                <div className={styles.iconmain} >
                  <div className={styles.icons_image} >
                    <img src={e.image} />
                  </div>
                  <div className={styles.icon_content} >
                    <h5>{e.name}</h5>
                    <p>{e.des}</p>
                  </div>
                </div>
            )
          })
        }
      </div>
    </Fade>
  )
}

export default Icons
