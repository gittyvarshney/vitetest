import React, {useState, useRef, useCallback} from 'react'
import { WrapperDiv } from './styles';
import HeaderRow from './components/headerRow';
import Row from './components/row';
import { useQuery } from './useQuery';

/** Content include the Header row & the listing rows which are fetched from the API 
 *  Infinite scrolling is applied in this component by using Intersection observer
*/

const Content: React.FC<{}> = (): React.ReactElement => {

    const [page, setPage] = useState<number>(0)

    /** Using custom hook to populate data when the page number changes */
    const [ isLoading, isError, data, hasMore ] = useQuery(page);

    const observer = useRef<IntersectionObserver>(); // ref to keep track of the current observer

    const lastElementRef = useCallback((node: HTMLDivElement) => {

        if(isLoading) return;

        /** If we already setup the observer then disconnect it */
        if(observer.current) observer.current.disconnect()

        /** setting up a new observer for the last element */
        observer.current = new IntersectionObserver(entries => {

            /** if it intersect with the view then we have to increase the page number */
            if(entries[0].isIntersecting && hasMore){
                setPage(prevValue => prevValue + 1)
            }
        })
        if(node) observer.current.observe(node); //now observing the last element
    },[isLoading, hasMore])

    return(
    <WrapperDiv>
        <HeaderRow />
        { data.map((row_data,i) => {
            if(data.length === i+1){
                /** Only applying observer to the last element */
                return(<div ref={lastElementRef} key={`${i}-searched`}>
                        <Row {...row_data} />
                        </div>)
            }else{
                return(<div key={`${i}-searched`}>
                        <Row {...row_data} />
                         </div>)
            }
        })}
        {isLoading && <div> Loading... </div> }
        {isError && <div> Error! </div> }
    </WrapperDiv>
    )
}

export default Content;