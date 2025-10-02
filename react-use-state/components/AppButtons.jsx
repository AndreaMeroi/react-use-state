import { useState } from "react"

export default function AppButton() {

    const [lenguage, setLenguage] = useState(0)

    return (
        <div className="bar">
            <button>
                HTML
            </button>
            <button>
                CSS
            </button>
            <button>
                JavaScript
            </button>
            <button>
                Node.js
            </button>
            <button>
                Express
            </button>
            <button>
                ReactJS
            </button>
        </div>
    )
}