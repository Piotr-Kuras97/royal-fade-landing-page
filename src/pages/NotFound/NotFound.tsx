import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button/Button";

import "./NotFound.scss";

function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="not-found">
      <div className="not-found__container">

        <div className="not-found__content">

          <span className="not-found__code">
            404
          </span>

          <h1 className="not-found__title">
            Strona nie została znaleziona
          </h1>

          <div className="not-found__divider" />

          <p className="not-found__text">
            Wygląda na to, że strona, której szukasz, nie istnieje
            lub została przeniesiona.
          </p>

          <Button onClick={() => navigate("/")}>
            Wróć na stronę główną
          </Button>

        </div>
      </div>
    </section>
  );
}

export default NotFound;