import React from 'react';
import ReactDOM from 'react-dom';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithClass,
    Simulate,
} from 'react-addons-test-utils';
import SiteHeader from '../../src/components/SiteHeader';
import { expect } from 'chai';

describe('SiteHeader', () => {

    it('has six links', () => {
        const Wrapper = React.createClass({
            render() {
                return (
                    <div>{this.props.children}</div>
                )
            }
        });
        const component = renderIntoDocument(
            <Wrapper>
                <SiteHeader />
            </Wrapper>
        );

        const links = scryRenderedDOMComponentsWithClass(component, 'link');

        expect(links.length).to.equal(6);
    });

});
