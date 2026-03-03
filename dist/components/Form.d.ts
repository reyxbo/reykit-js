import { ComponentProps } from 'react';
/**
 * Form component of prevent access link.
 *
 * @param handleFormData Handle submited form data.
 * @param link Access router link.
 *
 * Returns
 * -------
 * @returns React element.
 */
export default function Form({ handleFormData, link, onSubmit, ...props }: {
    handleFormData?: (formData: FormData) => void;
    link?: string;
} & ComponentProps<'form'>): import("react/jsx-runtime").JSX.Element;
