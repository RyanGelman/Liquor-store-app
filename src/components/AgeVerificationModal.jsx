import React from 'react';

const AgeVerificationModal = ({ onVerify }) => {
    return (
        <div style={styles.modalOverlay}>
            <div style={styles.modalContent}>
                <h2 style={styles.modalHeader}>Age Verification</h2>
                <p style={styles.modalText}>You must be 21 years of age or older to enter this site.</p>
                <div style={styles.buttonContainer}>
                    <button onClick={() => onVerify(true)} style={styles.buttonYes}>Yes, I'm over 21</button>
                    <button onClick={() => onVerify(false)} style={styles.buttonNo}>No, I'm not 21</button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000, // Ensure modal is above other content
    },
    modalContent: {
        width: '90%',
        maxWidth: '500px',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    modalHeader: {
        marginTop: '0',
    },
    modalText: {
        lineHeight: '1.6',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '20px',
    },
    buttonYes: {
        padding: '10px 20px',
        backgroundColor: '#4CAF50', // Green
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    },
    buttonNo: {
        padding: '10px 20px',
        backgroundColor: '#f44336', // Red
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    }
};

export default AgeVerificationModal;
