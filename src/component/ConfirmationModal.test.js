import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ConfirmationModal from './ConfirmationModal';

describe("modal case", () => {
    test('modal should be open when open value true', async () => {
        render(<ConfirmationModal open />);
        expect(screen.queryByTestId('modal-container')).toBeInTheDocument();
    });

    test('modal should not be open when open value false', async () => {
        render(<ConfirmationModal open={false} />);
        expect(screen.queryByTestId('modal-container')).not.toBeInTheDocument();
    });

    test('on close button click onClose should call', async () => {
        const handler = jest.fn();
        render(<ConfirmationModal open onClose={handler} />);

        await userEvent.click(screen.getByTestId("close-btn"));
        expect(handler).toHaveBeenCalled();
    });

    test('on confirm button click onConfirm should call', async () => {
        const handler = jest.fn();
        render(<ConfirmationModal open onConfirm={handler} />);

        await userEvent.click(screen.getByTestId("confirm-btn"));
        expect(handler).toHaveBeenCalled();
    });

    test('on cancel button click onCancel should call', async () => {
        const handler = jest.fn();
        render(<ConfirmationModal open onClose={handler} />);

        await userEvent.click(screen.getByTestId("cancel-btn"));
        expect(handler).toHaveBeenCalled();
    });

    test("title and description should render successfully",()=>{
        render(<ConfirmationModal open title="sample title" description="sample description" />);

        expect(screen.getByTestId('modal-container')).toHaveTextContent('sample title');
        expect(screen.getByTestId('modal-container')).toHaveTextContent('sample description');
    })

    test("cancelButtonLabel and confirmButtonLabel should render successfully",()=>{
        render(<ConfirmationModal open cancelButtonLabel="sample label" confirmButtonLabel="sample label 2" />);

        expect(screen.getByTestId('modal-container')).toHaveTextContent('sample label');
        expect(screen.getByTestId('modal-container')).toHaveTextContent('sample label 2');
    })
});