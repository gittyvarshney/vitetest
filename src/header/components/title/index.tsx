import React from 'react'
import { WrapperDiv } from './styles';
import { boxArray } from '../types';
import { BASE_IMG_PATH } from '../../../const';


const Title: React.FC<{}> = (): React.ReactElement => {
    /** Box array used to populate the top right stat boxes */
    const box_array: boxArray = [{
        img_path: '/notification.png',
        text: 'Notifications',
        amount_text: null 
    },{
        img_path: '/fork.png',
        text: 'Fork',
        amount_text: '40.7k' 
    },
    { 
        img_path: '/star.png',
        text: 'Star',
        amount_text: '196k'
    } 
];


    return(
    <WrapperDiv>
        <div className='contents'>
            <img src={ BASE_IMG_PATH + '/bookmark.png'}/>
            <div className='links'>
                <a href="https://github.com/facebook">facebook</a>
                <p> / </p>
                <a href="https://github.com/facebook/react">react</a>
            </div>
            <div className='public-tag'>
                <p>Public</p>
            </div>
        </div>
        <div className='contents stats'>
            {box_array.map((item) => {
                return(
                    <div className='box'>
                        <img src={ BASE_IMG_PATH + item.img_path}/>
                        <p> {item.text} </p>
                        {item.amount_text ? <div className='shade-text'>
                            {item.amount_text}
                        </div> : null}
                    </div>
                )
            })}
        </div>
    </WrapperDiv>
    )
}

export default Title;