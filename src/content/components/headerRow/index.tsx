import React from 'react'
import { WrapperDiv } from './styles';
import { BASE_IMG_PATH } from '../../../const';

const HeaderRow: React.FC<{}> = (): React.ReactElement => {

    /** for open and closed issues only using to show static layout */
    const issue_status = [
        {
            img_path: 'circle-dot-black.png',
            text: 'Open',
            total: 819
        },
        {
            img_path: 'correct-tick.png',
            text: 'Closed',
            total: 10960
        }
    ] as const;

    const sort_items = [ 'Author', 'Label', 'Projects', 'Milestones', 'Assignee', 'Sort'] as const;

    return(    
        <WrapperDiv>
            <div className='content'>
                <div className='flex-group issues-number'>
                    {issue_status.map((item) => {
                        return(
                            <div className='status'>
                                <img src={ BASE_IMG_PATH + '/content/' + item.img_path}/>
                                <span style={{ color: `${item.text === 'Closed'? 'grey' : 'black'}`}}>{item.total.toLocaleString('en', {useGrouping: true})}</span>
                                <span style={{ color: `${item.text === 'Closed'? 'grey' : 'black'}`}}>{item.text}</span> 
                            </div>
                        )
                    })}
                </div>
                <div className='flex-group'>
                    {sort_items.map((item) => {
                        return(
                            <div className='status sort-item'>
                                <span>{item}</span>
                                <img className='down-arrow' src={ BASE_IMG_PATH + '/content/down-arrow.png'}/>
                            </div>)
                        })}
                </div>
            </div>
        </WrapperDiv>
    )
}

export default React.memo(HeaderRow);