// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { setUserAuth } from "../../store/slice/UserAuthSlice.js";
// import style from "./RegistrationPage.module.scss";
// import { addUserAuth } from "../../Services/UsersFB/AuthService.js";
// import ModalAuth from "../../Components/ModalWindow/ModalAuth.jsx";
// import middlewareListenersUsers from "../../store/middleware/middleWareUsers.js";

// const schema = yup.object().shape({
//   firstName: yup.string().required("Требуется имя"),
//   lastName: yup.string().required("Требуется фамилия"),
//   email: yup
//     .string()
//     .email("Не верный email адрес")
//     .required("Требуется email"),
//   password: yup
//     .string()
//     .min(6, "Пароль должен содержать от 6 символов")
//     .required("Требуется пароль"),
//   confirmPassword: yup
//     .string()
//     .oneOf([yup.ref("password"), null], "Пароли должны совпадать")
//     .required("Подтвердите пароль"),
// });

// const RegistrationPage = ({ database }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const [showModal, setShowModal] = useState(false);
//   const [modalMessage, setModalMessage] = useState("");
//   const [success, setSuccess] = useState(false);

//   const onSubmit = async (data) => {
//     const { firstName, lastName, email, password } = data;
//     try {
//       const user = await addUserAuth({
//         firstName,
//         lastName,
//         email,
//         password,
//       });
//       console.log("Registered user:", user);
//       dispatch(setUserAuth(user));
//       setModalMessage(`Вы успешно зарегистрированы, ${user.email}`);
//       setSuccess(true);
//       setShowModal(true);

//       middlewareListenersUsers(database)(dispatch)({
//         type: "SUBSCRIBE_TO_USERS",
//       });
//     } catch (error) {
//       console.error("Registration error:", error);
//       setModalMessage("Ошибка регистрации: " + error.message);
//       setSuccess(false);
//       setShowModal(true);
//     }
//   };

//   const handleBackClick = () => {
//     navigate("/authorizationpage");
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     if (success) {
//       navigate("/");
//     }
//   };

//   return (
//     <div className={style.container}>
//       <img
//         src="src/assets/pictures/tatar_ornament.png"
//         className={style.tatar__ornament}
//         alt="tatar ornament"
//       />
//       <h2 className={style.header}>Регистрация</h2>
//       <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
//         <div className={style.input__wrapper}>
//           {errors.firstName && (
//             <p className={style.error}>{errors.firstName.message}</p>
//           )}
//           <label className={style.label} htmlFor="firstName">
//             Имя
//           </label>
//           <input
//             className={errors.firstName ? style.input__empty : style.input}
//             type="text"
//             id="firstName"
//             placeholder="Имя"
//             {...register("firstName")}
//           />
//         </div>
//         <div className={style.input__wrapper}>
//           {errors.lastName && (
//             <p className={style.error}>{errors.lastName.message}</p>
//           )}
//           <label className={style.label} htmlFor="lastName">
//             Фамилия
//           </label>
//           <input
//             className={errors.lastName ? style.input__empty : style.input}
//             type="text"
//             id="lastName"
//             placeholder="Фамилия"
//             {...register("lastName")}
//           />
//         </div>
//         <div className={style.input__wrapper}>
//           {errors.email && (
//             <p className={style.error}>{errors.email.message}</p>
//           )}
//           <label className={style.label} htmlFor="email">
//             Email
//           </label>
//           <input
//             className={errors.email ? style.input__empty : style.input}
//             type="email"
//             id="email"
//             placeholder="E-mail"
//             {...register("email")}
//           />
//         </div>
//         <div className={style.input__wrapper}>
//           {errors.password && (
//             <p className={style.error}>{errors.password.message}</p>
//           )}
//           <label className={style.label} htmlFor="password">
//             Пароль
//           </label>
//           <input
//             className={errors.password ? style.input__empty : style.input}
//             type="password"
//             id="password"
//             placeholder="Пароль"
//             {...register("password")}
//           />
//         </div>
//         <div className={style.input__wrapper}>
//           {errors.confirmPassword && (
//             <p className={style.error}>{errors.confirmPassword.message}</p>
//           )}
//           <label className={style.label} htmlFor="confirmPassword">
//             Пароль
//           </label>
//           <input
//             className={
//               errors.confirmPassword ? style.input__empty : style.input
//             }
//             type="password"
//             id="confirmPassword"
//             placeholder="Подтвердите пароль"
//             {...register("confirmPassword")}
//           />
//         </div>
//         <div className={style.button__container}>
//           <button
//             type="submit"
//             className={style.button__submit}
//             disabled={isSubmitting}
//           >
//             Зарегистрироваться
//           </button>
//           <button
//             type="button"
//             className={style.button__back}
//             onClick={handleBackClick}
//           >
//             Назад
//           </button>
//         </div>
//       </form>
//       <ModalAuth
//         showModal={showModal}
//         closeModal={closeModal}
//         success={success}
//         message={modalMessage}
//         type="registration"
//       />
//     </div>
//   );
// };

// export default RegistrationPage;



import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserAuth } from "../../store/slice/UserAuthSlice.js";
import style from "./RegistrationPage.module.scss";
import { addUserAuth } from "../../Services/UsersFB/AuthService.js";
import ModalAuth from "../../Components/ModalWindow/ModalAuth.jsx";
import middlewareListenersUsers from "../../store/middleware/middleWareUsers.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const schema = yup.object().shape({
  firstName: yup.string().required("Требуется имя"),
  lastName: yup.string().required("Требуется фамилия"),
  email: yup
    .string()
    .email("Не верный email адрес")
    .required("Требуется email"),
  password: yup
    .string()
    .min(6, "Пароль должен содержать от 6 символов")
    .required("Требуется пароль"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Пароли должны совпадать")
    .required("Подтвердите пароль"),
});

