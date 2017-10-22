import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ProgressBar from './ProgressBar';

function setup(value) {
	return shallow(<ProgressBar value={value} maxValue={100} />);
}

describe('ProgressBar', () => {
	it('renders a div with a "fill" class', () => {
		let wrapper = setup(50);
		let fill = wrapper.find('.fill');
		expect(fill).to.have.length(1);
	});

	it('have proper width', () => {
		let wrapper = setup(50);
		let fill = wrapper.find('.fill');
		expect(fill.render().attr('style')).to.equal('width:50%');
	});
});
