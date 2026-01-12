import { Link, useNavigate } from "react-router-dom";

export default function PopExit({ setIsAuth }) {
  const navigate = useNavigate();
  function stayIn(event) {
    event.preventDefault();
    navigate(-1);
  }
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
                onClick={() => localStorage.removeItem("token")}
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
