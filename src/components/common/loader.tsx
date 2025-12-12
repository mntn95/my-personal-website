interface LoaderProps {
  isVisible: boolean;
}

const Loader = ({ isVisible }: LoaderProps) => {
  if (!isVisible) return null;

  return (
    <div className="loader-overlay">
      <div className="loader-wrapper">
        <div className="loader-spinner">
          <div className="loader-bar"></div>
          <div className="loader-bar"></div>
          <div className="loader-bar"></div>
          <div className="loader-bar"></div>
          <div className="loader-bar"></div>
          <div className="loader-bar"></div>
          <div className="loader-bar"></div>
          <div className="loader-bar"></div>
          <div className="loader-bar"></div>
          <div className="loader-bar"></div>
          <div className="loader-bar"></div>
          <div className="loader-bar"></div>
        </div>
      </div>
    </div>
  );
};

export { Loader };
