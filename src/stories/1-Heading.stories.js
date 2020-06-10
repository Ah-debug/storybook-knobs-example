import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { Heading} from '../components/Heading';


export default {
    title: 'Heading',
    // Add the `withKnobs` decorator to add knobs support to your stories.
    decorators: [withKnobs]
};

// Knobs for React props
export const WithHeading = () => {
    const boolVal = boolean('hasFruit', true);
    const textVal = text('fruitName', 'Apple');
    return (<Heading hasFruit={boolVal} fruitName={textVal}/>);
};
