import { Toast } from 'primereact/toast';

const ToastPositive = () => {
  const toastRef = useRef(null);

  const showToast = () => {
    toastRef.current.show({
      severity: 'success',
      summary: 'Connected Successfully',
      detail: 'Printavo Authorization Succesfull',
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


export default ToastPositive