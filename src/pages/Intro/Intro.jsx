// Package imports
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

// Stylesheets
import styles from './Intro.module.css'

// Utils
import logger from '../../util/logger.js'

function requestFullScreen() {
    const elem = document.documentElement
    if (elem.requestFullscreen) {
        elem.requestFullscreen()
            .then(() => null)
            .catch(() => null)
    }
}

function Intro() {
    const navigate = useNavigate()
    const [isGamer, setIsGamer] = useState(false)

    return (
        <div className={styles.introPage}>
            <h2>
                Welcome to our COIN research!
            </h2>
            <div>
                <h3>
                    How fast can you do the tasks given?
                </h3>
                <p>
                    This research aims to understand how people interact with different types of
                    user interfaces.
                </p>
                <p>
                    We will be asking you to perform a series of tasks on simulated
                    interfaces of the GTA V settings menu.
                </p>
                <p>
                    Please accomplish the tasks as fast as you can.
                </p>
            </div>
            <p className={styles.prerequisites}>
                <h4>
                    Before you proceed, please ensure that:
                </h4>
                <ol>
                    <li>You have allotted 5 to 10 minutes for this activity.</li>
                    <li>You will only use a trackpad or mouse.</li>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <li>Your screen's resolution is 1920x1080 pixels.</li>
                    <li
                        onClick={requestFullScreen}
                        style={{
                            cursor: 'pointer',
                            textDecoration: 'underline'
                        }}
                    >You are using your browser in full screen.
                    </li>
                    <li>
                        If you consider yourself a gamer, <a
                        onClick={() => {
                            logger.setGamer()
                            setIsGamer(true)
                        }}
                        style={{
                            cursor: 'pointer',
                            textDecoration: 'underline'
                        }}
                    >click here</a>.{
                        isGamer ? <p>You have classified yourself as a gamer. If not, please reload the page.</p> : ''
                    }
                    </li>
                </ol>
            </p>
            <div>
                <strong>Disclaimer</strong>
                <p>
                    If you have a question about understanding the tasks, please ask the researcher
                    who reached out to you.
                </p>
                <p>
                    Afterward, please redo all tasks from the beginning, as the time it took you to
                    ask the question will affect the results.
                </p>
                <p>
                    No questions will be entertained regarding finding the buttons or the
                    interface as this is part of the research.
                </p>
            </div>
            <div>
                If you are ready to proceed, ask the researcher which task you are going to do.
                Click the appropriate button below to begin.
                <div className={styles.taskButtonList}>
                    <button>
                        <a onClick={() => {
                            logger.log({ action: 'NAVIGATE', message: 'Horizontal' })
                            navigate('/horizontal')
                        }}>Horizontal</a>
                    </button>
                    <button>
                        <a onClick={() => {
                            logger.log({ action: 'NAVIGATE', message: 'Vertical' })
                            navigate('/vertical')
                        }}>Vertical</a>
                    </button>
                    <button>
                        <a onClick={() => {
                            logger.log({ action: 'NAVIGATE', message: 'Mixed' })
                            navigate('/mixed')
                        }}>Mixed</a>
                    </button>
                </div>
            </div>
            <div>
                <p>
                    By starting the task, you are allowing your test results to be collected and
                    used for research purposes.
                </p>
                <p>
                    Your data will be kept anonymous and will not be
                    shared with any third party.
                </p>
                <p>
                    Additionally, this website does not use any cookie nor does it connect to any
                    external server.
                </p>
                <p></p>
                <p>
                    <a target="_blank" href="https://icons8.com/icon/c7wDY2TRDZHz/gta-5">GTA 5</a> icon by <a
                    target="_blank" href="https://icons8.com">Icons8</a>
                </p>
            </div>
        </div>
    )
}

export default Intro
