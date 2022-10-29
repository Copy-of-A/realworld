import { LayoutContainer } from "../../containers/LayoutContainer/LayoutContainer"
import { SignContainer } from "../../containers/SignContainer/SignContainer"

export const Register = () => {
    return (
        <LayoutContainer>
            <SignContainer
                heading="Sign Un" link={{
                    name: "Have an account?",
                    path: "/login"
                }}
                handleButtonClick={() => { }}
            >
            </SignContainer>
        </LayoutContainer>
    )
}