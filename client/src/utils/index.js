

//Store all helpers (utils) for app.
export default class Utils {

    static constAdmin = "ADMIN";
    static constUngVien = "UNGVIEN";
    static constNhaTuyenDung = "NHATUYENDUNG";
    //get user type..
    static getUserType = () => {
        let user = localStorage.getItem("user");
        if (!user || !this.isJSON(user)) return "";//default..
        user = JSON.parse(user);
        return user.type;
    }

    static isJSON = (json) => {
        try {
            JSON.parse(json);
            return true;
        } catch (e) {
            return false;
        }
    }

}