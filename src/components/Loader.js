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

Loading.defaultProps = {
  loading: 'hidden',
};

export default Loading;
