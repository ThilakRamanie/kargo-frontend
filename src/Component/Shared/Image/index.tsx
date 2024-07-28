import React from 'react';
import PropTypes from 'prop-types';

import { ImageProps } from '../../../Constants/interfaces';

const Image: React.FC<ImageProps> = ({
    src,
    alt,
    width = 'auto',
    height = 'auto',
    style = {},
    className = '',
    onClick = () => { },
    ...props
}) => {
    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            style={style}
            className={className}
            onClick={onClick}
            {...props}
        />
    );
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    style: PropTypes.object,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Image;
