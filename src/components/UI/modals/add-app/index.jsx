import AddAppComponent from "./AddAppComponent";
import AddAppContainer from "./AddAppContainer";


export const AddApp = (injectedProps) => {
  return (
    <AddAppContainer  {...injectedProps}>
      {(props) => (
        <AddAppComponent {...props} {...injectedProps}/>
      )}
    </AddAppContainer>
  )
}