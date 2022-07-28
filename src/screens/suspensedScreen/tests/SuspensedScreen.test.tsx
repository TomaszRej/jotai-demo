import React from 'react';
import {render, screen} from '@testing-library/react-native';
import SuspensedScreen from '../SuspensedScreen';
import {postData} from '../../../components/PostTitle';
import {Provider} from 'jotai';

const fakePostResponse = {title: 'fake_title'};

describe('SuspensedScreen', () => {
  test('should render correct title', async () => {
    render(<SuspensedScreen />, {
      wrapper: ({children}) => (
        <Provider initialValues={[[postData, fakePostResponse]]}>
          {children}
        </Provider>
      ),
    });

    const title = await screen.findByTestId('title');

    expect(title.props.children).toBe(fakePostResponse.title);
  });
});
