const actionTypeCreator = type => ({
    REQUEST: `${type}_REQUEST`,
    SUCCESS: `${type}_SUCCESS`,
    FAILURE: `${type}_FAILURE`
});

export default actionTypeCreator;
