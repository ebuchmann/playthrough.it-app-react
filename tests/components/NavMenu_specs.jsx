import React from 'react';
import ReactDOM from 'react-dom';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithClass,
    Simulate,
} from 'react-addons-test-utils';
import NavMenu from '../../src/components/NavMenu';
import { expect } from 'chai';

describe('NavMenu', () => {

    const component = renderIntoDocument(
        <NavMenu name="Eric" />
    );

    it('has three links', () => {
        const links = scryRenderedDOMComponentsWithClass(component, 'link');

        expect(links.length).to.equal(3);
    });

    it('correctly passes in the name prop', () => {
        expect(component.props.name).to.equal('Eric');
    });

});
