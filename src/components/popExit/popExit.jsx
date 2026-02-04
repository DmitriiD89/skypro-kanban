import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function PopExit() {
  const { stayIn, logOut } = useContext(AuthContext);
  return (
    <div className="pop-exit" id="popExit">
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <form className="pop-exit__form" id="formExit" action="#">
            <div className="pop-exit__form-group">
              <button
                onClick={logOut}
                className="pop-exit__exit-yes _hover01"
                id="exitYes"
              >
                Да, выйти
              </button>
              <button
                onClick={stayIn}
                className="pop-exit__exit-no _hover03"
                id="exitNo"
              >
                Нет, остаться
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
