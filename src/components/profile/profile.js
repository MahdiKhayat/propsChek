import React from "react"
import PropTypes from "prop-types";
import './prof.css';


const Profilee = (props) =>
{
    const data = props.dataPerson
  return(
      <div>
        <button onClick={props.alert}>Call</button>
        <h2>{data.fullName} </h2>
        <p>{data.bio}</p>
        <p>{data.Profession}</p>
        <img src={data.img}></img>
    </div>
  );
}

/* Profilee.propTypes = [{
    data.fullName: PropTypes.string},
    {data.bio: PropTypes.string},
    {data.Profession: PropTypes.string},
}] */

export default Profilee;