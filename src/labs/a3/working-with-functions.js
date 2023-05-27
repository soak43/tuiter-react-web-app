import ArrowFunction from "./arrow-functions";
import ES5Function from "./es5-functions";
import FuntionParenthesisAndParameters from "./function-parethesis-and-parameters";
import ImpliedReturn from "./implied-return";

function WorkingWithFunctions(){
    return (
        <div>
            <ES5Function />
            <ArrowFunction />
            <ImpliedReturn />
            <FuntionParenthesisAndParameters />
        </div>
    );
}

export default WorkingWithFunctions;