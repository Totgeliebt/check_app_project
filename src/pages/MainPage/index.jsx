import MainPageComponent from "./MainPageComponent";
import MainPageContainer from './MainPageContainer';

export const MainPage = (injectedProps) => {
  return (
    <MainPageContainer  {...injectedProps}>
      {(props) => (
        <MainPageComponent {...props} {...injectedProps}/>
      )}
    </MainPageContainer>
  )
}