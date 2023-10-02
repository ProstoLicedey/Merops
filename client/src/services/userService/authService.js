import {login, registration} from "../../http/userAPI";

const onCreate = async (values, user, isRegistration) => {
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
                values.birthday
            );
        }
        if(data) {

            user.setUser(data);
            console.log(user.user)
            console.log( user.user.name)
            user.setIsAuth(true);
            return true;
        }
    } catch (e) {
      return e
    }
};

export default onCreate;
