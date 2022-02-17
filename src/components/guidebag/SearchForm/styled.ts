import styled from 'styled-components'

const SearchFormContainer = styled.div`
  padding-top: 1.3rem;
  button {
    margin-left: 1.9rem;
    font-size: 1.4rem;
  }

  input {
    padding-left: 3.3rem;
  }

  .search {
    &-field {
      position: relative;
    }
    &-icon {
      position: absolute;
      left: 0.6rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`

export { SearchFormContainer }
