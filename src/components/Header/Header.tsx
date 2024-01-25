import "../../styles/components-style/_header.scss";
import "../../styles/components-style/_btn.scss";
import ArrowBack from "../../assets/arrow_back.png";

interface HeaderProps {
  itemToShow: boolean;
  toggleVisibility: () => void;
  screenWidth: number;
}

export default function Header({ itemToShow, toggleVisibility, screenWidth }: HeaderProps) {

  return (
    <header className="header">
      <h1>NoteThings</h1>
      <div className="collapse-bloc">
        {
          screenWidth <= 426 ?
          <div className="collapse-element">
          <div className="arrow-bloc">
            <img
              className={`${itemToShow ? "toggle-open" : "toggle-close"}`}
              src={ArrowBack}
              alt=""
              onClick={toggleVisibility}
            />
          </div>
          <div className={`button-bloc ${itemToShow ? "" : "hide"}`}>
          <button
            type="button"
            className="btn-note"
            onClick={toggleVisibility}
          >
            <p>Create a note</p>
            <div className="round-container">
              <div className="plus-sign"></div>
            </div>
          </button>
        </div>
        </div>
        :
        <div className="button-bloc">
        <button
          type="button"
          className="btn-note"
        >
          <p>Create a note</p>
          <div className="round-container">
            <div className="plus-sign"></div>
          </div>
        </button>
      </div>
        }

      </div>
    </header>
  )
}
