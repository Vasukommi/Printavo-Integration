import { useRef } from 'react';
import { Toast } from 'primereact/toast';

const ToastNegative = () => {
    const toastRef = useRef(null);

    const showToast = () => {
        toastRef.current.show({
            severity: 'error',
            summary: 'Connection Failed',
            detail: 'Invalid Connection Details',
            life: 3000
        });
    }

    return (
        <div>
            <button onClick={showToast}>Show Toast</button>
            <Toast ref={toastRef} />
        </div>
    );
}

export default ToastNegative
