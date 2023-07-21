export default class SnackBarManager {

    static snackbar = null;

    static setSnackBar(dropDown: any) {
        this.snackbar = dropDown;
    }

    static getSnackBar() {
        return this.snackbar;
    }


}