const RegistrationPage = ({ database }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data) => {
    const { firstName, lastName, email, password } = data;
    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;

      // После успешного создания пользователя в Authentication, сохраняем данные в Realtime Database
      const userData = {
        firstName,
        lastName,
        email,
        uid: firebaseUser.uid, // используем UID Firebase пользователя
      };
      const newKey = await addUserAuth(userData);
      console.log("Registered user:", userData);
      dispatch(setUserAuth({ ...userData, key: newKey }));
      setModalMessage(`Вы успешно зарегистрированы, ${userData.email}`);
      setSuccess(true);
      setShowModal(true);

      middlewareListenersUsers(database)(dispatch)({
        type: "SUBSCRIBE_TO_USERS",
      });
    } catch (error) {
      console.error("Registration error:", error);
      setModalMessage("Ошибка регистрации: " + error.message);
      setSuccess(false);
      setShowModal(true);
    }
  };

  const handleBackClick = () => {
    navigate("/authorizationpage");
  };

  const closeModal = () => {
    setShowModal(false);
    if (success) {
      navigate("/");
    }
  };

    return (
    <div className={style.container}>
      <img
        src="src/assets/pictures/tatar_ornament.png"
        className={style.tatar__ornament}
        alt="tatar ornament"
      />
      <h2 className={style.header}>Регистрация</h2>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={style.input__wrapper}>
          {errors.firstName && (
            <p className={style.error}>{errors.firstName.message}</p>
          )}
          <label className={style.label} htmlFor="firstName">
            Имя
          </label>
          <input
            className={errors.firstName ? style.input__empty : style.input}
            type="text"
            id="firstName"
            placeholder="Имя"
            {...register("firstName")}
          />
        </div>
        <div className={style.input__wrapper}>
          {errors.lastName && (
            <p className={style.error}>{errors.lastName.message}</p>
          )}
          <label className={style.label} htmlFor="lastName">
            Фамилия
          </label>
          <input
            className={errors.lastName ? style.input__empty : style.input}
            type="text"
            id="lastName"
            placeholder="Фамилия"
            {...register("lastName")}
          />
        </div>
        <div className={style.input__wrapper}>
          {errors.email && (
            <p className={style.error}>{errors.email.message}</p>
          )}
          <label className={style.label} htmlFor="email">
            Email
          </label>
          <input
            className={errors.email ? style.input__empty : style.input}
            type="email"
            id="email"
            placeholder="E-mail"
            {...register("email")}
          />
        </div>
        <div className={style.input__wrapper}>
          {errors.password && (
            <p className={style.error}>{errors.password.message}</p>
          )}
          <label className={style.label} htmlFor="password">
            Пароль
          </label>
          <input
            className={errors.password ? style.input__empty : style.input}
            type="password"
            id="password"
            placeholder="Пароль"
            {...register("password")}
          />
        </div>
        <div className={style.input__wrapper}>
          {errors.confirmPassword && (
            <p className={style.error}>{errors.confirmPassword.message}</p>
          )}
          <label className={style.label} htmlFor="confirmPassword">
            Пароль
          </label>
          <input
            className={
              errors.confirmPassword ? style.input__empty : style.input
            }
            type="password"
            id="confirmPassword"
            placeholder="Подтвердите пароль"
            {...register("confirmPassword")}
          />
        </div>
        <div className={style.button__container}>
          <button
            type="submit"
            className={style.button__submit}
            disabled={isSubmitting}
          >
            Зарегистрироваться
          </button>
          <button
            type="button"
            className={style.button__back}
            onClick={handleBackClick}
          >
            Назад
          </button>
        </div>
      </form>
      <ModalAuth
        showModal={showModal}
        closeModal={closeModal}
        success={success}
        message={modalMessage}
        type="registration"
      />
    </div>
  );
};

export default RegistrationPage;