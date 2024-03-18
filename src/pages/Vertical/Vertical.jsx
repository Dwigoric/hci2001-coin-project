// Package imports
import { useState } from 'react'

// Stylesheets
import styles from './Vertical.module.css'

// Components
import ProfilePanel from '../../components/ProfilePanel/ProfilePanel.jsx'
import ButtonMain from '../../components/ButtonMain/ButtonMain'
import ButtonSub from '../../components/ButtonSub/ButtonSub'

// Utils
import settings from '../../util/options'
import settingItemsBuilder from '../../util/builders/settingItems.jsx'
import logger from '../../util/logger.js'

function Vertical() {
    // [currently selected main setting, currently selected subsetting]
    const [selectionState, setSelectionState] = useState(['ONLINE', 'Jobs'])

    return (
        <div className={styles.verticalPage}>
            <section className={styles.settingsBodyContainer}>
                <ProfilePanel />
                <div className={styles.settingsBody}>
                    <section className={styles.sidebar}>
                        {settings.map(({ name, submenu }, index) =>
                            selectionState[0] == name ? (
                                <div className={styles.sidebarItem} key={index}>
                                    <ButtonMain
                                        selectionState={selectionState}
                                        setSelectionState={setSelectionState}
                                        style="dropdown"
                                        state="active"
                                        text={name}
                                        callback={() => logger.log({
                                            action: 'CHANGE_TAB',
                                            message: name
                                        })}
                                    />

                                    <section className={styles.submenu}>
                                        {submenu.map(({ name }, index) =>
                                            selectionState[1] == name ||
                                            selectionState[1] == index ? (
                                                <ButtonSub
                                                    selectionState={selectionState}
                                                    setSelectionState={setSelectionState}
                                                    state="active"
                                                    text={name}
                                                    key={index}
                                                    callback={() => logger.log({
                                                        action: 'CHANGE_SUBMENU',
                                                        message: name
                                                    })}
                                                />
                                            ) : (
                                                <ButtonSub
                                                    selectionState={selectionState}
                                                    setSelectionState={setSelectionState}
                                                    state="inactive"
                                                    text={name}
                                                    key={index}
                                                    callback={() => logger.log({
                                                        action: 'CHANGE_SUBMENU',
                                                        message: name
                                                    })}
                                                />
                                            )
                                        )}
                                    </section>
                                </div>
                            ) : (
                                <ButtonMain
                                    selectionState={selectionState}
                                    setSelectionState={setSelectionState}
                                    style="dropdown"
                                    state="inactive"
                                    text={name}
                                    key={index}
                                    callback={() => logger.log({
                                        action: 'CHANGE_TAB',
                                        message: name
                                    })}
                                />
                            )
                        )}
                    </section>

                    <section className={styles.mainPanel}>
                        <div className={styles.settingsThemselves}>
                            {settingItemsBuilder(
                                selectionState[0],
                                selectionState[1],
                                ({ name, data }) => {
                                    logger.log({
                                        action: 'CHANGE_SETTING',
                                        message: `${name}: ${data}`
                                    })
                                }
                            )}
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Vertical
