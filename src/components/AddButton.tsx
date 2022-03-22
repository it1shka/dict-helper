import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { RootDispatch } from '../store'
import { setAdding } from '../store/app/actions'

const AddButton = () => {
  const dispatch = useDispatch<RootDispatch>()
  const handleAddClick = () => {
    dispatch(setAdding(true))
  }

  return (
    <StyledAddButton onClick={handleAddClick}>
      Add word
    </StyledAddButton>
  )
}

const StyledAddButton = styled.button`
  position: relative;
  border: none;
  border-top: 1px solid #ddd;
  border-radius: 0 0 7px 7px;  
  font-size: inherit;
  padding: 0.35em;
  &:hover {
    background-color: #dedede;
  }
`

export default AddButton