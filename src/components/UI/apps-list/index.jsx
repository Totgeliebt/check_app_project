import AppsListComponent from "./AppsListComponent";
import AppsListContainer from "./AppsListContainer";

export const AppsList = (injectedProps) => {
  return (
    <AppsListContainer  {...injectedProps}>
      {(props) => (
        <AppsListComponent {...props} {...injectedProps}/>
      )}
    </AppsListContainer>
  )
}