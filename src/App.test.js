import { render, screen } from '@testing-library/react';
import App from './App';
import { fireEvent } from '@testing-library/react'; 
import '@testing-library/jest-dom';

test("update input answer", () => {
  render(<App />);
  const inputAnswer = screen.getByTestId("input"); 
  fireEvent.change(inputAnswer, { target: { value: 'demo' } });
   expect(inputAnswer).toHaveValue("demo");
  });
