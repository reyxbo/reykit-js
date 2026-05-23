import { ComponentProps } from 'react';
/**
 * Form component of prevent access link.
 *
 * @param props.handleFormData - Handle submited form data.
 * @param props.link - Access router link.
 */
export declare function Form({ handleFormData, link, onSubmit, ...props }: {
    handleFormData?: (formData: FormData) => any | Promise<any>;
    link?: string;
} & ComponentProps<'form'>): import("react/jsx-runtime").JSX.Element;
