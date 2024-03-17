import styles from './Vertical.module.css'

import { useEffect, useState } from 'react'
import { Slider } from '@mui/material';

import settings from '../../util/options';

import ProfilePanel from '../../components/ProfilePanel/ProfilePanel.jsx'
import ButtonMain from '../../components/ButtonMain/ButtonMain';
import ButtonSub from '../../components/ButtonSub/ButtonSub';

function Vertical() {
    // [currently selected main setting, currently selected subsetting]
    const [selectionState, setSelectionState] = useState([
        'none',
        'none',
    ]);
    const [options, setOptions] = useState();

    useEffect(() => {
        let currMain = settings.find(main => main.name == selectionState[0])
        if (!currMain) return

        let currSub = currMain.submenu.find(sub => sub.name == selectionState[1])
        if (!currSub) return

        setOptions(currSub.items);
    }, [selectionState])

    return (
        <div className={styles.verticalPage}>
            <section className={styles.settingsBodyContainer}>
                <ProfilePanel />
                <div className={styles.settingsBody}>
                    <section className={styles.sidebar}>
                        {settings.map(({ name, submenu }, index) =>
                            selectionState[0] == name ? (
                                <>
                                    <ButtonMain
                                        selectionState={selectionState}
                                        setSelectionState={setSelectionState}
                                        style="dropdown"
                                        state="active"
                                        text={name}
                                        key={index}
                                    />

                                    <section className={styles.submenu}>
                                        {submenu.map(({ name }, index) =>
                                            selectionState[1] == name ? (
                                                <ButtonSub
                                                    selectionState={selectionState}
                                                    setSelectionState={setSelectionState}
                                                    state="active"
                                                    text={name}
                                                    key={index}
                                                />
                                            ) : (
                                                <ButtonSub
                                                    selectionState={selectionState}
                                                    setSelectionState={setSelectionState}
                                                    state="inactive"
                                                    text={name}
                                                    key={index}
                                                />
                                            )
                                        )}
                                    </section>
                                </>
                            ) : (
                                <ButtonMain
                                    selectionState={selectionState}
                                    setSelectionState={setSelectionState}
                                    style="dropdown"
                                    state="inactive"
                                    text={name}
                                    key={index}
                                />
                            )
                        )}
                    </section>

                    <section className={styles.mainPanel}>
                        {options != null &&
                            options.map(({ name, type }, index) => (
                                <div className={styles.option} key={index}>
                                    <span>{name}</span>

                                    {type == 'slider' ? (
                                        <Slider size="medium" />
                                    ) : (
                                        <span>{type}</span>
                                    )}
                                </div>
                            ))}
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Vertical;