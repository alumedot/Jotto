import { FC } from 'react';

import { createStore, applyMiddleware } from 'redux';
import { ReactWrapper, ShallowWrapper } from 'enzyme';

// @ts-ignore
import checkPropTypes from 'check-prop-types';

import rootReducer from '../src/store/rootReducer';
import { middlewares } from '../src/configureStore';


export const storeFactory = <State>(initialState: State) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
};


export const findByTestAttr = (wrapper: ShallowWrapper | ReactWrapper, val: string) => {
    return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = <Props>(component: FC<Props>, conformingProps: Props) => {
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name,
    );
    expect(propError).toBeUndefined();
};
