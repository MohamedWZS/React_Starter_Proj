export default function Tabs({ children, buttons, buttonContainer }) {
    // because the prop is passed beginning with lowercase. to make react recognize it as a custom attribute we needed to put it in a var.
    // we can avoid that by passing the prop beginning with uppercase.
    const ButtonContainer = buttonContainer; 

    return <>
        <ButtonContainer>
            {buttons}
        </ButtonContainer>
        {children}
    </>
        

}