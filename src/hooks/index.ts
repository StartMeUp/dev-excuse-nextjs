export const useDialog = (dialogRef: React.RefObject<HTMLDialogElement>) => {
  const showDialog = () => {
    dialogRef.current?.showModal();
  };
  const closeDialog = () => {
    dialogRef.current?.close();
  };
  return { showDialog, closeDialog };
};
