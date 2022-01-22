import React from 'react';
import Day from '../Day/Day';

const Month = ({month}) => {
    return (
        <div>
            <div>dias de la semana</div>
            <div>
                {
                    month.map(row => 
                        <>
                            {
                                row.map((day, index )=> (<Day key={index} day={day}/>))    
                            }
                        </>
                    )
                }
            </div>
        </div>
    )
};

export default Month;
