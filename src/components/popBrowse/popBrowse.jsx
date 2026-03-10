import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TasksContext } from "../../context/TasksContext";
import { Calendar } from "../Calendar/calendar";

export default function PopBrowse() {
  const {
    fetchDeleteTaskById,
    loading,
    errorModal,
    fetchEditTaskById,
    changeCurrentTask,
    currentTask,
    getCurrentTask,
    fetchTaskById,
  } = useContext(TasksContext);

  const [selectedDate, setSelectedDate] = useState(null);
  const navigator = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    getCurrentTask(id);
  }, []);
  const [isEdited, setIsEdited] = useState(false);
  const statusOption = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];
  function handleStatus(status) {
    if (isEdited) {
      changeCurrentTask({ target: { name: "status", value: status } });
    }
  }
  function handleDate(date) {
    setSelectedDate(date);
    changeCurrentTask({ target: { name: "date", value: date } });
  }
  function resetForm() {
    setIsEdited(false);
    fetchTaskById(id);
    setSelectedDate(null);
  }

  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">{currentTask.title}</h3>
              <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                {statusOption.map((status, index) => (
                  <div
                    onClick={() => handleStatus(status)}
                    key={index}
                    className={`status__theme ${
                      !isEdited && status !== currentTask.status ? "_hide" : ""
                    } ${currentTask.status === status ? "_gray" : ""}`}
                  >
                    <p className={currentTask.status === status ? "_gray" : ""}>
                      {status}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="pop-browse__wrap">
              <form
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                action="#"
              >
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    onChange={changeCurrentTask}
                    readOnly={!isEdited}
                    value={currentTask.description}
                    className="form-browse__area"
                    name="description"
                    id="textArea01"
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </div>
              </form>
              <div className="pop-new-card__calendar calendar">
                <p className="calendar__ttl subttl">Даты</p>
                <div className="calendar__block">
                  {isEdited ? (
                    <Calendar
                      isEdited={!isEdited}
                      selectedDate={selectedDate}
                      setSelectedDate={handleDate}
                    />
                  ) : (
                    <Calendar
                      isEdited={!isEdited}
                      selectedDate={currentTask.date}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div>
            <div className="pop-browse__btn-browse ">
              <div className="btn-group">
                {isEdited ? (
                  <>
                    <button
                      onClick={() => fetchEditTaskById(id)}
                      className="btn-browse__edit _btn-bor _hover03"
                    >
                      Сохранить
                    </button>
                    <button
                      onClick={() => {
                        resetForm();
                      }}
                      className="btn-browse__edit _btn-bor _hover03"
                    >
                      Отменить
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setIsEdited(true)}
                    className="btn-browse__edit _btn-bor _hover03"
                  >
                    Редактировать задачу
                  </button>
                )}
                <button
                  onClick={() => fetchDeleteTaskById(id)}
                  disabled={loading}
                  className="btn-browse__delete _btn-bor _hover03"
                >
                  {loading ? "Загрузка..." : "Удалить задачу"}
                </button>
              </div>
              <button
                className="btn-browse__close _btn-bg _hover01"
                onClick={() => navigator(-1)}
              >
                Закрыть
              </button>
            </div>
            {errorModal && <span style={{ color: "red" }}>{errorModal}</span>}
            <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01">
                  <a href="#">Сохранить</a>
                </button>
                <button className="btn-edit__edit _btn-bor _hover03">
                  <a href="#">Отменить</a>
                </button>
                <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                >
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button className="btn-edit__close _btn-bg _hover01">
                <a href="#">Закрыть</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
