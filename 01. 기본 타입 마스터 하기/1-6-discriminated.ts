{
    // function: login -> success, fail
    type SuccessState={
        result: 'success',
        response:{
            body: string;
        }
    }
    type FailState = {
        result:'fail',
        reason: string;
    }
    type LoginState = SuccessState | FailState
    function login(id: string, password: string): LoginState{
        return {
            result:'success',
            response:{
                body:'logged in'
            }
        }
    }

    // printLoginState(state) 
    // success -> response body 출력
    // fail -> reason 출력
    function printLoginState(state: LoginState){
        if(state.result === 'success'){
            console.log(state.response.body)
        } else {
            console.log(state.reason)
        }
    }
}