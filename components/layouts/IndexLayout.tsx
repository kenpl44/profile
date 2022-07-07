
import styled from 'styled-components';

//layouts 
//-head
//-profile excerpt 
//-projects

const Container = styled.div`
 padding:1.5em 1em;

 @media(min-width:900px){
    width:850px;
    margin:auto;
 }
  
`

const Top = styled.div`
`
const FirstSection = styled.div`
  margin-bottom:3em;
`

const SecondSection = styled.div`

`
export const IndexLayout = ({
    children,
})=>{
    
    const [top,firstSec,secondSec,thirdSec] = children;



    return(
        <Container>
            <Top>{top}</Top>

            <FirstSection>{firstSec}</FirstSection>

            <SecondSection>{secondSec}</SecondSection>

            <div>{thirdSec}</div>
        </Container>
    )
}