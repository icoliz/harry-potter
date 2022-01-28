import '../styles/Loader.scss';

function Loading({ loading }) {
  return (
    <div>
      <div className={loading ? 'lds-roller' : 'hidden'}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

// Default props
Loading.defaultProps = {
  loading: 'hidden',
};

export default Loading;
