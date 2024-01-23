import { login, registration } from "../../http/userAPI";

const onCreate = async (values, user, isRegistration, role) => {
    try {
        let data;
        if (!isRegistration) {
            data = await login(values.email, values.password);
        } else {
            data = await registration(
                values.email,
                values.password,
                values.name,
                values.surname,
                values.birthday,
                role
            );
        }
        if (data) {
            user.setUser(data);
            user.setIsAuth(true);
            return true;
        }
        return true;
    } catch (e) {
        return e;
    }
};

export default onCreate;