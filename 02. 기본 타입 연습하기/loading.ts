{
    type LoadingState = {
        state: 'loading';
    };

    type SuccessState = {
        state: 'success';
        response: {
            body: string;
        }
    };

    type FailState = {
        state: 'fail';
        reason: string;
    }

    type ResourceLoadState = LoadingState | SuccessState | FailState;

    function printState(state: ResourceLoadState) {
        switch (state.state) {
            case 'loading':
                console.log('loading...');
                break;
            case 'success':
                console.log(state.response.body);
                break;
            case 'fail':
                console.log(state.reason);
                break;
            default:
                throw Error('undefined state')
        }
    }

    printState({ state: 'loading' });
    printState({ state: 'success', response: { body: 'loaded' } });
    printState({ state: 'fail', reason: 'no network' });
}