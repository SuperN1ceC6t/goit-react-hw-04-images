import { ColorRing } from "react-loader-spinner";

export const Loader = () => {
    return (
        <div className="Loader">
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5', '#3f51b5']}
            />
        </div>
    )
}