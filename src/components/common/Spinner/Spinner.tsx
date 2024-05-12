import { SpinnerOverlay } from '@styles/SpinnerStyles';
import { ring2 } from 'ldrs'

ring2.register()

const Spinner = ({ loading }: any) => {

    const isLoading = loading;
    if (!isLoading) return null;

    return (
        <SpinnerOverlay>
            <l-ring-2
                bg-opacity="0.1"
                color="black"
                size="40"
                speed="0.8"
                stroke="5"
                stroke-length="0.25"
            />
        </SpinnerOverlay>
    )
}

export default Spinner