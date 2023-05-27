import * as React from "react"
import { Root, createRoot } from "react-dom/client"
import App from "./app"
import "./styles.css"

const root: Root = createRoot(document.getElementById("root") as HTMLElement)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
