import BooleanVariables from "./boolean-variables";
import IfElse from "./if-else";
import VariableTypes from "./variable-types";
import VariablesAndConstants from "./variables-and-constants";
import TernaryOperator from "./ternary-operator";
import WorkingWithFunctions from "./working-with-functions";
import WorkingWithArrays from "./working-with-arrays";

function JavaScript(){
    console.log('Hello World');
    return(
        <div>
            <h1>Java Script</h1>
            <VariablesAndConstants />
            <VariableTypes />
            <BooleanVariables/>
            <IfElse />
            <TernaryOperator />
            <WorkingWithFunctions />
            <WorkingWithArrays />
        </div>
    );
}

export default JavaScript;