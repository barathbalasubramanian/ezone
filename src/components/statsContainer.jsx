
import React from 'react'
import Styles from '../css/statContainer.module.css'

function StatsContainer() {
  return (
    <div className={Styles.container}>
        <div className={Styles.stat} >
            <div>
                <div className={Styles.name}>Status</div>
                <div className={Styles.value}>Active</div>
            </div>
            <div>
                <div className={Styles.name}>Capacity</div>
                <div className={Styles.value}>320 <span>kWh</span></div>
            </div>
            <div>
                <div className={Styles.name}>Total Yeild</div>
                <div className={Styles.value}>190 <span>kWh</span></div>
            </div>
        </div>
        <div className={Styles.stat} >
            <div>
                <div className={Styles.name}>Consumption</div>
                <div className={Styles.value}>250 <span>kWh</span></div>
            </div>
            <div>
                <div className={Styles.name}>Total charging</div>
                <div className={Styles.value}>190,00 <span>kWh</span></div>
            </div>
        </div>
        <div className={Styles.stat} >
            <div>
                <div className={Styles.name}>Real Time Power Usage</div>
                <div className={Styles.value}>150,00 <span>kWh</span></div>
            </div>    
        </div>
    </div>
  )
}

export default StatsContainer