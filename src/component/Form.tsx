import { ComponentProps, SubmitEvent } from 'react';
import { useNavigate } from 'react-router-dom'

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
export default function Form(
    {
        handleFormData,
        link,
        onSubmit,
        ...props
    }: ComponentProps<'form'> & {
        handleFormData?: ( formData: FormData ) => void,
        link?: string
    }
) {

    // Parameter.
    const navigate = useNavigate()

    // On submit.
    let handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {

        // Prevent.
        event.preventDefault()

        // Handle submit.
        if (onSubmit) {
            onSubmit(event) // 为什么提示类型“SyntheticEvent<HTMLFormElement, Event>”的参数不能赋给类型“SubmitEvent<HTMLFormElement>”的参数，明明event: SyntheticEvent<HTMLFormElement>，不是SyntheticEvent<HTMLFormElement, Event>
        }

        // Handle form data.
        if (handleFormData) {
            const formdata = new FormData(event.currentTarget)
            handleFormData(formdata)
        }

        // Router.
        if (link) {
            navigate(link)
        }
    }

    return (
        <form onSubmit={handleSubmit} {...props} />
    )
}
