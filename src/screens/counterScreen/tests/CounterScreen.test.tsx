import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import CounterScreen from '../CounterScreen';
import {counterAtom} from '../../../store/counter';
import {Provider} from 'jotai';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../App';

describe('CounterScreen', () => {
  test('should increment counter', () => {
    render(<MockedNavigator component={CounterScreen} />);

    const counter = screen.getByTestId('counter');

    expect(counter.props.children[1]).toBe(0);

    const incrementButton = screen.getByText('increment');
    fireEvent.press(incrementButton);

    expect(counter.props.children[1]).toBe(10);
  });

  test('should display correct initial value', () => {
    render(<MockedNavigator component={CounterScreen} />, {
      wrapper: ({children}) => (
        <Provider initialValues={[[counterAtom, 50]]}>{children}</Provider>
      ),
    });

    const counter = screen.getByTestId('counter');

    expect(counter.props.children[1]).toBe(50);
  });
});

const Stack = createNativeStackNavigator<RootStackParamList>();
const MockedNavigator = ({
  component,
}: {
  component: React.JSXElementConstructor<any>;
}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Counter" component={component} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MockedNavigator;
