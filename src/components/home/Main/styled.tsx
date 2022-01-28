import styled from 'styled-components'

const MainSession = styled.section`
  .opening {
    &-main {
      button:first-of-type {
        margin-top: 10rem;
      }
      button:last-of-type {
        margin-top: 2.7rem;
      }
    }
    &-intro {
      font-size: 1.8rem;
      text-align: center;
      padding: 0 2.4rem;
    }
  }
`
const ContainerMain = styled.div`
  background: #e5e5e5;
`
const InfoGuide = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  padding: 0 2.7rem;
  background: #fff;
  margin-bottom: 40px;
  height: 133px;
  &-title {
    width: 70%;
    display: flex;
    justify-content: space-between;
    margin-left: 20px;
  }
  &-logo {
    width: 30%;
  }
  &-button {
    transform: rotate(180deg);
    width: 24px;
  }
`
const InfoGeneral = styled.div`
  margin-bottom: 40px;
  background: #fff;
`

const InfoGeneralList = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2.7rem;
  border-bottom: 1px solid #e5e5e5;
  height: 48px;
  align-items: center;
`
export { MainSession, ContainerMain, InfoGuide, InfoGeneral, InfoGeneralList }
