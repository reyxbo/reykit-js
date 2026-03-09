import { ComponentProps, SubmitEvent } from 'react';
import { useNavigate } from 'react-router-dom'

/**
 * Form component of prevent access link.
 * 
 * @param handleFormData - Handle submited form data.
 * @param link - Access router link.
 */
export default function Form(
    {
        handleFormData,
        link,
        onSubmit,
        ...props
    }: {
        handleFormData?: ( formData: FormData ) => void | Promise<void>,
        link?: string
    } & ComponentProps<'form'>
) {

    // Parameter.
    const navigate = useNavigate()

    // On submit.
    let handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {

        // Prevent.
        event.preventDefault()

        // Handle submit.
        if (onSubmit) {
            onSubmit(event)
        }

        // Handle form data.
        if (handleFormData) {
            const formdata = new FormData(event.currentTarget)
            await handleFormData(formdata)
        }

        // Navigate.
        if (link) {
            navigate(link)
        }
    }

    return (
        <form onSubmit={handleSubmit} {...props} />
    )
}
