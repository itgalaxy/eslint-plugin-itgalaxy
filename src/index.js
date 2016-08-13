import ava from './lib/config/ava';
import core from './lib/config/core';
import es5 from './lib/config/es5';
import esnext from './lib/config/esnext';
import lodash from './lib/config/lodash';
import node from './lib/config/node';
import react from './lib/config/react';

const configs = {
    ava,
    core,
    es5,
    esnext,
    lodash,
    node,
    react
};

export {
    configs // eslint-disable-line import/prefer-default-export
};
