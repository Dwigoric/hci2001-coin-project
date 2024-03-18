import styles from './ProfilePanel.module.css'

function ProfilePanel() {
    return (
        <div className={styles.profilePanel}>
            <h1>
                Grand Theft Auto V
            </h1>
            <div className={styles.userInfo}>
                <div className={styles.userDetails}>
                    <p>
                        Player Name
                    </p>
                    <p>
                        SUNDAY 00:00
                    </p>
                    <p>
                        BANK $10,000,000 CASH $0
                    </p>
                </div>
                <div className={styles.userImage}>
                    <img
                        src="player-image.jpg"
                        alt="Player Image"
                    />
                </div>
            </div>
        </div>
    )
}

export default ProfilePanel
