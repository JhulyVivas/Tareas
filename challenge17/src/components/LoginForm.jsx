import useLoginForm from '../hooks/useLoginForm';
import styles from '../styles/Logeo.module.css'
import logo from '../logo.png';
import { Link } from 'react-router-dom';
//Logeo.module.css
export const LoginForm = () => {
  const {usuario, contraseña, tomarUsuario, tomarContraseña, handleLogin, credencialesInvalidas} = useLoginForm();

  return (
    <>
      <body>
        <p>Usuario: Jhuly</p>
        <p>Contraseña: 1234</p>

        <div className={styles.loginFormContainer}>
          <div className={styles.formGroup}>
            <img src={logo} alt='logo' className={styles.logo} />
            <input
              className={styles.input}
              type='text'
              placeholder='Ingrese su nombre de usuario'
              onChange={(evt) => tomarUsuario(evt)}
            />
          </div>
          <div className={styles.formGroup}>
            <input
              className={styles.input}
              type='password'
              placeholder='Ingrese su contraseña'
              onChange={(evt) => tomarContraseña(evt)}
            />
          </div>
          {credencialesInvalidas && (
            <p className={styles.errorMessage}>
              Credenciales inválidas, por favor intente de nuevo.
            </p>
          )}
          <div className={styles.buttonsContainer}>
            <button
              className={styles.logInButton}
              type='button'
              onClick={(e) => handleLogin(e)}
            >
              Acceder
            </button>
          </div>
        </div>
      </body>
    </>
  );
};