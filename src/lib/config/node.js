import nodeRules from './rules/node';

export default {
    env: {
        node: true
    },
    plugins: [
        'node'
    ],
    rules: nodeRules
};
