// Package imports
import './App.css'
import { Route, Routes } from 'react-router-dom'
import routes from './routes/routes'

// Utilities
import logger from './util/logger.js'

// Function to export collected data
function exportData() {
    const data = logger.exportAsJSON()

    const blob = new Blob([data], { type: 'application/json' })
    const link = document.createElement('a')
    link.download = 'collected-data.json'
    link.href = window.URL.createObjectURL(blob)
    link.dataset.downloadurl = ['application/json', link.download, link.href].join(':')

    const event = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
    })

    link.dispatchEvent(event)
    window.URL.revokeObjectURL(link.href)
    link.remove()
}

function App() {
    return (
        <>
            <Routes>
                {routes.map((route, index) => (
                    <Route
                        path={route.path}
                        element={route.element}
                        key={index}
                    />
                ))}
            </Routes>
            <button id="export-button" onClick={exportData}>Export Collected Data</button>
        </>
    )
}

export default App
