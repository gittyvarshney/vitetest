import React from 'react'
import { WrapperDiv } from './styles';
import { boxArray } from '../types';
import { BASE_IMG_PATH } from '../../../const';

const SelectionList: React.FC<{}> = (): React.ReactElement => {

    /** Total List of various selection in github */
    const selection_list: boxArray = [{
        img_path: '/code.png',
        text: 'Code',
        amount_text: null 
    },{
        img_path: '/issues.png',
        text: 'Issues',
        amount_text: '819' 
    },
    { 
        img_path: '/pullrequest.png',
        text: 'Pull request',
        amount_text: '215'
    },
    { 
        img_path: '/actions.png',
        text: 'Actions',
        amount_text: null
    },
    { 
        img_path: '/projects.png',
        text: 'Projects',
        amount_text: null
    },
    { 
        img_path: '/wiki.png',
        text: 'Wiki',
        amount_text: null
    },
    { 
        img_path: '/security.png',
        text: 'Security',
        amount_text: null
    },
    { 
        img_path: '/insights.png',
        text: 'Insights',
        amount_text: null
    }
]
    return(
        <WrapperDiv>
            {
                selection_list.map((item) => {
                    return(
                        <div className='item-s'>
                            <div className='item'>
                            <img src={ BASE_IMG_PATH + '/selection' + item.img_path}/>
                            <p> {item.text} </p>
                            {item.amount_text ? <div className='shade-text'>
                            {item.amount_text} </div> : null}
                            </div>
                        </div>
                    )
                })
            }
        </WrapperDiv>
    )
}

export default SelectionList;