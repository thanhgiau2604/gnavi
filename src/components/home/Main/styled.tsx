import styled from 'styled-components'

const HomeContainer = styled.div`
  .profile-container {
    background: #e5e5e5;
  }
  .profile {
    background: #fff;
    margin-bottom: 2rem;
    height: 13.3rem;
  }
  .profile-text {
    width: 70%;
    div {
      margin-left: 2rem;
    }
    a {
      font-weight: 400;
      position: absolute;
      margin-top: 10px;
    }
    .info-guide-button {
      position: relative;
      top: 15px;
    }
  }
  .profile-logout {
    background: #fff;
    font-size: 1.6rem;
    margin-top: 2rem;
    a {
      color: #232b39;
      font-weight: 400;
      height: 4.8rem;
      padding-top: 1.3rem;
    }
  }
  .profile-line {
    background: #e5e5e5;
    height: 3rem;
  }
`

export { HomeContainer }
