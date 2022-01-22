import React from 'react';
import Day from '../Day/Day';
import st from './Month.module.css';

const Month = ({month}) => {
    return (
        <div className={st.container}>
            <div className={st.days}>
                <ul>
                    <li>Sun</li>
                    <li>Mon</li>
                    <li>Tue</li>
                    <li>Wed</li>
                    <li>Thu</li>
                    <li>Fri</li>
                    <li>Sat</li>
                </ul>
            </div>
            <div className={st.container_month}>
                {
                    month.map(( row, index ) => 
                        <React.Fragment key={index}>
                            {
                                row.map((day, idexRow) => (<Day day={day} rowId={index} key={idexRow}/>))
                            }
                        </React.Fragment>
                    )
                }
            </div>
        </div>
    )
};

export default Month;
