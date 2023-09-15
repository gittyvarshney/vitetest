import React from 'react'
import { WrapperDiv } from './styles'
import Title from './components/title'
import SelectionList from './components/selectionList'


const Header: React.FC<{}>= (props) : React.ReactElement => {

    return(
        <WrapperDiv>
            <Title />
            <SelectionList />
        </WrapperDiv>
    )
}

export default Header;