import * as React from 'react';
import FieldContainer from './FieldContainer';
import styled from 'styled-components';

export interface Props {
    title: string;
    setTitle: (title: string) => void;
    autoFocus: boolean;
}

const Title: React.FunctionComponent<Props> = ({ 
    title, 
    setTitle, 
    autoFocus,
}) => (
    <FieldContainer>
        <StyledInput
            autoFocus={true}
            ref={(input) => { input ? input.focus() : null}}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="New Title"
        />
    </FieldContainer>
);

export default Title;

const StyledInput = styled('input')`
    padding-bottom: 0px;
    padding-left: 42px;
    padding-top: 32px;
    border: 0;
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 3px;
    transition: all 0.4s ease;
    font-size: 100%;
    box-sizing: border-box;
`
