/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Container, Input } from './SearchToolElements';
const SearchTool = ({ inputHandler,val }) => {
    return ( 
        <Container>
            <Input type="text" placeholder='Search' onChange={(e) => inputHandler(e)}/>
        </Container>
     );
}
 
export default SearchTool;