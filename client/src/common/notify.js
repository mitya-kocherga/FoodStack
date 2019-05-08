import { toast } from 'react-toastify';

const toastConfig =  {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
};

export const notify = ( text, error = false ) => !error ? 
    toast.success(text , toastConfig) : 
    toast.error(text , toastConfig);