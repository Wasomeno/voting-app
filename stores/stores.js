import create from "zustand";

const toastStore = create((set) => ({
  show: false,
  text: "",
  condition: "",
  success: (string) => {
    set(() => ({ show: true, text: string, condition: "success" }));
    setTimeout(() => set(() => ({ show: false })), 3000);
  },
  error: (string) => {
    set(() => ({ show: true, text: string, condition: "error" }));
    setTimeout(() => set(() => ({ show: false })), 3000);
  },
}));

export const useToast = () => {
  const toastSuccess = toastStore((state) => state.success);
  const toastError = toastStore((state) => state.error);
  return [toastSuccess, toastError];
};

export const getToastDetails = () => {
  const toastText = toastStore((toast) => toast.text);
  const toastCondition = toastStore((toast) => toast.condition);
  const toastShow = toastStore((toast) => toast.show);
  return [toastShow, toastText, toastCondition];
};
