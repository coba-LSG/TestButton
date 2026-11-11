export default function App() {
  return (
    <main className="button-frame">
      <button className="primary-button" type="button">
        <span>label text</span>
        <span className="primary-button__icon" aria-hidden="true">
          <img
            className="primary-button__icon-default"
            src="/assets/d6251.svg"
            alt=""
            width="24"
            height="24"
          />
          <img
            className="primary-button__icon-hover"
            src="/assets/fc3b7.svg"
            alt=""
            width="24"
            height="24"
          />
          <img
            className="primary-button__icon-pressed"
            src="/assets/f5d7b.svg"
            alt=""
            width="24"
            height="24"
          />
        </span>
      </button>
    </main>
  );
}
