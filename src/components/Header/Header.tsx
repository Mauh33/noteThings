import "../../styles/components-style/_header.scss";
import "../../styles/components-style/_btn.scss";
import ArrowBack from "../../assets/arrow_back.png";
import { HeaderProps } from "../../types/interface";
import { useStateContext } from "../../utils/DispatcherContext";

export default function Header({ screenWidth }: HeaderProps) {
  const {
    isButtonVisible,
    isFormVisible,
    setButtonVisibility,
    setFormVisibility,
  } = useStateContext();

  const toggleButtonVisibility = () => {
    setButtonVisibility(!isButtonVisible);
  };

  const toggleFormVisibility = () => {
    setFormVisibility(!isFormVisible);
  };

  return (
    <header className='header'>
      <h1>NoteThings</h1>
      <div className='collapse-bloc'>
        {screenWidth <= 426 ? (
          <div className='collapse-element'>
            <div className='arrow-bloc'>
              <img
                className={`${
                  isButtonVisible ? "toggle-open" : "toggle-close"
                }`}
                src={ArrowBack}
                alt=''
                onClick={toggleButtonVisibility}
              />
            </div>
            <div className={`button-bloc ${isButtonVisible ? "" : "hide"}`}>
              <button
                type='button'
                className='btn-note'
                onClick={toggleFormVisibility}
              >
                <p>Create a note</p>
                <div className='round-container'>
                  <div className='plus-sign'></div>
                </div>
              </button>
            </div>
          </div>
        ) : (
          <div className='button-bloc'>
            <button
              type='button'
              className='btn-note'
              onClick={toggleFormVisibility}
            >
              <p>Create a note</p>
              <div className='round-container'>
                <div className='plus-sign'></div>
              </div>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
