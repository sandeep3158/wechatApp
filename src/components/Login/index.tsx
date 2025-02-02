import { InputText } from "primereact/inputtext"
import { AppContainer } from "../../shared/AppContainer"
import { Button } from "primereact/button"

export const Login = () => {
    return (
        <AppContainer className="flex justify-content-center align-items-center">
            <div className="flex flex-column gap-3 p-8 surface-100 border-1 border-primary border-round-sm">
                <InputText placeholder="Email or Phone number" />
                <InputText type="password" placeholder="Password" />
                <Button label="Login" />
            </div>
        </AppContainer>
    )
}