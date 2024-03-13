import styles from './Intro.module.css'

function requestFullScreen() {
    const elem = document.documentElement
    if (elem.requestFullscreen) {
        elem.requestFullscreen()
            .then(() => null)
            .catch(() => null)
    }
}

function Intro() {
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
                </ol>
            </p>
            <div>
                If you are ready to proceed, ask the researcher which task you are going to do.
                Click the appropriate button below to begin.
                <div className={styles.taskButtonList}>
                    <button>
                        <a href="/horizontal">Horizontal</a>
                    </button>
                    <button>
                        <a href="/vertical">Vertical</a>
                    </button>
                    <button>
                        <a href="/mixed">Mixed</a>
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
            </div>
        </div>
    )
}

export default Intro
