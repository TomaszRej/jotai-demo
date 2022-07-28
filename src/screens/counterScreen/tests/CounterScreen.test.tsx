import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import CounterScreen, {counterAtom} from '../CounterScreen';
import {Provider} from 'jotai';

describe('CounterScreen', () => {
  const navigation = jest.fn();
  test('should increment counter', () => {
    render(<CounterScreen navigation={navigation} />);

    const counter = screen.getByTestId('counter');

    expect(counter.props.children[1]).toBe(0);

    const incrementButton = screen.getByText('increment');
    fireEvent.press(incrementButton);

    expect(counter.props.children[1]).toBe(10);
  });

  test('should display correct initial value', () => {
    render(<CounterScreen navigation={navigation} />, {
      wrapper: ({children}) => (
        <Provider initialValues={[[counterAtom, 50]]}>{children}</Provider>
      ),
    });

    const counter = screen.getByTestId('counter');

    expect(counter.props.children[1]).toBe(50);
  });
});
