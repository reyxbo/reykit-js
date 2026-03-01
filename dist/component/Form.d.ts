import { ComponentProps } from 'react';
/**
 * Form component of prevent access link.
 *
 * Parameters
 * ----------
 * @param handleFormData Handle submited form data.
 * @param link Access router link.
 *
 * Returns
 * -------
 * @returns React element.
 */
export default function Form({ handleFormData, link, onSubmit, ...props }: ComponentProps<'form'> & {
    handleFormData?: (formData: FormData) => void;
    link?: string;
}): import("react/jsx-runtime").JSX.Element;
