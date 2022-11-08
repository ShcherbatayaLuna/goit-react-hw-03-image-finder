import { ThreeDots } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div className="loader-container">
      <ThreeDots
        height="120"
        width="120"
        radius="12"
        color="#303f9f"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}
