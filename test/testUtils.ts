import { FC, ReactElement } from 'react';

import { ShallowWrapper } from 'enzyme';

// @ts-ignore
import checkPropTypes from 'check-prop-types';


export const findByTestAttr = (wrapper: ShallowWrapper, val: string) => {
    return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component: JSX.Element, conformingProps: {[key: string]: any}) => {
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name,
    );
    expect(propError).toBeUndefined();
};
