import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreateUserForm from '@components/Forms/CreateUser';

describe('input behavior', () => {
  test('display error message when filled in wrong', () => {
    render(<CreateUserForm />);

    const emailInput = screen.getByPlaceholderText(/email/i);
    const emailErrorMessage = screen.queryByText(
      /verifique se este é um e-mail válido/i,
    );

    expect(emailErrorMessage).not.toBeInTheDocument();

    // add invalid data
    userEvent.clear(emailInput);
    userEvent.type(emailInput, 'test');

    // show error message
    waitFor(() => {
      const onScreenErrorMessage = screen.getByText(
        /verifique se este é um e-mail válido/i,
      );
      expect(onScreenErrorMessage).toBeInTheDocument();
    });
  });

  test('hide error message when filled in right', () => {
    render(<CreateUserForm />);

    const emailInput = screen.getByPlaceholderText(/email/i);
    const emailErrorMessage = screen.queryByText(
      /verifique se este é um e-mail válido/i,
    );

    expect(emailErrorMessage).not.toBeInTheDocument();

    // add invalid data
    userEvent.clear(emailInput);
    userEvent.type(emailInput, 'test');

    // show error message
    waitFor(() => {
      const onScreenErrorMessage = screen.getByText(
        /verifique se este é um e-mail válido/i,
      );
      expect(onScreenErrorMessage).toBeInTheDocument();
    });

    // clear and add valid data
    userEvent.clear(emailInput);
    userEvent.type(emailInput, 'test@mail.com');

    // hide error message
    expect(emailInput).toHaveValue('test@mail.com');
    expect(emailErrorMessage).not.toBeInTheDocument();
  });
});
