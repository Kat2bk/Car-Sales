import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {addFeature, removeFeature} from "./actions";
import {connect} from "react-redux";
// need to add actions, and add connect to mapStateToProps so that we can add those actions
// we need two actions, to add and remove a feature

const App = (props) => {
  const {state, addFeature, removeFeature} = props;
  console.log(props, "getting state")

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} removeFeature={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures}  addFeature={addFeature}/>
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state
  };
}

export default connect(mapStateToProps, {addFeature, removeFeature})(App);
