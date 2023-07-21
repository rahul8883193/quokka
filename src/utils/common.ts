import SnackBarManager from '../utils/SnackBarManager';

export const showErrorSnackBar = (message: string) => {
  let Snackbar: any = SnackBarManager.getSnackBar();
  // setTimeout(() => {
  Snackbar.alertWithType('error', 'Error!', message, null, 1500);
  // }, 100);
};

export const showSuccessSnackBar = (
  message: string,
  title: String = 'Success!',
) => {
  let Snackbar: any = SnackBarManager.getSnackBar();
  setTimeout(() => {
    Snackbar.alertWithType('success', title, message, null, 1500);
  }, 100);
};

export const showInfoSnackBar = (
  title: string,
  message: string,
  timeOut = 3000,
) => {
  let Snackbar: any = SnackBarManager.getSnackBar();

  setTimeout(() => {
    Snackbar.alertWithType('info', title, message, null, timeOut);
  }, 100);
};
