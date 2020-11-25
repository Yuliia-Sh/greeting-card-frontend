import React from 'react'
import './style.css'
import PropTypes from 'prop-types'

export default function ElementLink(props) {
    
    let element = (props.imageOrAudio === "image") ? <img src={props.src} alt="" className="link-element link-element_image"/>
                                                   : <audio controls className="link-element link-element_audio">
                                                   <source src={props.src} type="audio/mp3"/>
                                               </audio>;
    if (!props.isPreview) {
       const idCheckBox="delete_" + props.imageOrAudio + "_" + props.linkId;
       element = [<label htmlFor={idCheckBox}>
              {element}
       </label>,
       <input type="checkbox" id={idCheckBox} onChange={props.onSelectLinkFunction(props.linkId)}/>
       ];
    }

    return (
        <div className="element-with-checkbox">
            {element}
        </div>
    )
}

ElementLink.propTypes = {
    isPreview: PropTypes.bool,
    src: PropTypes.string,
    imageOrAudio: PropTypes.string,
    linkId:PropTypes.number,
    onSelectLinkFunction:PropTypes.func
}