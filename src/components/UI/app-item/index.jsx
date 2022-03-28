import AppItemComponent from "./AppItemComponent";
import AppItemContainer from "./AppItemContainer";

export const AppItem = (injectedProps) => {
  return (
    <AppItemContainer  {...injectedProps}>
      {(props) => (
        <AppItemComponent {...props} {...injectedProps}/>
      )}
    </AppItemContainer>
  )
}