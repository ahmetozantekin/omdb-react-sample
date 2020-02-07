import React, { Component } from 'react'

export class Duotone extends Component {
    render() {
        return (
            <svg className="deftones">
                <filter id="duotone" colorInterpolationFilters="sRGB"
                        x="0" y="0" height="100%" width="100%">
                <feColorMatrix type="matrix"
                    values="0.40 0 .1 0   0.30 
                            0.10 1 0 0  -0.10  
                        -0.30 .5 0 0   0.45 
                            0  0 0 1   0" />
                </filter>
            </svg>
        )
    }
}

export default Duotone;
