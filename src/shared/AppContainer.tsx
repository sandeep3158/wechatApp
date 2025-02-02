import { IContainerProps } from "../interfaces/Icommon"

export const AppContainer = ({ children, className }: IContainerProps) => {
    return (
        <div className={`p-component p-2  h-screen ${className}`}>
            {children}
        </div>
    )
} 